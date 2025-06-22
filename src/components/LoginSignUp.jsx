import React from 'react'

export default function LoginSignUp() {

    function handleLoginForm(event){
        event.preventDefault();
        event.target.reset();
        alert("you have been login !")
    }

     function handleRegisterationForm(event){
        event.preventDefault();
        event.target.reset();
        alert("registerd !")
    }
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12 py-5" style={{ height: "auto" }} id='shop-cart-banner'>
                        <h3 className='fw-bold display-6'>login / sign up</h3>
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


            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 rounded-4 p-3" >
                        <form action="" className='form-control d-flex flex-column gap-3 p-4 border-0 rounded-4 ' style={{backgroundColor:"#F5F8FD"}} onSubmit={handleLoginForm}>
                        <h2>login your account</h2>
                            <div className="col d-flex flex-column gap-3">
                                <input type="text" placeholder='username or email address' className='form-control'  required/>
                                <input type="password" placeholder='pssword'  className='form-control' required/>
                            </div>
                            <div className="col d-flex gap-2 align-items-center justify-content-between">
                                <div className='d-flex gap-2 align-items-center'>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" >remember me</label>
                                </div>
                                <div className="forget-pass">forget password</div>
                            </div>
                            <div className="col">
                                <div className="login d-flex align-items-center justify-content-center position-relative " style={{width:"150px"}}>
                                    <div className="login-border position-absolute border border-danger border-3 rounded-3" style={{width:"130px" , height:"50px" , right:"-5px"}}></div>
                                    <button className='border-0 rounded-3 text-white p-2 bg-danger w-100 z-1' type='submit'>login</button>
                                </div>
                            </div>
                        </form>
                    </div>


                     
                     <div className="col-sm-12 col-md-6 rounded-4 p-3" >
                        <form action="" className='form-control d-flex flex-column gap-3 p-4 border-0 rounded-4 bg-danger ' style={{backgroundColor:"#F5F8FD"}} onSubmit={handleRegisterationForm} >
                        <h2>register your account</h2>
                            <div className="col d-flex flex-column gap-3">
                                <input type="text" placeholder='complete name' className='form-control' required />
                                <input type="email" placeholder='complete email address'  className='form-control' required/>
                                <input type="pass word" placeholder='password'  className='form-control' required/>
                            </div>

                            <div className="col">
                                <p className='text-white'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                            </div>
                            
                            <div className="col">
                                <div className="register d-flex align-items-center justify-content-center position-relative " style={{width:"150px"}}>
                                    <div className="register-border position-absolute border border-warning border-3 rounded-3" style={{width:"130px" , height:"50px" , right:"-5px"}}></div>
                                    <button className='border-0 rounded-3  p-2 bg-warning w-100 z-1' type='submit'>register</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
