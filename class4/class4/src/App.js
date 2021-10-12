import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import CardInformation from './components/CardInformation';
import ExampleMovieCard from './components/ExampleMovieCard';
import Wave from './components/illustrations/Wave';
import Navbar from './components/Navbar';
import ChildrenExample from './components/ChildrenExample';
import './App.css';

function App() {
  // Realizar datos para recorrer diferentes peliculas del componente de movie card

  const movies = [
    {
      name: '',
      description: '',
      img: '',
      type: '',
      date: '',
      price: '',
    },
  ];

  const description =
    'En esta clase vamos a implementar lo que son los tipos de componentes, en que se diferencian, como se implementan. Estaremos viendo diferentes ejemplos de los componentes, manejo de las props, estados. Espero que disfruten esta clase y cualquier duda la comentan para resolverla.';
  return (
    <main className="w-full min-h-screen flex flex-wrap flex-col mx-auto">
      <header className="w-full flex flex-row">
        <Navbar />
      </header>
      <section className="w-full h-auto bg-indigo-900">
        <WelcomeMessage
          name="Profesor: Wilmer Montilla"
          description={description}
        />
      </section>
      <Wave color="#312e81" />
      <CardInformation flag={true} />
      <ExampleMovieCard movies={movies} />
      <ChildrenExample title="children ejemplo">
        <div className="bg-gray-100 rounded-lg w-1/2 mx-auto px-4 mt-4 mb-4 py-4 justify-items-center items-center">
          <h1 className="text-4xl text-center font-semibold">
            este es el children
          </h1>
        </div>
      </ChildrenExample>
    </main>
  );
}

export default App;
