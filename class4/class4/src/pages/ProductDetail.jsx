import React, { useEffect, useState } from 'react';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { getFirestoreDb } from '../lib/firebaseConfig';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import Layout from '../components/Layout';
import CardDetailProduct from '../components/CardDetailProduct';
import Loader from '../components/Loader';

export default function ProductDetail() {
  const db = getFirestoreDb();
  const [product, setProduct] = useState({});
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getProductById = async () => {
      const queryCollection = query(
        collection(db, 'products'),
        where('id', '==', `${id}`)
      );
      const querySnapshot = await getDocs(queryCollection);
      let aux = {};
      querySnapshot.forEach((doc) => {
        aux = { ...doc.data() };
      });
      setProduct(aux);
    };
    getProductById();
  }, []);
  return (
    <Layout>
      {product ? (
        <Slide>
          <CardDetailProduct
            title={product?.title}
            description={product?.description}
            price={product?.price}
            img={product?.img}
            id={product?.id}
          />
        </Slide>
      ) : (
        <Loader />
      )}
    </Layout>
  );
}
