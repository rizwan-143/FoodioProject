import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductDetails({productDetails , addToCart}) {
  if (!productDetails || productDetails.length === 0) {
    return <p className="text-center mt-5 text-danger display-6 fw-bold">No item selected</p>;
  }
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-12 py-5" style={{ height: "auto" }} id='product-details-banner'>
            <h3 className='fw-bold display-6'>product detaila</h3>
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
{

  productDetails.map(product => (
    <div className="container mt-5" key={product.id}>
      <div className="row px-3">
        <div className="col-sm-12 col-md-6 border border-warning border-4 rounded-4 position-relative d-flex align-items-center justify-content-center">
          <img src={product.img} className='w-100 z-1' alt={product.title} />
          <div className="red-over-lay w-100 bg-danger rounded-pill position-absolute" style={{ height: "200px" }}></div>
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center gap-3 ps-3 pt-5">
          <h4 className='fw-bold display-6'>{product.title}</h4>
          <div className="price">
            <span className='fw-bold display-6'><span className='text-danger'>$</span>{product.price}</span> <del>{product.oldPrice}</del>
          </div>
          <div className="content">
            <h4>What’s Included</h4>
            <p>{product.description}</p>
          </div>
          <div className="quantity d-flex flex-column flex-md-row gap-4">
            <input type="number" className='border border-warning border-3 rounded-pill p-3' placeholder='1' />
            <div className='products-details-button d-flex justify-content-center align-items-center position-relative' style={{ width: "150px" }}>
              <div className="red-over-lay-Pdetails border border-danger border-3 rounded-3 position-absolute" style={{ width: "130px", height: "53px", right: "-5px" }}></div>
              <button className='bg-danger text-white rounded-3 p-2 border-0 z-1 w-100'><Link to ="/ShopCart" className='text-white text-decoration-none' onClick={() => addToCart(product)}>add to cart</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
}



       <div className="container mt-5 ">
        {/* <div className="row px-3">
          <div className="col-sm-12 col-md-6 border border-warning border-4 rounded-4 position-relative d-flex align-items-center justify-content-center" >
            <img src="/featured-dishes-2.png" className='w-100 z-1' alt="" />
            <div className="red-over-lay w-100 bg-danger rounded-pill position-absolute" style={{ height: "200px" }} ></div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center gap-3 ps-3 pt-5">
            <h4 className='fw-bold display-6'>Fried Potatoes With Garlic Chilli Sauce</h4>
            <div className="price"> <span className='fw-bold display-6'><span className='text-danger'>$</span> 10.44</span> <del>20$</del> </div>
            <div className="content">
              <h4>What’s Included</h4>
              <p>Sausage, three rashers of streaky bacon, two fried eggs</p>
            </div>
            <div className="quantity d-flex flex-column  flex-md-row gap-4">
              <div className="quantity-number">
                <input type="number" className='border border-warning border-3 rounded-pill p-3' placeholder='1' />
              </div>
              <div className=' products-details-button d-flex justify-content-center align-items-center position-relative' style={{ width: "150px" }}>
                <div className="red-over-lay-Pdetails border border-danger border-3 rounded-3 position-absolute" style={{ width: "100px", height: "53px", right: "-5px" }}></div>
                <button className='bg-danger text-white rounded-3 p-2 border-0 z-1'>add to cart</button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row mt-5">
          <div className="col-12">
            <h3 className='fw-bold display-6'>description</h3>
            <p>
              Nisl quam nestibulum ac quam nec odio elementu sceisu aucan ligula. Orci varius natoque pena tibus et magnis dis urient monte ulus mus nellent esque habitanum ac quam nec odio rbine. Nisl quam nestibulum ac quam nec odio elementu sceisu aucan ligula. toque pena tibus et magnis dis u rient monte nascete ridic ulus mus nellentesque habitanum ac quam nec odio rbine. Nisl quamu quam nec odio elementu sceisu aucan ligula. Orc i varius natoque pena tibus et magnis dis urient monte nascete ridic ulus mus a habitanum ac quam nec odio rbine. Nisl quam nestibulum ac qua m nec odio elementu sceisu aucan ligula. Orci varius natoque pe magnis dis urient monte nascete ridiculus mus nellentesque habitanum ac quam nec odio rbine. Nisl quam nestibulum ac quam ntoque pena tibus et magnis dis urient monte nascete ridic ulus mus nellentesque habitanum ac quam nec odio rbine. Nisl quam a quam nec odio elementu sceisu aucan ligula. Orci varius natoque pena tibus et magnis dis urient monte nascet e ridic ulus mus n habitanum ac quam nec odio rbine.
            </p>
            <p>
              Nisl quam nestibulum ac quam nec odio elementu sceisu aucan ligula. Orci varius natoque pena tibus et magnis dis urient monte quam nec odio e lementu sceisu aucan ligula. Orci varius natoque pena tibus et magnis dis urient monte nascete ridic.
            </p>
          </div>
        </div>

        <div className="row d-flex align-items-center mt-5">
          <div className="col-sm-12 col-md-6">
            <h4 className='display-6 fw-bold'>benefits</h4>
            <ul className='text-secondary d-flex flex-column gap-3'>
              <li>Quality foods natural gradient</li>
              <li>A melting pot of cheese served with our Little Soul</li>
              <li>Award-winning Restaurant</li>
              <li>caramelised balsamic onions</li>
              <li>Healthy Food 100% Organic Food</li>
              <li>roasted on a skewer, hanging above a spicy chilli seafood</li>
              <li>individually styled bedrooms</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src="/benefit.png" alt="" className='w-100' />
          </div>
        </div>


        <div className="row mt-5 px-3">
          <div className="col-12">
            <h3 className='fw-bold display-6'>review</h3>
          </div>
          <div className="col-12 border border-warning border-4 rounded mt-3 p-3">
            <div className="media d-flex flex-column flex-md-row gap-4 align-items-center position-relative">
              <div className="media-overlay positon-absolute rounded-3 bg-danger z-1 h-100 d-flex align-items-center justify-content-center" style={{width:"100px"  , height:"100px"}}  >
                <img src="/review.jpg" alt="" className='w-75 position-relative'  />
              </div>
              <div className="media-content">
                <div className='d-flex gap-3 fw-bold'>
                  <div className="name text-dark">Smith Johnson</div>
                  <div className="review-date text-danger">Jun 07, 2023</div>
                </div>
                <p>Integer sollicitudin ligula non enim sodales non lacinia commodo tempor mod licitudin. Integer sollicitudin ligula non enim sodales non lacinia commodo tempor mod licitudin.</p>
              </div>
              <div className='position-absolute end-0 top-0'>five stars review</div>
            </div>
          </div>
          <div className="col-12 border border-warning border-4 rounded mt-3 p-3">
            <div className="media d-flex flex-column flex-md-row gap-4 align-items-center position-relative">
              <div className="media-overlay positon-absolute rounded-3 bg-danger z-1 h-100 d-flex align-items-center justify-content-center" style={{width:"100px"  , height:"100px"}}  >
                <img src="/review.jpg" alt="" className='w-75 position-relative'  />
              </div>
              <div className="media-content">
                <div className='d-flex gap-3 fw-bold'>
                  <div className="name text-dark">Smith Johnson</div>
                  <div className="review-date text-danger">Jun 07, 2023</div>
                </div>
                <p>Integer sollicitudin ligula non enim sodales non lacinia commodo tempor mod licitudin. Integer sollicitudin ligula non enim sodales non lacinia commodo tempor mod licitudin.</p>
              </div>
              <div className='position-absolute end-0 top-0'>five stars review</div>
            </div>
          </div>
        </div>

        <div className="row mt-5 py-5">
          <div className="col-12 d-flex justify-content-between">
            <h3 className='fw-bold'>add a review</h3>
            <div>your rating</div>
          </div>
          <div className="col-12">
            <form action="" className='form-control p-3 d-flex flex-column gap-3'>
              <div className="col d-flex gap-3">
                <input type="text" className='form-control' placeholder='complete name' />
                <input type="email" className='form-control' placeholder='email' />
              </div>
              <div className="col">
                <textarea name="" className='form-control' id=""></textarea>
              </div>
              <div className="col">
                <div className="post-review position-relative d-flex align-items-center justify-content-center " style={{width:"150px"  , height:"50px"}}>
                  <div className="post-review-overlay position-absolute border border-danger border-3 rounded" style={{height:"50px" , width:"100px" , right:"-5px"}}></div>
                  <button className='bg-danger border-0 p-2 rounded-2 text-white z-1'>post review</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>




    </>
  )
}
