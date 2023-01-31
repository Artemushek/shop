import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const HeroBanner = ( heroBanner ) => {

  //console.log(heroBanner)

  return (

    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">
          {heroBanner?.HeroBanner?.smallText}
        </p>
        <h3>
          {heroBanner?.HeroBanner?.midText}
        </h3>
        <h1>
          {heroBanner?.HeroBanner?.largeText1}
        </h1>
        <img src={urlFor(heroBanner?.HeroBanner?.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner?.HeroBanner?.product}`}>
            <button type="button">
              {heroBanner?.HeroBanner?.buttonText}
            </button>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner?.HeroBanner?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default HeroBanner