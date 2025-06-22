// import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div>
            <div className="container-fluid d-none d-lg-block">
                <div className="row d-felx align-items-center" style={{ backgroundColor: "#FFD40D" }}>
                    <div className="col-3">
                        <ul className='list-unstyled d-flex align-items-center gap-2'>
                            <li className="phone-icon rounded-circle p-2 bg-danger d-flex justify-cntent-center align-items-center text-white" style={{ height: "30px", width: "30px" }}><i class="fa-solid fa-mobile-screen-button"></i></li>
                            <li>
                                <ul className='d-flex list-unstyled gap-1'>
                                    <li><strong>phone:</strong> </li>
                                    <li className="phone"><strong> +1 (850) 344 0 66</strong></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className='list-unstyled d-flex align-items-center gap-2'>
                            <li className="phone-icon rounded-circle p-2 bg-danger d-flex justify-cntent-center align-items-center text-white" style={{ height: "30px", width: "30px" }}><i class="fa-solid fa-envelope"></i></li>
                            <li>
                                <ul className='d-flex list-unstyled gap-1'>
                                    <li><strong>email:</strong> </li>
                                    <li className="email"><strong>abc@xyz.com</strong></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className='social-list list-unstyled d-flex align-items-center justify-content-around text-decoration-underline '  >
                            <li><strong>facebook</strong></li>
                            <li><strong>instagram</strong></li>
                            <li><strong>youtube</strong></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="d-flex justify-content-center gap-3">
                            <div className="user-icon"><i class="fa-regular fa-user"></i></div>
                            <div className="login-tags">
                                <Link to="/LoginSignUp" className=' text-dark text-decoration-none fw-bold'>
                                <strong>login</strong>
                                 <span className="mx-2">/</span>
                                <strong> register</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
