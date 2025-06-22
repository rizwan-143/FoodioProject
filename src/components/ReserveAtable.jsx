import React from 'react'

export default function ReserveAtable() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-12 py-5" style={{ height: "auto" }} id='product-details-banner'>
            <h3 className='fw-bold display-6'>contact us</h3>
            <p>A magical combination that sent aromas to the taste buds</p>
            <nav aria-label="breadcrumb " className='border border-dark  p-2 rounded-3 bg-danger text-white fw-bold  d-inline-block '>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><i class="fa-solid fa-house"></i> Home</li>
                <li className="breadcrumb-item">Library</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mt-5 py-5">
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="booking d-flex flex-column align-items-center justify-content-center p-5 border border-warning border-4 rounded-4">
                            <div className="icon p-4 d-flex align-items-center justify-content-center bg-danger rounded-circle" style={{height:"30px" , width:"30px"}}><i class="fa-solid fa-mobile-screen-button"></i></div>
                            <strong className='fw-bold text-danger'>for booking</strong>
                            <p>3434 3434 343</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="booking d-flex flex-column align-items-center justify-content-center p-5 border border-warning border-4 rounded-4">
                            <div className="icon p-4 d-flex align-items-center justify-content-center bg-danger rounded-circle" style={{height:"30px" , width:"30px"}}><i class="fa-solid fa-mobile-screen-button"></i></div>
                            <strong className='fw-bold text-danger'>for private dining</strong>
                            <p>abc@xyz.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-6">
                <h4 className='fw-bold display-6'>have a question ?</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, enim!</p>
                <form action="" className='form-control d-flex flex-column gap-4'>
                    <input type="text" className='form-control p-3 rounded-pill' placeholder='full name' />
                    <input type="email" className='form-control p-3 rounded-pill' placeholder='email address' />
                    <input type="number" className='form-control p-3 rounded-pill' placeholder='phone no' />
                    <div className="send-message position-relative d-flex align-items-center justify-content-center" style={{width:"150px"}}>
                        <div className="send-message-border position-absolute border border-danger rounded-4 border-3" style={{width:"140px" , height:"50px" , right:"-5px"}}></div>
                        <button className='bg-danger text-white rounded-4 w-100 border-0 p-2 z-1'>send message</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}
