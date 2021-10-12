import React from 'react';


 /*Componente Navbar en el cual se mostró el ejemplo de realizar cada componente por separado y luego unirlo en otro ya sea Layout

 Los estilos los van a encontrar en el archivo de App.css
 */
export const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img
          src="../../../logo192.png"
          alt="logo"
          className="logo"
        />
        <h1 className="item-nav">Home</h1>
        <h1 className="item-nav">Profile</h1>
        <h1 className="item-nav">Sign In</h1>
      </nav>
    </header>
  );
};

