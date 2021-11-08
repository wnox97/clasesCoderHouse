/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

ExampleMovieCard.propTypes = {
  movies: PropTypes.array,
};

export default function ExampleMovieCard({ movies }) {
  return (
    <>
    <div className="w-full justify-items-center items-center mx-auto mt-20 mb-20">
      <h1 className="text-3xl text-center text-gray-700 font-semibold md:text-red-600 lg:text-gray-700">Ejemplo de Componente Funcional</h1>
    </div>
      <div className="py-3 sm:max-w-xl px-4 mt-4 mx-10 mb-32">
        <div className="shadow-lg border-gray-100 max-h-80 border sm:rounded-3xl p-8 flex space-x-8 bg-green-800">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold text-white">
                Sweet Tooth: El niño ciervo
              </h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2 text-white">7.2</div>
            </div>
            <div>
              <div className="text-sm text-white">Series</div>
              <div className="text-lg text-white">2019</div>
            </div>
            <p className=" text-white max-h-40 overflow-y-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex text-2xl font-bold text-white">$83.90</div>
          </div>
        </div>
      </div>
    </>
  );
}
