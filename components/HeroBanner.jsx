import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ( heroBanner ) => {

  //console.log(heroBanner)

  return (

    <div className="hero-banner-container">
      <div>

        <img 
          src={urlFor(heroBanner?.HeroBanner?.image)}
          alt="headphones"
          className="hero-banner-image"
                       
        />

        <p className="beats-solo">
          {heroBanner?.HeroBanner?.smallText}
        </p>
        <h3>
          {heroBanner?.HeroBanner?.midText}
        </h3>
        <h1>
          {heroBanner?.HeroBanner?.largeText1}
        </h1>
        

        <div>
          <Link href={`/product/${heroBanner?.HeroBanner?.product}`}>
            <button type="button">
              {heroBanner?.HeroBanner?.buttonText}
            </button>
          </Link>

          <div className="desc">
            <h5>Best Brand Sneakers on the Market is here! Hurry Up to Buy it with huge Discount!</h5>
            <p>{heroBanner?.HeroBanner?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default HeroBanner