import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { addDoc } from 'firebase/firestore';
import Layout from '../components/Layout';
import { getFirestoreDb, getCollection } from '../lib/firebaseConfig';
import TableShoppingCart from '../components/TableShoppingCart';
import { useProducts } from '../hooks/useProducts';

export default function Cart() {
  const [products, setProducts] = useProducts();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotalAmount = () => {
      if (products?.length > 0) {
        const total =
          products?.reduce(
            (previous, current) =>
              previous?.price * previous?.quantity +
              current?.price * current?.quantity
          ) ?? 0;
        setTotal(total);
      }
    };
    getTotalAmount();
  }, [products]);

  const buyProducts = async () => {
    try {
      const db = getFirestoreDb();
      const collection = getCollection(db, 'orders');
      const total = products?.reduce(
        (previous, current) =>
          previous?.price * previous?.quantity +
          current?.price * current?.quantity
      );
      const addProducts = await addDoc(collection, {
        buyer: {
          name: 'Wilmer',
          phone: '04246698611',
          email: 'w.montilla3007@gmail.com',
        },
        items: products?.map((product) => product),
        total,
      });
      if (addProducts?._key?.path?.segments?.[1] !== '') {
        setProducts([]);
        Swal.fire(
            'Success!!',
            'The purchase has been made successfully',
            'success'
          ); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <section className="flex flex-row mt-4 mb-4 justify-center items-center px-4 w-full h-20 py-4">
        <div className="w-full h-full bg-gray-200 shadow-lg rounded-lg mx-auto flex flex-row">
          {products?.length === 0 ? (
            <h1 className="text-xl text-gray-700 my-auto mx-4 font-semibold">
              Dont have products in the shopping cart
            </h1>
          ) : (
            <h1 className="text-xl text-gray-700 my-auto mx-4 font-semibold">
              Total Amount :{' '}
              <span className="text-gray-900 mx-4 text-2xl">
                {Number(total).toLocaleString('en-EN')}
              </span>
            </h1>
          )}
        </div>
      </section>
      <section className="flex flex-col mx-auto justify-center items-center px-4 w-full h-full">
        <TableShoppingCart />
      </section>
      <section className="w-full mx-auto flex flex-row px-8 mt-4">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setProducts([]);
          }}
          className="uppercase text-sm px-4 py-4 bg-red-700 text-white text-center rounded-lg shadow-lg ml-auto"
        >
          Cancel order
        </button>
        <button
          type="button"
          onClick={buyProducts}
          className="uppercase text-sm px-4 py-4 bg-gray-700 text-white text-center rounded-lg shadow-lg mx-4"
        >
          Buy products
        </button>
      </section>
    </Layout>
  );
}
