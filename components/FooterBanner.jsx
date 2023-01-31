import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ( footerBanner ) => {

  //console.log(footerBanner)

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner?.FooterBanner?.discount}</p>
          <h3>{footerBanner?.FooterBanner?.largeText1}</h3>
          <h3>{footerBanner?.FooterBanner?.largeText2}</h3>
          <p>{footerBanner?.FooterBanner?.saleTime}</p>
        </div>
        <div className="right">
          <p>{footerBanner?.FooterBanner?.smallText}</p>
          <h3>{footerBanner?.FooterBanner?.midText}</h3>
          <p>{footerBanner?.FooterBanner?.desc}</p>

          <Link href={`/product/${footerBanner?.FooterBanner?.product}`}>
            <button type="button">
              {footerBanner?.FooterBanner?.buttonText}
            </button>
          </Link>
        </div>

        <img
          src={urlFor(footerBanner?.FooterBanner?.image)}
          className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner