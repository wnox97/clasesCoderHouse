/* eslint-disable react/prop-types */
import React from 'react';

export default function ChildrenExample({ children, title }) {
  return (
    <>
      <h1 className="text-center mb-4 px-4">{title}</h1>
      {children}
    </>
  );
}




