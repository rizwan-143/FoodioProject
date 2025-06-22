import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
    return (
        <>

        <div className="container-fluid overflow-hidden " style={{height:"100vh"}}>
            <div className="row h-100">
                <div className="col-12  h-100 p-0 d-flex flex-column justify-content-center text-white" id='hero-section' >
                  <div className="row p-3">
                    <div className="col-sm-12 col-md-6">
                    <h3 className='display-6 fw-bold'>the perect space to <br /> enjoy fantastic food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, recusandae.</p>
                    <div className="hero-button  d-flex justify-content-center align-items-center position-relative" >
                        <div className="red-border-color border border-danger border-4 rounded-3 position-absolute  " ></div>
                        <button className='bg-danger border-0 p-2 rounded-3 text-white z-1 fw-bold w-100'><Link to="/DiscoverMenu" className='text-dark text-decoration-none fw-bold'>our menu</Link></button>
                    </div>
                    </div>
                    {/* <div className="col-sm-12 col-md-6 ">
                        <div className="content d-flex w-50 w-sm-100 align-items-center p-3 rounded-4 gap-3 bg-dark border border-warning border-4 " style={{opacity:".8"}}>
                            <div className="content-titles">
                                <strong>5.00$</strong>
                                <h4>sicilian pizza</h4>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <img src="/pizze-img.png" alt="" />
                        </div>
                    </div> */}
                  </div>
                </div>
            </div>
        </div>


        </>
    )
}
