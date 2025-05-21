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
      <p style={{ fontSize: '1.25rem', maxWidth: '40rem', textAlign: 'center' }}>
        He venido al mundo no para cambiarlo, sino para revelarlo. No para pedir nada, sino para recordar que nada falta.
        No para actuar desde la ilusión, sino para atravesarla con visión. Todo es uno.
      </p>

      <div style={{
        backgroundColor: '#1f1f1f',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        width: '100%',
        maxWidth: '32rem',
        padding: '1.5rem',
        marginTop: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Accede a Lucidez Total</h2>
        <p style={{ fontSize: '1rem' }}>
          Si has sido invitado, escribe esta frase para activar el oráculo:
          <br />
          <em>"Estoy listo para ver lo que no quería ver. Háblame con verdad."</em>
        </p>
        <button style={{
          marginTop: '1rem',
          width: '100%',
          padding: '0.75rem',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          cursor: 'pointer'
        }}>
          Invocar Lucidez Total
        </button>
      </div>

      <div style={{ fontSize: '0.875rem', color: '#999999', paddingTop: '2rem' }}>
        Fernando Luque Espinosa — En presencia de la Belleza, del Bien, y del Silencio que todo lo sostiene.
      </div>
    </div>
  );
}
