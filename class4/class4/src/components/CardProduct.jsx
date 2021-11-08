import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export default function CardProduct({title, description, price, id , img, onClick}){
    const product = {
        title, 
        description,
        price,
        id,
        img
    };
    return(
        <div className="py-6">
  <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover" style={{backgroundImage: `url('${img}')`}}>
    </div> 
    <div className="w-2/3 p-4">
      <h1 className="text-gray-900 font-bold text-2xl">{title ?? 'Back Pack'}</h1>
      <p className="mt-2 text-gray-600 text-sm">{description ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia'}</p>
      <div className="flex item-center mt-2">
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
      </div>
      <div className="flex item-center justify-between mt-3">
        <h1 className="text-gray-700 font-bold text-xl">${Number(price).toLocaleString('en-EN') ?? '200,000'}</h1>
        <button 
        className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" 
        onClick={(e) => { 
            e.preventDefault();
            // validationProducts(products);
            onClick(product);
            Swal.fire(
                'Exitooo!',
                'Se ha agregado el producto a tu carrito de compras',
                'success'
              );
        }}
        >
            Add to Card
        </button>
      </div>
      <div className="w-full flex flex-row">
        <Link to={`/products/${id ?? '1'}`}>
            <button>Ver mas detalle</button>
        </Link>
      </div>
    </div>
  </div>
</div>
)
}

CardProduct.propTypes = {
    title: PropTypes?.string,
    description: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    id: PropTypes.string,
    onClick: PropTypes.func
}
