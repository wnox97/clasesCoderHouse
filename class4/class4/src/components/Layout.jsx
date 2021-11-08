import React from 'react';
import Navbar from '../components/Navbar';
import ShoppingCart from './ShoppingCart';
import PropTypes from 'prop-types';

export default function Layout({children}){
    const [cartOpen, setCartOpen] = React.useState(false);

    return (
    <main className="w-full min-h-screen flex flex-wrap flex-col mx-auto">
        <header className="w-full flex flex-row">
          <Navbar setCartOpen={setCartOpen} />
        </header>
        <section className="w-full h-full flex flex-col flex-wrap min-h-full">
            {children}
        </section>
        <ShoppingCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </main> 
    )
}

Layout.propTypes = {
    children: PropTypes?.arrayOf(PropTypes?.element),
}