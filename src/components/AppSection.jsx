import React from 'react'

export default function AppSection() {
  return (
   <>
   
   <div className="container py-5" style={{ backgroundColor : "#F5F8FD"}}>
    <div className="row px-4">
        <div className="col-sm-12 col-md-6">
            <h4 className='text-uppercase text-danger fw-bold mb-4'>best app for food ordering</h4>
            <strong className='display-5 fw-bold'>
                manage your <br /> restaurent anytime ! <br /> anywhere !
            </strong>
            <ul className='my-4'>
                <li>Higher Reach - Minimal Effort</li>
                <li>Showcase your Brand</li>
                <li>Exclusive offers & discounts</li>
            </ul>
            <div className="row d-flex justify-content-around">
                <div className="col-sm-12 col-md-5  d-flex align-items-center justify-content-center gap-3 text-white rounded-3 bg-danger mt-2">
                    <i class="fa-brands fa-google-play"></i>
                    <ul className='list-unstyled'>
                        <li>download from</li>
                        <li>play store</li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-5  d-flex align-items-center justify-content-center gap-3 text-white rounded-3 bg-dark mt-2">
                   <i class="fa-brands fa-apple"></i>
                    <ul className='list-unstyled'>
                        <li>download from</li>
                        <li>app store</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="col-sm-12 col-md-6 d-flex align-items-center overflow-hidden position-relative">
            <div className="red position-absolute rounded-pill bg-danger end-0" style={{height:"200px" , width : "100%"}}></div>
            <img src="/manage-your.png" alt="" className='w-100 z-1' />
        </div>
    </div>
   </div>
   
   </>
  )
}
