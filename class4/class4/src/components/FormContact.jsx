/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Form Contact Ejercicio de la presentacion

export default function FormContact() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // array para solucionar problema de la presentacion
    const codes = ['KeyA', 'KeyE', 'KeyI', 'KeyU', 'KeyO'];
    const onSubmit = (e) => {
        try {
            e.preventDefault();
            const user = {
                name,
                lastName,
                email,
                message
            };
            console.log(user);
        } catch (error) {
            console.log(error)
        } finally {
            cleanData();
        }
    }
    const cleanData = () => {
        setName('');
        setEmail('');
        setLastName('');
        setMessage('')
    }

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 1200) {
                console.log(window.innerHeight);
            }
        }
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize',onResize);
        }
    });
    return(
        <form 
        className="w-full max-w-lg mt-20 justify-center items-center mx-auto" 
        onSubmit={onSubmit}>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input 
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
        id="grid-first-name" 
        type="text"
        value={name}
        onKeyDown={(e) => {
            // cancelar evento cuando se escriba una vocal
            const flag = codes.some((key) => key === e.code)
            if(flag) {
                e.preventDefault();
            }
        }} 
        placeholder="Jane"
        onChange={(e) => {
            setName(e.target.value);
        }}
        />
      {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-last-name" 
      type="text"
      value={lastName}  
      placeholder="Doe"
      onChange={(e) => {
        setLastName(e.target.value);
    }} 
    />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        E-mail
      </label>
      <input 
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="email" 
      type="email"
      value={email}
      required 
      onChange={(e) => {
        console.log(e)
        setEmail(e.target.value);
    }}
      />
      <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea 
      className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
      id="message"
      value={message}
      onChange={(e) => {
        setMessage(e.target.value);
    }}/>
      <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button 
        className="shadow bg-indigo-700 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
        type="submit"
        >
            Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
    )
}