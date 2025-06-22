import React from 'react'

export default function FormSecion() {

    function handleSubmit(event){
        event.preventDefault();
        event.target.reset();
        alert("table reserved")
    }
  return (
    <>
    
    <div className="container pb-5">
        <div className="row px-3">
            <div className="col-sm-12 col-md-6 position-relative mt-5">
                <img src="/bbq-1.jpg" alt="" className='w-100 rounded-4' />
                <strong className=' text-white fw-bold position-absolute' style={{left:"20px" , top:"20px"}}>steak & bar b q</strong>
                <p className=' text-white position-absolute' style={{left:"20px" , top:"40px"}} >canonical classics to obscure <br /> tiki drinks</p>
                <div className="circle d-flex flex-column align-items-center justify-content-center position-absolute rounded-circle bg-warning" style={{height:"100px" , width:"100px" , left:"30px" , bottom:"-15%"}}>
                    <strong className="price">$120</strong>
                    <b>per person</b>
                    </div>
            </div>
            <div className="col-sm-12 col-md-6 position-relative mt-5">
                <img src="/bbq.jpg" alt="" className='w-100 rounded-4' />
                <strong className=' text-white fw-bold position-absolute' style={{left:"20px" , top:"20px"}}>steak & bar b q</strong>
                <p className=' text-white position-absolute' style={{left:"20px" , top:"40px"}} >canonical classics to obscure <br /> tiki drinks</p>
                <div className="circle d-flex flex-column align-items-center justify-content-center position-absolute rounded-circle bg-warning" style={{height:"100px" , width:"100px" , left:"30px" , bottom:"-15%"}}>
                    <strong className="price">$120</strong>
                    <b>per person</b>
                    </div>
            </div>
        </div>
    </div>

    <div className="container my-5 bg-danger py-4 rounded-4 text-white">
        <div className="row">
            <div className="col-sm-12 col-md-4">
                <h2 className='display-6 fw-bold border-bottom border-warning border-4 d-line'>reserve a table</h2>
                <p className='mt-4'>Discover our New Menu !</p>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-end">
                <form action="" className=' row form-control p-0 bg-transparent gap-4 border-0' onSubmit={handleSubmit} >
                    <div className="col d-flex gap-4 mt-3">
                        <input type="text" className='form-control' placeholder='complete name' required />
                        <input type="text" className='form-control' placeholder='email address' required />
                    </div>
                    <div className="col d-flex gap-4 mt-3">
                        <input type="number" className='form-control w-50' placeholder='number of guest' />
                        <input type="date" className='form-control w-25'  required/>
                        <input type="time" className='form-control w-25' required />
                    </div>
                    <div className="form-submit position-relative d-flex align-items-center justify-content-center mt-3" style={{width:"160px"}}>
                        <div className="submit-border border border-warning border-4 position-absolute rounded-3 "  style={{height:"50px" , width:"130px" , right:"-1px"}}></div>
                        <button className='text-dark bg-warning border-0 p-2 rounded-3 fw-bold z-1 w-100' type='submit' >reserve a table</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    </>
  )
}
