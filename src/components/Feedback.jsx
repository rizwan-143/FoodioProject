import React from 'react'
import { useState , useEffect } from 'react';



const CustomerReviews = [
    {
        id: "0", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maiores eius delectus atque aut excepturi ipsa dolorum nisi fuga sint modi impedit officiis, debitis, repellendus tenetur accusamus assumenda dolore! Dolorem."
        , customerName: "Lorem, ipsum.1", reviewStars: "fa-regular fa-star", reviewImg: "/quote.png"
    },
    {
        id: "1", review: "Lorem ipsumes eius delectus atque aut excepturi ipsa dolorum nisi fuga sint modi impedit officiis, debitis, repellendus tenetur accusamus assumenda dolore! Dolorem."
        , customerName: "Lorem, ipsum.2", reviewStars: "fa-regular fa-star", reviewImg: "/quote.png"
    },
    {
        id: "2", review: "s eius delectus atque aut excepturi ipsa dolorum nisi fuga sint modi impedit officiis, debitis, repellendus tenetur accusamus assumenda dolore! Dolorem."
        , customerName: "Lorem, ipsum.3", reviewStars: "fa-regular fa-star", reviewImg: "/quote.png"
    },
    {
        id: "3", review: "Lorem ipsum dolor bfjdsgf sdhjf asdhjf sdjh fhasd fd as sit amet consectetur adipisicing elit. Voluptates, maiores eius delectus atque aut excepturi ipsa dolorum nisi fuga sint modi impedit officiis, debitis, repellendus tenetur accusamus assumenda dolore! Dolorem."
        , customerName: "Lorem, 4", reviewStars: "fa-regular fa-star", reviewImg: "/quote.png"
    },

];


export default function Feedback() {

    const [currentReview, setCurrentReview] = useState(1);

    let reviewPerPage = 1;

    const indexOflast = currentReview * reviewPerPage;
    const indexOfStart = indexOflast - reviewPerPage;
    const totalPages = Math.ceil(CustomerReviews.length / reviewPerPage);

    let viewReview = CustomerReviews.slice(indexOfStart, indexOflast);

    useEffect(()=>{
        const interval = setInterval(() => {
             setCurrentReview(prev =>
            prev === totalPages ? 1 : prev + 1
        );
        }, 3000);
        return () => clearInterval(interval);
    } , [totalPages])

    return (
        <>

            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 mt-3">
                        <h3 className='text-danger fw-bold'>testimonial and reviews</h3>
                        <strong className='display-5 fw-bold'>our suctomer Feedback</strong>
                        <div className="row d-flex justify-content-center mt-4">
                            {viewReview.map((review) => {
                                return (
                                    <div key={review.id} className="col-10 py-4 border border-warning border-4 rounded-4" style={{ minHeight: "250px" }}>
                                        <div className="feedback"><p>{review.review}</p></div>
                                        <div className="review-footer d-flex align-items-center justify-content-evenly">
                                            <div className="reviewer fw-bold">{review.customerName}</div>
                                            <i className={review.reviewStars}></i>
                                            <div className="quote rounded-circle p-2 bg-warning d-flex align-items-center justify-content-center" style={{ height: "40px", width: "40px" }}><img src={review.reviewImg} alt="" className='w-100' /></div>
                                        </div>
                                    </div>
                                )
                            })}
                            <div className="col-12 d-flex justify-content-center gap-3 mt-4">
                                {CustomerReviews.map((btn , index) => {
                                    
                                    return (
                                        <button
                                            key={btn.id}
                                            onClick={() => setCurrentReview(index + 1)}
                                            className={`rounded-circle border ${currentReview === index + 1 ? "bg-dark" : "bg-transparent"}`}
                                            style={{ height: "12px", width: "12px" }}
                                        ></button>)
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 mt-3 d-flex flex-column align-items-center">
                        <div className="row d-flex justify-content-center">
                            <div className="col-4">
                                <img src="/bratlee-hamint-1.jpg" alt="" className='w-100 position-relative rounded-3' style={{top:"50px" , right :"50px"}} />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-start">
                            <div className="col-5">
                                <img src="/bratlee-hamint-2.jpg" alt="" className='w-100 rounded-3' />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-6">
                                <img src="/bratlee-hamint-3.jpg" alt="" className='w-100 position-relative rounded-3' style={{bottom:"50px" , right :"50px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
