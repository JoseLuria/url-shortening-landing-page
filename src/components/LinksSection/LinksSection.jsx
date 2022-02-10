import React from 'react'
import "./LinksSection.style.scss"

const LinksSection = ({children}) => {
  return (
    <section className="links-section">
      {children}
    </section> 
  )
}

export default LinksSection