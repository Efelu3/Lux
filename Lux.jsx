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
      fontFamily: 'Space Grotesk, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      transition: 'opacity 1s ease-in',
      opacity: fadeIn ? 1 : 0
    }}>
      <h1 style={{
        fontFamily: 'DM Serif Display, serif',
        fontSize: '3rem',
        fontWeight: 'normal',
        letterSpacing: '0.02em',
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
        <p style={{
          fontSize: '1rem',
          marginBottom: '2rem',
          color: '#ccc',
          textAlign: 'center'
        }}>
          Puedes hacer una consulta gratuita.  
          Si deseas acceso continuo, suscríbete por S/.10 al mes.
        </p>

        <a
          href="https://chat.openai.com/g/g-68161a70e0f08191807705fc5d119485-lucidez-total"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button style={{
            width: '100%',
            padding: '0.85rem',
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            marginBottom: '1rem'
          }}>
            Hacer prueba gratuita
          </button>
        </a>

        <a
          href="https://www.mercadopago.com.pe/subscriptions/checkout?preapproval_plan_id=2c93808496ee762b0196f50f656f0302"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button style={{
            width: '100%',
            padding: '0.85rem',
            backgroundColor: '#f2f2f2',
            color: '#000000',
            border: '1px solid #333',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Suscribirme por S/.10
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
