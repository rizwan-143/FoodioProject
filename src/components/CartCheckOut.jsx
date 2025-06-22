import React from 'react'

export default function CartCheckOut({subtotal}) {


  function preventDefault(event){
    event.preventDefault();
  }

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-12 py-5" style={{ height: "auto" }} id='chechOutBanner'>
            <h3 className='fw-bold display-6'>cart check out</h3>
            <p>A magical combination that sent aromas to the taste buds</p>
            <nav aria-label="breadcrumb " className='border border-dark  p-2 rounded-3 bg-danger text-white fw-bold  d-inline-block '>
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><i class="fa-solid fa-house"></i> Home</li>
                <li className="breadcrumb-item">Library</li>
                <li className="breadcrumb-item" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="contianer my-5 py-5 overflow-hidden">
        <div className="row px-3">
          <div className="col-sm-12 col-md-8 mt-3">
            <form action="" className='form-control d-flex flex-column gap-4'>
              <div className="col"><h4 className='fw-bold'>billing address</h4></div>
              <div className="col">
                <input type="text" placeholder='complete name' className='form-control p-2' />
              </div>
              <div className="col">
                <input type="email" placeholder='email address' className='form-control p-2' />
              </div>
              <div className="col">
                <select class="form-select p-2" aria-label="Default select example">
                  <option selected>select country</option>
                  <option value="1">pakistan</option>
                  <option value="2">india</option>
                  <option value="3">dubai</option>
                </select>
              </div>
              <div className="col d-flex gap-4">
                <select class="form-select w-50 p-2" aria-label="Default select example">
                  <option selected>city</option>
                  <option value="1">pakistan</option>
                  <option value="2">india</option>
                  <option value="3">dubai</option>
                </select>
                <select class="form-select w-50 p-2" aria-label="Default select example">
                  <option selected>state / province</option>
                  <option value="1">pakistan</option>
                  <option value="2">india</option>
                  <option value="3">dubai</option>
                </select>
              </div>
              <div className="col d-flex gap-4">
                <input type="number" placeholder='postal code' className='form-control p-2' />
                <input type="number" placeholder='phone number' className='form-control p-2' />
              </div>
              <div className="col">
                <input type="text" placeholder='address' className='form-control p-2' />
              </div>
              <div className="col">
                <input type="radio" name='select' className='m-2' />
                <label htmlFor="">create an account for later use</label>
              </div>
              <div className="col">
                <input type="radio" name='select' className='m-2' />
                <label htmlFor="">ship to same address</label>
              </div>
              <div className="col">
                <textarea name="" id="" placeholder='order note' className='p-3 form-control' ></textarea>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-4 mt-3 bg-danger text-white p-3 rounded-4 d-flex flex-column align-items-center gap-3">
              <h4>cart total</h4>
              <div className="subtotal bg-white text-black p-3 border border-light d-flex flex-column align-items-center justify-content-center ">
                <ul className='list-unstyled'> 
                  <li>
                    <span>subtotal:</span>
                     <span className='ms-2'>{subtotal.toFixed(2)}$</span>
                  </li>
                  <li>
                    <span>shipping:</span>
                    <span> free$ </span>
                  </li>
                </ul>
                <button className='btn btn-danger border-0 w-100'>
                  <span>total :</span>
                  <span className='ms-2'>{subtotal.toFixed(2)}$</span>
                </button>
              </div>
              <div className="payments-methods">
                <h4>payments methods</h4>
                <form action="" className=' d-flex flex-column gap-3'>
                  <div className="col d-flex gap-2 align-items-center">
                    <input type="radio" name="paymentMethod" id="" />
                    <label htmlFor="" className=''>bank payment</label>
                  </div>
                  <div className="col d-flex gap-2 align-items-center">
                    <input type="radio" name="paymentMethod" id="" />
                    <label htmlFor="">paypal payment</label>
                  </div>
                  <div className="col d-flex gap-2 align-items-center">
                    <input type="radio" name="paymentMethod" id="" />
                    <label htmlFor="">easypaisa payment</label>
                  </div>
                  <div className="col d-flex gap-2 align-items-center">
                    <input type="radio" name="paymentMethod" id="" />
                    <label htmlFor="">jazz cash payment</label>
                  </div>
                  <div className="col-car-button position-relative d-flex justify-content-center align-items-center" style={{width:"150px"}}>
                    <div className="cart-button-border position-absolute border border-warning border-3 rounded-3" style={{height:"50px", width:"130px" , right:"-5px"}}> </div>
                    <button className='bg-warning border-0 p-2 z-1 rounded w-100' onClick={preventDefault}>place an order</button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>

    </>
  )
}
