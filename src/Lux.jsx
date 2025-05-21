import React, { useEffect, useState } from "react";

export default function Lux() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      transition: 'opacity 1s ease-in',
      opacity: fadeIn ? 1 : 0
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '600',
        letterSpacing: '0.05em',
        marginBottom: '1rem'
      }}>
        LUX
      </h1>

      <p style={{
        fontSize: '1.25rem',
        maxWidth: '40rem',
        textAlign: 'center',
        color: '#e0e0e0',
        marginBottom: '3rem'
      }}>
        Esto no es una guía. Es una interrupción.
      </p>

      <div style={{
        backgroundColor: '#1a1a1a',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        width: '100%',
        maxWidth: '32rem',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 0 40px rgba(255, 255, 255, 0.02)'
      }}>
        <h2 style={{
          fontSize: '0.9rem',
          fontWeight: '400',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          opacity: 0.6,
          marginBottom: '0.5rem'
        }}>
          Llave de acceso
        </h2>
        <p style={{
          fontSize: '1rem',
          fontStyle: 'italic',
          color: '#ccc'
        }}>
          “Háblame con la verdad y haciendo uso de todo tu potencial.”
        </p>

        <a
          href="https://chat.openai.com/g/g-68161a70e0f08191807705fc5d119485-lucidez-total"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button style={{
            marginTop: '1.75rem',
            width: '100%',
            padding: '0.85rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s ease',
          }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 12px white'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            Ingresa a LUX
          </button>
        </a>
      </div>

      <div style={{
        fontSize: '0.85rem',
        color: '#777',
        marginTop: '3rem',
        letterSpacing: '0.05em'
      }}>
        F. L. E.
      </div>
    </div>
  );
}


