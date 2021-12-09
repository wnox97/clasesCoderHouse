/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ItemShoppingCart from './ItemShoppingCart';


export default function ShoppingCart({cartOpen, setCartOpen}) {
    const [products, setProducts] = useProducts();
    return(
        <div className={`${cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'} fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300`}>
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    setCartOpen(false);
                }} 
                className="text-gray-600 focus:outline-none">
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <hr className="my-3"/>
        {products?.map((product ,index) => (
            <ItemShoppingCart product={product} key={`${product?.title}-${index}`}/>
        ))}
        <div className="mt-8">
            <form className="flex items-center justify-center">
                <input className="form-input w-48" type="text" placeholder="Add promocode"/>
                <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <span>Apply</span>
                </button>
            </form>
        </div>
        <Link to="/cart">
            <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Chechout</span>
            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
        </Link>
    </div>
    )
}