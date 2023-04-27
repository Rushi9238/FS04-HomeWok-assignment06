import React from 'react'
import { bg1 } from '../Resources/imges'

const Home = () => {
  return (
    <main>
      <div className="left">
        <h1>Header <br /> Footer</h1>
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam consequatur veritatis sapiente.</h4>
        <div className="circles">
         <div className="circle1"></div>
         <div className="circle2"></div>
         <div className="circle3"></div>
        </div>
      </div>
      <div style={{background:`url(${bg1})`}} className="right">
      </div>
    </main>
  )
}

export default Home