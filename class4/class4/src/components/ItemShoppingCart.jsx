/* eslint-disable react/prop-types */
import React from 'react';


export default function ItemShoppingCart({product, key}) {
    const [quantity, setQuantity] = React.useState(1);
    return(
        <div className="flex justify-between mt-6" key={key}>
        <div className="flex">
            <img className="h-20 w-20 object-cover rounded" src={product?.img} alt=""/>
            <div className="mx-3">
                <h3 className="text-sm text-gray-600">{product?.title}</h3>
                <div className="flex items-center mt-2">
                    <button 
                      className="text-gray-500 focus:outline-none focus:text-gray-600" 
                      onClick={(e) => {
                        e.preventDefault();
                        setQuantity(quantity + 1);
                      }}
                    >
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </button>
                    <span className="text-gray-700 mx-2">{quantity}</span>
                    <button 
                      className="text-gray-500 focus:outline-none focus:text-gray-600"
                      onClick={(e) => {
                          e.preventDefault();
                          if (quantity > 1) {
                              setQuantity(quantity - 1);
                          }
                        }}
                      >
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
        <span className="text-gray-600">${Number(product?.price).toLocaleString('en-EN')}</span>
    </div> 
    )
}