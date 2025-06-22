import React from 'react'

export default function Footer() {
  return (
    <>
    
    <div className="container-fluid footer-container d-flex flex-column justify-content-around gap-5 py-3" style={{height: "auto" ,  backgroundColor: "#F5F8FD"}} >
        <div className="row px-3">
            <div className="col-sm-12 col-md-3  bg-danger rounded-4 text-white fw-bold">
                <div className="footer-logo p-3">
                    <img src="/logo-white.png" alt="" className='mb-5' />
                    <div className="timming mb-4">
                        <ul className="days list-unstyled">
                            <li>tuesday - saturday</li>
                            <li>12:00pm to 23:00pm</li>
                            <li>closed on subday</li>
                        </ul>
                    </div>
                        <div className='tripa-logo'>
                            <ul className='list-unstyled'>
                                <li>
                                    <img src="/tripa.png" alt="" />
                                </li>
                                <li>5 star rated on TripAdvisor</li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-3 d-flex flex-column align-items-start px-4">
                    <h2 className='border-bottom  border-5 d-inline border-warning '>about</h2>
                    <ul className='list-styled-arrow mt-4 d-flex flex-column gap-3'>
                        <li>information</li>
                        <li>special dish</li>
                        <li>reservation</li>
                        <li>contact</li>
                    </ul>
            </div>
            <div className="col-sm-12 col-md-3 d-flex flex-column align-items-start">
                    <h2 className='border-bottom  border-5 d-inline border-warning '>menu</h2>
                    <ul className='list-styled-arrow mt-4 d-flex flex-column gap-3'>
                        <li>steaks</li>
                        <li>burger</li>
                        <li>coctails</li>
                        <li>bar b q</li>
                        <li>deserts</li>
                    </ul>
            </div>
            <div className="col-sm-12 col-md-3 d-flex flex-column gap-3">
                <h2  className='border-bottom  border-5 d-inline border-warning'>newsletter</h2>
                <p>get recent news and updates</p>
                <form action="" className='d-flex flex-column gap-3'>
                    <input type="email" className='form-control' placeholder='enter your email address ...' />
                </form>
                <div className="subscribe  position-relative d-flex justify-content-center align-items-center">
                    <div className="subscribe-border border border-danger border-4 position-absolute rounded "></div>
                    <button className='btn btn-danger text-white z-1'>subscribe</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 border border-warning border-4"></div>
            <div className="col-12 py-5 d-flex flex-column flex-md-row justify-content-between gap-3">
                {/* <div className="footer-footer py-3"> */}
                    <div className='fw-bold'> <span className='border border-danger border-2 p-1 rounded-circle'>c</span> <span className='text-danger'>2023 foodio</span> <span>|</span> <span>restaurent & bar b q</span> </div>
                <ul className='d-flex gap-2 list-unstyled text-decoration-underline fw-bold'>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>instagram</li>
                    <li>youtube</li>
                </ul>
                {/* </div> */}
            </div>
        </div>
    </div>
    
    </>
  )
}
