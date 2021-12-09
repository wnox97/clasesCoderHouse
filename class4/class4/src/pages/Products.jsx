/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import { getFirestoreDb } from '../lib/firebaseConfig';
import CardProduct from '../components/CardProduct';
import { Fade } from 'react-awesome-reveal';
import Layout from '../components/Layout';
import { useDarkMode } from '../hooks/useDarkMode';
import { useProducts } from '../hooks/useProducts';
import Loader from '../components/Loader';


function Products() {
    const db = getFirestoreDb();
    const [_, setProducts] = useProducts();
    const [productsDb, setProductsDb] = useState([]);

    useEffect(() => {
      const getProductsFirestore = async () => {
        const queryCollection  = query(collection(db, 'products'))
        const querySnapshot = await getDocs(queryCollection);
        const aux = [];
        querySnapshot.forEach((doc) => {
          aux.push(doc.data());
        });
        setProductsDb(aux);
      }
      getProductsFirestore();
    }, [])

    // pass function to component Card Product  child onClick
    const onClickProduct = (product) => {
      setProducts((prev) => [...prev, product]);
    };

    return(
        <Layout>
        <section className="w-full flex flex-row flex-wrap mx-auto justify-center items-center h-full mt-4">
             {productsDb?.length > 0 && productsDb ? (
              productsDb?.map((product) => (
                <div className="w-1/3 mx-4" key={product?.title}>
                    <Fade  delay={500}>
                      <CardProduct 
                        title={product.title} 
                        price={product.price} 
                        description={product.description} 
                        id={product.id} 
                        img={product.img} 
                        onClick={onClickProduct} />
                    </Fade>
                </div>
            ))
            ): ( 
              <Loader />
             )} 
        </section>
        </Layout>

    )
}

// Example about memo dont have to use memo in this component
export default React.memo(Products);