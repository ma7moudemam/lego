import React from 'react'
import ProductCart from '../ProductCart/ProductCart'
import './Recommended.css'
function Recommended() {
  return (
    <>
        <div className="recommended">

            <h2 className="recommended-title">Recommended For You</h2>
            <div className="boxes">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>  
            </div>
        </div>
    </>
  )
}

export default Recommended