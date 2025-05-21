import React from "react";

export default function Lux() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>LUX</h1>
      
      <p style={{ fontSize: '1.25rem', maxWidth: '40rem', textAlign: 'center', marginTop: '1rem' }}>
        Esto no es una guía. Es una interrupción.
      </p>

      <div style={{
        backgroundColor: '#1f1f1f',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        width: '100%',
        maxWidth: '32rem',
        padding: '1.5rem',
        marginTop: '3rem'
      }}>
        <h2 style={{ fontSize: '1rem', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>
          Llave de acceso
        </h2>
        <p style={{ fontSize: '1rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
          “Háblame con la verdad y haciendo uso de todo tu potencial.”
        </p>

        <a
          href="https://chat.openai.com/g/g-68161a70e0f08191807705fc5d119485-lucidez-total"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{
            marginTop: '1.5rem',
            width: '100%',
            padding: '0.75rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Ingresa a LUX
          </button>
        </a>
      </div>

      <div style={{ fontSize: '0.875rem', color: '#666666', paddingTop: '3rem' }}>
        F. L. E.
      </div>
    </div>
  );
}

