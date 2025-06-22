import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ShopCart({ cartItem , handleQuantity , subtotal ,getNumericPrice , quntity ,clearCart , removeItem }) {


    useEffect(() => {
      const saveItems =  JSON.parse(localStorage.getItem("saveItems"))
    } );

   

    // setting initial quantity using for loop 

    // let quantity = {};

    // for(let i  = 0 ; i < cartItem.length ; i++){
    //     quantity[i] = 1;
    // };


//     const [quntity , setQuantity] = useState(
//         cartItem.map((acc , item , index)=>{
//                 acc[index] = 1;
//                 return acc;
//         } , {})
//     )


//     // abhi quntity agar change ho 

//     const handleQuantity = (index , newQuantity) =>{
//             setQuantity(prev => ({
//                 ...prev , [index] : parseInt(newQuantity) || 1
//             }));
//     };

//     const getNumericPrice = (price) =>
//   typeof price === 'string' ? parseFloat(price.replace('$', '')) : price;


//     const subtotal = cartItem.reduce((acc, item, index) => {
//   const quantity = quntity[index] || 1;
//   const price = getNumericPrice(item.price);
//   return acc + price * quantity;
// }, 0);



    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12 py-5" style={{ height: "auto" }} id='shop-cart-banner'>
                        <h3 className='fw-bold display-6'>shop cart</h3>
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

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-end">
                        <button className='bg-danger border-0 p-2 text-white fw-bold text-capitalize rounded-4 my-3' onClick={clearCart}>clear cart</button>
                    </div>
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <td>product</td>
                                        <td>quantity</td>
                                        <td>price</td>
                                        <td>total price</td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItem && cartItem.length > 0 ? (
                                        cartItem.map((item, index) => (
                                            <tr key={index} className='mt-3'>
                                                <td className='d-flex gap-2 align-items-center'>
                                                    <img src={item.image || "/product-img-1.png"} alt="" width="60" />
                                                    <div className="product-content">
                                                        <h3 className="title text-danger">{item.title}</h3>
                                                        <p>{item.description || 'No description available'}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className='border border-warning rounded-3'
                                                        placeholder='1'
                                                         value={quntity[index]}
                                                       onChange={(e) => handleQuantity(index, e.target.value)}
                                                    />
                                                </td>
                                                <td>
                                                    <strong>${item.price}</strong>
                                                </td>
                                                <td>
                                                    <strong> ${(getNumericPrice(item.price) * quntity[index]).toFixed(2)}</strong>
                                                </td>
                                                <td>
                                                    <span className='rounded-circle bg-light p-2 d-flex justify-content-center align-items-center' onClick={() => removeItem(item.id)} style={{height:"30px" , width:"30px"}}><i class="fa-solid fa-trash text-danger"></i></span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className='text-center text-danger fw-bold'>No items in cart.</td>
                                        </tr>
                                    )}
                                </tbody>

                                {/* <tbody >
                       { <tr className='mt-3'>
                            <td className='d-flex gap-2 align-items-center'>
                                <img src="/product-img-1.png" alt="" />
                                <div className="product-content">
                                    <h3 className="title text-danger">Blue Cheese & Ham</h3>
                                    <p>Sausage, three rashers of streaky bacon</p>
                                </div>
                            </td>
                            <td>
                                <input type="number" className='border border-warning rounded-3' placeholder='1' />
                            </td>
                            <td>
                                <strong>
                                    $ 390.00
                                </strong>
                            </td>
                        </tr>}
                    </tbody> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-4 bg-warning p-4 rounded-4 text-white">
                        <h4 className='fw-bold'>apply coupan</h4>
                        <form action="" className='form-control bg-transparent border-0'>
                            <div className="col d-flex flex-column gap-3">
                                <input type="text" className='form-control p-3' name="" id="" placeholder='coupan code' />
                                <button className='border-0 bg-dark p-3 rounded-4 text-white fw-bold text-capitalize'>apply coupan</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-8 p-3">
                        <div className="cart-total border border-secondary border-4 rounded-4 p-4">
                            <h3>cart total</h3>
                            <div>
                                <ul>
                                    <li className='d-flex justify-content-between mt-2'>
                                        <span>subtotal : </span>
                                        <span>{subtotal.toFixed(2)}$</span>
                                    </li>
                                    <li className='d-flex justify-content-between mt-2'>
                                        <span>shipping : </span>
                                        <span>free</span>
                                    </li>
                                    <li className='d-flex justify-content-between rounded-pill p-3 bg-secondary mt-5'>
                                        <span>total : </span>
                                        <span>{subtotal.toFixed(2)}$</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='shop-cart-button d-flex align-items-center justify-content-center position-relative mt-3' style={{ width: "200px" }}>
                                <div className="cart-shop-border position-absolute border border-danger border-2 rounded" style={{ height: "50px", width: "150px", right: "-5px" }}></div>
                                <button className='bg-danger  border-0 rounded-4 px-3 py-2 fw-bold z-1'><Link to ="/CartCheckOut" className='text-white text-decoration-none'>proceed to check out</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
