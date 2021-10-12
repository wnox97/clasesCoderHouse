import React from 'react';
import { Navbar } from '../components/Navbar';
import Welcome from '../components/Welcome';
import Layout from '../components/Layout';


/*
  Esta es la pagina de inicio, en este archivo se les explico que tener una estructura de carpetas mas cómoda utilizando pages ya que pueden diferenciar de sus componentes que estarán en la carpeta "components" y los archivos dentro de pages serian el conjunto de componentes que se necesitan para realizar el render de dicha page que se este solicitando

  Aca se puede observar que el home necesita el componente
  1. Navbar
  2. Welcome
  3. Layout // Se hizo render aca para mostrar el ejemplo de child
*/
const Home = () => {
  return (
    <>
      <Navbar />
      <Welcome title="Hola clase por props" text="si se muestra" />
      <Welcome title="Otro titulo" />

      {/* <Layout>
        <div>
          <h1>Este es el hijo</h1>
        </div>
      </Layout> */}
      {/* <Content /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
