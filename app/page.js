import React from 'react'
import About from './(components)/About'
import Footer from './(components)/Footer'
import Header from "./(components)/Header"
import Services from './(components)/Services'
import Skills from './(components)/Skills'
import Testimonials from './(components)/Testimonials'
import Work from './(components)/Work'

const page = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Work/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default page