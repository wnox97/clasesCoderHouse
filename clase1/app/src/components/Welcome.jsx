import React from 'react';

 /*Componente de Bienvenida en el cual se explico
  1. Nullish Operator, en el cual si el prop title es null se muestra el mensaje de 'hola clase'

  2. Manejo de Props
 */
const Welcome = ({ title, text }) => {
  return (
    <div>
      <h1>{title ?? 'Hola clase'}</h1>
      {text && <p>{text}</p>}
    </div>
  );
};

export default Welcome;
