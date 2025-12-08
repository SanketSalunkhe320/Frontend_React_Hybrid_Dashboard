import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
            <p style={styles.text}>Designed and Developed by Taikisha India.</p><br></br>

      <p style={styles.text}>© 2025 Taikisha India | All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #005baa, #0077cc)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    fontSize: '16px',
    fontWeight: '600',
    boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.15)',
    marginTop: 'auto',
  },
  text: {
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpacing: '0.5px',
  },
};
