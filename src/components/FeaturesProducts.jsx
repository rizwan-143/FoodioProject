import React from 'react'
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';



const featuredProducts = [
    { id: "0", img: "/featured-dishes-1.png", title: "parsian humberger", price: "10.54$", review: "fa-regular fa-star", checkOutIcon: "fa-solid fa-cart-shopping" },
    { id: "1", img: "/featured-dishes-2.png", title: "banana leaves", price: "15.54$", review: "fa-regular fa-star", checkOutIcon: "fa-solid fa-cart-shopping" },
    { id: "2", img: "/featured-dishes-3.png", title: "brown sandwich", price: "5.54$", review: "fa-regular fa-star", checkOutIcon: "fa-solid fa-cart-shopping" },
    { id: "3", img: "/featured-dishes-3.png", title: "banana leaves", price: "23.54$", review: "fa-regular fa-star", checkOutIcon: "fa-solid fa-cart-shopping" },
    { id: "4", img: "/featured-dishes-2.png", title: "brown sandwich", price: "9.54$", review: "fa-regular fa-star", checkOutIcon: "fa-solid fa-cart-shopping" },
    { id: "5", img: "/featured-dishes-1.png", title: "parsian humberger", price: "18.54$", review: "fa-regular fa-star", checkOutIcon: "fa-solid fa-cart-shopping" },
];





export default function FeaturesProducts({onAddToCart , seeProductDetails}) {
    const [currentPage, setCurrentPage] = useState(1);


    const itemsPerPage = 3;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;

    const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

    const currentProducts = featuredProducts.slice(indexOfFirst, indexOfLast);
    // console.log("Current Page:", currentPage);

    function handlePre() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    function handleNext() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    };



    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentPage(prevPage => {
            if (prevPage < totalPages) {
                return prevPage + 1;
            } else {
                return 1; 
            }
        });
    }, 3000);

    return () => clearInterval(interval);
}, [totalPages]); 



    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h4 className='fw-bold border-bottom border-4 border-warning d-inline display-5'>featured dishes</h4>
                    </div>
                </div>

                <div className="row mt-5">
                    {currentProducts.map((pro) => {
                        return (
                            <div key={pro.id} className="col-sm-12 col-md-4 mt-3  d-flex flex-column align-items-center justify-content-center">
                                <div className="card border border-warning border-4 rounded-4">
                                    <div className="card-header position-relative p-0 bg-transparent">
                                        <img src={pro.img} alt="" className='w-100 position-relative z-1'  />
                                        <div className="red-color bg-danger rounded-pill position-absolute " style={{ height: "100px", width: "100%" , bottom:"50%" }}></div>
                                    </div>
                                    <div className="card-body">
                                        <i className={pro.review}></i>
                                        <div className="title fw-bold">{pro.title}</div>
                                        <div className="product-footer w-100 d-flex justify-content-between align-items-center">
                                            <div className="price fw-bold text-secondary">{pro.price}</div>
                                            <button className="btn btn-success " onClick={() => seeProductDetails(pro)}><Link to ="/ProductDetails" className='text-white text-decoration-none'>view details</Link></button>
                                            <div className='bg-warning p-2 rounded-3'  onClick={()=> onAddToCart(pro)}><i className={pro.checkOutIcon} style={{cursor:"pointer"}} ></i></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                    <div className="col-12 d-flex justify-content-center gap-3 mt-5">
                        <button className={`rounded-circle p-2  ${currentPage === 1 ? "border border-danger border-2" :"border border-secondary border-1"}`} onClick={handlePre} style={{ height: "20px", width: "20px" }}></button>
                        <button className={`rounded-circle p-2  ${currentPage === totalPages ? "border border-danger border-2" :"border border-secondary border-1"}`} onClick={handleNext} style={{ height: "20px", width: "20px" }}></button>
                    </div>
                </div>
            </div>

        </>
    )
}
