/* eslint-disable react/prop-types */
import React from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import CardInformation from '../components/CardInformation';
import ExampleMovieCard from '../components/ExampleMovieCard';
import Wave from '../components/illustrations/Wave';
import ChildrenExample from '../components/ChildrenExample';
import Layout from '../components/Layout';
import FormContact from '../components/FormContact';

export default function Home() {
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
        'En esta clase le vamos a dedicar tiempo a repasar lo que es el routing, eventos y como usarlos en nuestra aplicación y como mantener nuestros valores de nuestra app evitando el nesting props de cada uno de los componentes';
    return(
        <>
        <Layout>
        <section className={`w-full h-auto bg-indigo-900`}>
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
        <FormContact />
        </Layout>
        </>

    )
}