// import logo from './logo.svg';
import { useState  , useEffect } from 'react';
import './App.css';
import AppSection from './components/AppSection';
import BannerFooter from './components/BannerFooter';
import CartCheckOut from './components/CartCheckOut';
import ChefDetails from './components/ChefDetails';
import DiscoverMenu from './components/DiscoverMenu';
import ExpertTeam from './components/ExpertTeam';
import FeaturesProducts from './components/FeaturesProducts';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import FormSecion from './components/FormSecion';
import HeroSection from './components/HeroSection';
import LoginSignUp from './components/LoginSignUp';
import Navbar from './components/Navbar';
import NavbarFooter from './components/NavbarFooter';
import Ourmenu from './components/Ourmenu';
import ProductDetails from './components/ProductDetails';
import RecentNews from './components/RecentNews';
import ReserveAtable from './components/ReserveAtable';
import ShopCart from './components/ShopCart';
import {  Routes , Route} from "react-router-dom";

function App() {

  //  TO add item in shop cart
  let [count , setCount] = useState(()=>{
     const storedCount = localStorage.getItem("count");
     const parsed = parseInt(storedCount , 10);
     return !isNaN(parsed) ? parsed : 0;
  });
  const [cartItem , setCartItem] = useState(() =>{
    // const savedItems = JSON.parse(localStorage.getItem("saveItems")) || [];
     const savedItems = localStorage.getItem("saveItems");
  return savedItems  ?  JSON.parse(savedItems) : [];
  // return savedItems ? JSON.parse(savedItems) : [];
  });

   

  function addToCart (product){
    setCartItem(prevItem => [...prevItem, product]);
    setCount(prevCount => prevCount+1);
  };
  useEffect(() => {
          localStorage.setItem("saveItems" , JSON.stringify(cartItem));
          localStorage.setItem("count" , count);
      } , [cartItem , count])

   const [quntity , setQuantity] = useState(
          cartItem.map((acc  , index)=>{
                  acc[index] = 1;
                  return acc;
          } , {})
      )


       function clearCart(){
        setCartItem([]);
        localStorage.clear();
        setCount(0);
        //  window.location.reload();
    };

    function removeItem(id){
        setCartItem(prevItem => {
        const filteredItems =   prevItem.filter( item => item.id !== id);
          // const removedItems = prevItem.length - filteredItems.length;
         setCount(filteredItems.length);
         return filteredItems;

        });
        
      //  setCount(prevCount => prevCount - 1);
    }
  
  
      // abhi quntity agar change ho 
  
      const handleQuantity = (index , newQuantity) =>{
              setQuantity(prev => ({
                  ...prev , [index] : parseInt(newQuantity) || 1
              }));
      };
  
      const getNumericPrice = (price) =>
    typeof price === 'string' ? parseFloat(price.replace('$', '')) : price;
  
  
      const subtotal = cartItem.reduce((acc, item, index) => {
    const quantity = quntity[index] || 1;
    const price = getNumericPrice(item.price);
    return acc + price * quantity;
  }, 0);


  // product details section items 

  const [productDetails , setProductDetails] = useState([]);

  function seeProductDetails(product){
    setProductDetails(prev => [...prev , product]);
  }
  


  return (
    <>
    <Navbar/>
    <NavbarFooter count={count}/>

    <Routes>
      <Route path='/Home' element={<>
      <HeroSection/>
    <BannerFooter/>
    <DiscoverMenu />
    <FormSecion/>
    <FeaturesProducts onAddToCart={addToCart}  seeProductDetails={seeProductDetails}/>
    <Feedback/>
    <ExpertTeam/>
    <AppSection/>
    <RecentNews/>
     </>}/>

    <Route path='*' element={<h2 className='display-4 text-danger fw-bold d-flex justify-content-center pt-5' style={{height:"100vh"}} >404 - Not Found</h2>} />


    <Route path='/FeaturesProducts' element = {<FeaturesProducts   />} />
      <Route path='/DiscoverMenu' element={<DiscoverMenu/>} />

      <Route path='/ProductDetails' element={<ProductDetails productDetails={productDetails} addToCart ={addToCart} />} />
      <Route path='/ShopCart' element={<ShopCart removeItem={removeItem} clearCart={clearCart} quntity={quntity} cartItem={cartItem} handleQuantity={handleQuantity} subtotal={subtotal} getNumericPrice={getNumericPrice}/>} />
      <Route path='/CartCheckOut' element={<CartCheckOut  subtotal={subtotal} />} />
      <Route path='/ChefDetails' element={<ChefDetails/> } />
      <Route path='/LoginSignUp' element={<LoginSignUp/> } />
      <Route path='/About' element={
        <>
     <BannerFooter/>
      <ExpertTeam/>
      <Feedback/>
       </>} />

      <Route path='/OurServices' element={<>
      <AppSection/>
       <RecentNews/>
      </> } />

      <Route path='/ReserveAtable' element={<ReserveAtable/> } />
    </Routes>
    <Footer/>

    
    




    {/* <Navbar/> */}
    {/* <NavbarFooter/> */}
    {/* <HeroSection/> */}
    {/* <BannerFooter/> */}
    {/* <DiscoverMenu/> */}
    {/* <FormSecion/> */}
    {/* <FeaturesProducts/> */}
    {/* <Feedback/> */}
    {/* <ExpertTeam/> */}
    {/* <AppSection/> */}
    {/* <RecentNews/> */}
    {/* <Footer/> */}
    {/* <CartCheckOut/> */}
    {/* <ShopCart/> */}
    {/* <ProductDetails/> */}
    {/* <ChefDetails/> */}
    {/* <Ourmenu/> */}
    {/* <LoginSignUp/> */}
    {/* <ReserveAtable/> */}
    </>
  );
}

export default App;
