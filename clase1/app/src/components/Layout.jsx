import React from 'react';


 /*Componente Layout el cual tendrá como prop un hijo que se dio como ejemplo tener todo un layout de nuestra pagina y el prop de children seria toda la estructura cambiante de la pagina web

 Es decir aca se puede declarar el Navbar, Sidebar, Footer y el contenido seria lo que estaría recibiendo por props
 */
export default function Layout({ children }) {
  return (
    <>
      {/*  Sidebar */}
      {/*  Navbar */}
      {/*  content */}
      <div>{children}</div>
      {/*  end content */}

      {/*  Footer */}
    </>
  );
}
