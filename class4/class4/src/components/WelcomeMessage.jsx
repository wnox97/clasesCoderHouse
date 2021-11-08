import React from 'react';
import PropTypes from 'prop-types';
import WelcomeIllustration from './illustrations/Welcome';

WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default function WelcomeMessage({ name, description }) {
  return (
    <>
      <section className="w-full px-4 flex flex-row-reverse flex-wrap mt-16 mb-20">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex flex-col flex-wrap">
          <WelcomeIllustration className="w-full h-auto m-auto" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col flex-wrap lg:pr-10">
          <h1 className="text-4xl lg:text-7xl font-semibold text-white">
            Bienvenidos al curso de React - Clase 9-10
            <br />
          </h1>
          <h2 className="text-white text-xl mt-4 font-semibold">{name}</h2>
          <p className="text-white text-justify my-4 text-lg font-medium">
            {description ??
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          quasi impedit architecto eos quas facere velit fuga exercitationem aut
          illum quae minus inventore quibusdam veniam earum! Quam laboriosam
          saepe cum`}
          </p>
          <div className="w-full flex flex-row flex-wrap mt-4"></div>
        </div>
      </section>
    </>
  );
}
