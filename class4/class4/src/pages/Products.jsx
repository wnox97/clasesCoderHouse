/* eslint-disable no-unused-vars */
import React from 'react';
import CardProduct from '../components/CardProduct';
import { Fade } from 'react-awesome-reveal';
import Layout from '../components/Layout';
import { useDarkMode } from '../hooks/useDarkMode';
import { useProducts } from '../hooks/useProducts';

export default function Products() {
    // arrays of products to show in page
    const productsArray = [
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
    const [darkMode, setDarkMode] = useDarkMode();
    const [products, setProducts] = useProducts();
    // React.useEffect(() => {
    //   if(products?.length > 0) {
    //     setDarkMode(true);
    //   }
    // }, []);

    // pass function to component Card Product  child onClick
    const onClickProduct = (product) => {
      setProducts((prev) => [...prev, product]);
    };

    console.log(products)
    return(
        <Layout>
        <section className="w-full flex flex-row flex-wrap mx-auto justify-center items-center h-full mt-4">
            {productsArray?.map((product) => (
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
            ))} 
        </section>
        </Layout>

    )
}