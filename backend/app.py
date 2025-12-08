from flask import Flask, jsonify
from flask_socketio import SocketIO
import snap7
from snap7.util import get_bool, get_int
from snap7.type import Areas
import eventlet

# ----------------------------
# PLC CONFIGURATION
# ----------------------------
PLC_IP = "192.168.1.10"
RACK = 0
SLOT = 1

# Accessible DBs
DB14 = 14   # LCP & MLS
DB26 = 26   # Start/Stop & Bypass
DB38 = 38   # LH/RH speed & PLC comm LED
DB39 = 39   # Auto/Manual

# Byte/Bit Offsets
# DB14
OFFSET_LCP1 = 22
OFFSET_LCP2 = 24
OFFSET_LCP3 = 26
OFFSET_MLS = 14

# DB26
OFFSET_STARTSTOP_BYTE = 1
OFFSET_STARTSTOP_BIT = 1
OFFSET_BYPASS_BYTE = 0
OFFSET_BYPASS_BIT = 3

# DB38
OFFSET_LH_SPEED = 24
OFFSET_RH_SPEED = 28
OFFSET_COMM = 32   # PLC communication LED
BIT_COMM = 0

# DB39
OFFSET_AUTO = 0.1
OFFSET_MANUAL = 0.2

# ----------------------------
# Flask Setup
# ----------------------------
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

# ----------------------------
# PLC Connection
# ----------------------------
client = snap7.client.Client()
try:
    client.connect(PLC_IP, RACK, SLOT)
    print("✅ Connected to PLC")
except Exception as e:
    print("❌ PLC connection failed:", e)

# ----------------------------
# Helper Functions
# ----------------------------
def read_bool_safe(db, byte, bit):
    """Read bool safely; return False if DB not accessible"""
    try:
        data = client.read_area(Areas.DB, db, int(byte), 1)
        return get_bool(data, 0, int(bit))
    except Exception:
        return False

def read_int_safe(db, byte):
    """Read int safely; return 0 if DB not accessible"""
    try:
        data = client.read_area(Areas.DB, db, int(byte), 2)
        return get_int(data, 0)
    except Exception:
        return 0

# ----------------------------
# Background Task
# ----------------------------
# ----------------------------
# Background Task
# ----------------------------
def plc_task():
    while True:
        try:
            # PLC Communication LED
            plc_comm_led = read_bool_safe(DB38, OFFSET_COMM, BIT_COMM)

            # LCPs & MLS (DB14)
            lcp1 = read_int_safe(DB14, OFFSET_LCP1)
            lcp2 = read_int_safe(DB14, OFFSET_LCP2)
            lcp3 = read_int_safe(DB14, OFFSET_LCP3)
            mls = read_int_safe(DB14, OFFSET_MLS)

            # Start/Stop & Bypass (DB26)
            start_stop = read_bool_safe(DB26, OFFSET_STARTSTOP_BYTE, OFFSET_STARTSTOP_BIT)
            bypass = read_bool_safe(DB26, OFFSET_BYPASS_BYTE, OFFSET_BYPASS_BIT)

            # Speeds (DB38)
            lh_speed = read_int_safe(DB38, OFFSET_LH_SPEED)
            rh_speed = read_int_safe(DB38, OFFSET_RH_SPEED)

            # Auto/Manual (DB39)
            auto_status = read_bool_safe(DB39, 0, 1)   # offset 0.1 → byte 0, bit 1
            manual_status = read_bool_safe(DB39, 0, 2) # offset 0.2 → byte 0, bit 2

            # ----------------------------
            # Interlocks (example mapping)
            # ----------------------------
            # Read from PLC or mock for now
            tim_sensor = True          # Example: No obstacle (Healthy)
            pendant_estop = False      # Example: Pressed (Fault)
            front_estop = True
            rear_estop = True
            lh_healthy = True
            rh_healthy = True

            # Convert to LED colors
            interlocks = {
                "tim_sensor": "green" if tim_sensor else "red",
                "pendant_estop": "green" if pendant_estop else "red",
                "front_estop": "green" if front_estop else "red",
                "rear_estop": "green" if rear_estop else "red",
                "lh_healthy": "green" if lh_healthy else "red",
                "rh_healthy": "green" if rh_healthy else "red",
            }

            # Build payload
            payload = {
                "comm_status": "online" if plc_comm_led else "offline",
                "plc_comm_led": plc_comm_led,
                "lcp1": lcp1,
                "lcp2": lcp2,
                "lcp3": lcp3,
                "mls": mls,
                "lh_speed": lh_speed,
                "rh_speed": rh_speed,
                "auto_manual": "Auto" if auto_status else "Manual" if manual_status else "Unknown",
                "start_stop": start_stop,
                "bypass": bypass,
                "interlocks": interlocks,
            }

        except Exception as e:
            payload = {"comm_status": "offline", "plc_comm_led": False, "auto_manual": "Unknown"}
            print("⚠️ Error reading PLC:", e)

        socketio.emit("plc_status", payload)
        eventlet.sleep(1)


# ----------------------------
# Routes
# ----------------------------
@app.route("/")
def home():
    return jsonify({"message": "Taikisha PLC WebSocket Server running ✅"})

# ----------------------------
# Main Entry
# ----------------------------
if __name__ == "__main__":
    socketio.start_background_task(plc_task)
    socketio.run(app, host="0.0.0.0", port=5000)
