import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import Product from './Product';
import "./styles/home.css";

const Home = () => {
  return (
      <Fragment>
          
          <section className='home'>
            <h1>welcome to our store</h1>
            <p> scroll down to see amazing products</p>
            <a>
                <button>
                    Scroll to Products
                </button>
            </a>
        </section>
        <section className='products'>
            
            <h1>Products</h1>
            <div className='productDisplay'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </div>

        </section>
  
      </Fragment>
  )
        
}

export default Home