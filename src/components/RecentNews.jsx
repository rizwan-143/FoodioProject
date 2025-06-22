import React from 'react'

export default function RecentNews() {
  return (
    <>
    
    <div className="container recent-news py-5 my-5" style={{height: "auto" }}>
        <div className="row d-flex" >
            <div className="col-12 d-flex justify-content-center"><h2 className='display-6 border-bottom border-warning border-4 d-inline fw-bold'>recent news</h2></div>
            <div className="col-sm-12 col-md-6 d-flex flex-column flex-md-row gap-3 mt-4">
                <img src="/recent-news-1.jpg" alt="" className='rounded-3' />
                <div className="row">
                    <div className="col-12 d-flex flex-column justify-content-center">
                        <span className='p-2 bg-warning rounded-2 align-self-start fw-bold'>29 december , 2023</span>
                        <p className='mt-4 fw-bold'>table restaurent located in on bank street</p>
                        <div className="media d-flex align-items-center gap-2">
                            <img src="/man.jpg" alt="" />
                            <div className="media-content">
                                <strong>by thomas waliam</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-flex flex-column flex-md-row gap-3 mt-4">
                <img src="/recent-news-1.jpg" alt="" className='rounded-3' />
                <div className="row">
                    <div className="col-12 d-flex flex-column justify-content-center">
                        <span className='p-2 bg-warning rounded-2 align-self-start fw-bold'>29 december , 2023</span>
                        <p className='mt-4 fw-bold'>table restaurent located in on bank street</p>
                        <div className="media d-flex align-items-center gap-2">
                            <img src="/man.jpg" alt="" />
                            <div className="media-content">
                                <strong>by thomas waliam</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
