import React from 'react'
import { Link  } from 'react-router-dom'

export default function NavbarFooter({count}) {


    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg">
                            <div className="nav-brand"><Link to="/Home" className=' text-dark text-decoration-none fw-bold'><img src="/logo.png" alt="" /></Link></div>
                            <button className='navbar-toggler order-1' data-bs-toggle="offcanvas" data-bs-target="#offcanvas" ><i class="fa-solid fa-bars"></i></button>
                            <div className="offcanvas offcanvas-start" id='offcanvas'>
                                <div className="offcanvas-header">
                                    <button className='btn btn-close' data-bs-dismiss="offcanvas"></button>
                                </div>
                                <div className="navbar-body">
                                    <ul className="navbar-nav d-flex justify-content-center gap-3">
                                        <li className="nav-item">
                                         <Link to="/Home" className='text-secondary text-decoration-none fw-bold '>home</Link>
                                        </li>
                                        <li className="nav-item">
                                                <div class="dropdown hover-dropdown">
                                                    <strong class=" text-secondary dropdown-toggle no-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                                                        menus
                                                    </strong>
                                                    <ul class="dropdown-menu bg-warning rounded-4 px-3">
                                                        <li className='border-bottom border-dark my-2 text-dark'><Link to="/DiscoverMenu" className='text-dark text-decoration-none fw-bold text-secondary'>our menu</Link></li>
                                                        <li className='border-bottom border-dark my-2'><strong>menu 2</strong></li>
                                                        <li className='border-bottom border-dark my-2'><strong>menu 3</strong></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li className="nav-item">
                                                <div class="dropdown hover-dropdown">
                                                    <strong class="text-secondary dropdown-toggle no-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                                                        shop
                                                    </strong>
                                                    <ul class="dropdown-menu bg-warning rounded-4 px-3">
                                                        <li className='border-bottom border-dark my-2'><Link to="/FeaturesProducts" className='text-dark text-decoration-none fw-bold text-secondary'>our products</Link></li>
                                                        <li className='border-bottom border-dark my-2'><Link to="/ProductDetails" className='text-dark text-decoration-none fw-bold text-secondary'>product details</Link></li>
                                                        <li className='border-bottom border-dark my-2'><Link to="/ShopCart" className='text-dark text-decoration-none fw-bold text-secondary'>shop cart</Link></li>
                                                        <li className='border-bottom border-dark my-2'><Link to="/CartCheckOut" className='text-dark text-decoration-none fw-bold text-secondary'>Cart CheckOut</Link></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li className="nav-item">
                                                <div class="dropdown hover-dropdown">
                                                    <strong class="text-secondary dropdown-toggle no-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                                                        new
                                                    </strong>
                                                    <ul class="dropdown-menu bg-warning rounded-4 px-3">
                                                        <li className='border-bottom border-dark my-2 text-secondary'><strong>our blog</strong></li>
                                                        <li className='border-bottom border-dark my-2 text-secondary'><strong>blog details</strong></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li className="nav-item">
                                                <div class="dropdown hover-dropdown">
                                                    <strong class="text-secondary dropdown-toggle no-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                                                        pages
                                                    </strong>
                                                    <ul class="dropdown-menu bg-warning rounded-4 px-3">
                                                        <li className='border-bottom border-dark my-2'><Link to="/About" className='text-secondary text-decoration-none fw-bold'>About</Link></li>
                                                        <li className='border-bottom border-dark my-2'><Link to="/OurServices" className='text-secondary text-decoration-none fw-bold'>our services</Link></li>
                                                        <li className='border-bottom border-dark my-2'><Link to="/ChefDetails" className='text-secondary text-decoration-none fw-bold'>chef details</Link></li>
                                                        <li className='border-bottom border-dark my-2'><Link to="/LoginSignUp" className='text-secondary text-decoration-none fw-bold'>login</Link></li>
                                                    </ul>
                                                </div>
                                        </li>
                                        <li className="nav-item"><Link to="/ReserveAtable" className=' text-secondary text-decoration-none fw-bold'>contact us</Link></li>
                                        <li className='d-flex'>
                                            <div className="position-relative p-1 mx-5 d-sm-block d-none">
                                                <Link to="/ShopCart" className='text-dark text-decoration-none fw-bold'><i class="fa-solid fa-cart-shopping"></i></Link>
                                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning text-black">
                                                    {count}
                                                </span>
                                            </div>
                                            <div className="reserve-table position-relative d-flex align-items-center justify-content-center">
                                                <div className="reserve-border  border border-danger border-4 position-absolute rounded-3 z-n1"> </div>
                                                <button className='reserve-btn btn btn-danger rounded-3 position-relative w-100'><Link to="/ReserveAtable" className='text-white text-decoration-none fw-bold'>reserve a table</Link></button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="position-relative p-1 mx-5 d-sm-none d-block">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning text-black z-n1">
                                    1
                                </span>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
