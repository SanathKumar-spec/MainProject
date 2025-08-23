import React from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
function Homepage() {


  return (
    <div>
      <Header />
      <div className='m-5 flex flex-col justify-center px-5'>
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
