import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import Layout from '../components/Layout';
import CardDetailProduct from '../components/CardDetailProduct';


export default function ProductDetail() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const { id } = params;
    const products = [
        {
          title: 'Back Pack 1',
          description: 'This is the description about the product',
          price: 30000,
          img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
          id: '1',
        },
        {
            title: 'Back Pack 2',
            description: 'This is the description about the product',
            price: 30000,
            img: 'https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
            id: '2',
          },
          {
            title: 'Back Pack 3',
            description: 'This is the description about the product',
            price: 30000,
            img: 'http://images.unsplash.com/photo-1591970698020-e685959dcdaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
            id: '3',
          },
          {
            title: 'Back Pack 4',
            description: 'This is the description about the product',
            price: 30000,
            img: 'https://image.made-in-china.com/202f0j10OLyUIjCRZWbG/32-Inch-TV-Product-Digital-Full-HD-LED-Home-Television.jpg',
            id: '4',
          },
          {
            title: 'Back Pack 5',
            description: 'This is the description about the product',
            price: 30000,
            img: 'https://image.made-in-china.com/202f0j10nDFfHyeBLioG/32-Inch-TV-Product-Digital-Full-HD-LED-Home-Television.jpg',
            id: '5',
          },
          {
            title: 'Back Pack 6',
            description: 'This is the description about the product',
            price: 30000,
            img: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/468474-Product-0-I-637393122238530235_1080x.jpg',
            id: '6',
          },
      ];
    useEffect(() => {
        const getProductById = () => {
            const _product = products.find((product) => product?.id === id);
            setProduct(_product);
        }
        getProductById();
    }, []);
    console.log(products)
    return(
        <Layout>
            <Slide>
                <CardDetailProduct title={product?.title} description={product?.description} price={product?.price} img={product?.img} />
            </Slide>
        </Layout>
    )
}