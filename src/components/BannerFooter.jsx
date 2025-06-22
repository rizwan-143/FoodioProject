import React from 'react'
import { Link } from 'react-router-dom'

export default function BannerFooter() {
  return (
    <>
    
    <div className="container py-5">
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <h4 className='text-danger'>About The Food Restaurant</h4>
                <strong className='display-5 fw-bold'>New Ground with Dishes to be Enjoyed</strong>
            </div>
            <div className="col-sm-12 col-md-6">
                <p className='text-secondary'>Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena tibus et urient monte nascete ridiculus mus nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan ligula.</p>
                <div className="media d-flex align-items-center gap-3">
                    <img src="girl.jpg" className='rounded-circle' alt="" />
                    <div className="media-content">
                        <div className="name fw-bold">Willimes James</div>
                        <p>Director and Chief Operations Officer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row d-flex justify-content-around">
            <div className="col-sm-12 col-md-3 mt-3  position-relative d-flex align-items-center justify-content-center p-0 " id='hello' style={{height:"400px"}}>
                <div className="outer-line border border-warning border-4  position-absolute rounded-4" style={{height:"90%" , width:"90%"}} >
                    <button className='bg-warning position-absolute bottom-0 rounded-pill w-100 border-0 p-2 fw-bold'>restaurent</button>
                </div>
                <img src="/restaurant.jpg" className='w-100 h-100 rounded-4' alt=""  />
                <div className="red-overlay z-n1 w-100 h-100 position-absolute bg-danger rounded-4 d-flex flex-column align-items-center justify-content-center text-white px-4">
                    <h4>restaurent</h4>
                    <p className='text-center'>Nisl quam nestibulum ac quam nec aucan ligula. Orci varius natoque li um ac quam nec odio rbine.</p>
                    <button className='bg-lighr border-0 rounded-4 fe-bold p-2'><Link to="/ReserveAtable" className=' text-dark text-decoration-none fw-bold'>reserve a table</Link></button>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 mt-5 position-relative d-flex align-items-center justify-content-center p-0 " id='hello' style={{height:"400px"}}>
                <div className="outer-line border border-warning border-4  position-absolute rounded-4" style={{height:"90%" , width:"90%"}} >
                    <button className='bg-warning position-absolute bottom-0 rounded-pill w-100 border-0 p-2 fw-bold'>coctail bar</button>
                </div>
                <img src="/restaurant-2.jpg" className='w-100 h-100 rounded-4' alt=""  />
                <div className="red-overlay z-n1 w-100 h-100 position-absolute bg-danger rounded-4 d-flex flex-column align-items-center justify-content-center text-white px-4">
                    <h4>restaurent</h4>
                    <p className='text-center'>Nisl quam nestibulum ac quam nec aucan ligula. Orci varius natoque li um ac quam nec odio rbine.</p>
                    <button className='bg-lighr border-0 rounded-4 fe-bold p-2'><Link to="/ReserveAtable" className=' text-dark text-decoration-none fw-bold'>reserve a table</Link></button>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 mt-3 position-relative d-flex align-items-center justify-content-center p-0 " id='hello' style={{height:"400px"}}>
                <div className="outer-line border border-warning border-4  position-absolute rounded-4" style={{height:"90%" , width:"90%"}} >
                    <button className='bg-warning position-absolute bottom-0 rounded-pill w-100 border-0 p-2 fw-bold'>private dining</button>
                </div>
                <img src="/restaurant-3.jpg" className='w-100 h-100 rounded-4' alt=""  />
                <div className="red-overlay z-n1 w-100 h-100 position-absolute bg-danger rounded-4 d-flex flex-column align-items-center justify-content-center text-white px-4">
                    <h4>restaurent</h4>
                    <p className='text-center'>Nisl quam nestibulum ac quam nec aucan ligula. Orci varius natoque li um ac quam nec odio rbine.</p>
                    <button className='bg-lighr border-0 rounded-4 fe-bold p-2'><Link to="/ReserveAtable" className=' text-dark text-decoration-none fw-bold'>reserve a table</Link></button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
