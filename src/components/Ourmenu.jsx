    import React from 'react'

    const ourMenuProducts = [
        {
            title: "Desert",
            image: "/discover-1.png",
            icon: "fa-solid fa-cake-candles",
            items: [
                { title: "Four Cheese Garlic Bread", description: "Toasted french bread topped with romano", price: "$9.00" },
                { title: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: "$7.50" },
                { title: "Ice Cream Sundae", description: "Vanilla ice cream with caramel and nuts", price: "$5.00" },
                { title: "Fruit Tart", description: "Seasonal fruits in crispy tart shell", price: "$6.25" }
            ]
        },
        {
            title: "Pizza",
            image: "/discover-2.png",
            icon: "fa-solid fa-pizza-slice",
            items: [
                { title: "Margherita Pizza", description: "Fresh tomatoes, mozzarella & basil", price: "$12.00" },
                { title: "Pepperoni Pizza", description: "Spicy pepperoni with cheese", price: "$13.50" },
                { title: "Veggie Delight", description: "Peppers, olives, onions & mushrooms", price: "$11.75" },
                { title: "BBQ Chicken Pizza", description: "Grilled chicken with BBQ sauce", price: "$14.25" }
            ]
        },
        {
            title: "Drinks",
            image: "/discover-7.png",
            icon: "fa-solid fa-martini-glass-empty",
            items: [
                { title: "Lemonade", description: "Fresh squeezed lemonade", price: "$3.00" },
                { title: "Iced Tea", description: "Brewed tea served cold", price: "$2.75" },
                { title: "Cappuccino", description: "Espresso with steamed milk", price: "$4.50" },
                { title: "Smoothie", description: "Mixed berry or mango blend", price: "$5.50" }
            ]
        },
        {
            title: "Burger",
            image: "/discover-7.png",
            icon: "fa-solid fa-burger",
            items: [
                { title: "Classic Beef Burger", description: "Grilled beef patty with cheese & lettuce", price: "$10.00" },
                { title: "Chicken Burger", description: "Fried chicken breast, pickles & mayo", price: "$9.50" },
                { title: "Veggie Burger", description: "Plant-based patty with tomato & onion", price: "$8.75" },
                { title: "Cheese Burst Burger", description: "Extra cheesy beef burger", price: "$11.25" }
            ]
        }
    ];


    export default function Ourmenu() {
        return (
            <>

                <div className="container">
                    <div className="row">
                        <div className="col-12 py-5" style={{ height: "auto" }} id='shop-cart-banner'>
                            <h3 className='fw-bold display-6'>table menu</h3>
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
                    <div className=" row discover-content-row mx-2 g-4 d-flex justify-content-end">
                        {
                            ourMenuProducts.map((menu)=>{
                              return (

                                  <div className="col-sm-12 col-md-12 col-lg-8 position-relative mt-3">
                            <div
                                className="light-color py-4 border border-dark rounded-4 d-flex flex-column align-items-center justify-content-center"
                                style={{ backgroundColor: "#F5F8FD" }}
                            >
                                <img
                                    src={menu.image}
                                    alt=""
                                    className="d-sm-block d-none"
                                    style={{
                                        position: "absolute",
                                        left: "0",
                                        top: "50%",
                                        transform: "translateX(-50%) translateY(-50%)",
                                        width: "300px",
                                    }}
                                />
                                <div className="desert-items p-2">
                                    <div className="discover-title fw-bold">
                                        <h2 className='fw-bold' >{menu.title}</h2>
                                    </div>
                                    <ul className="list-unstyled">
                                        {menu.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="d-flex align-items-center justify-content-between border-bottom p-3"
                                            >
                                                <div className="item-heading">
                                                    <h4 className="item-title">{item.title}</h4>
                                                    <div className="item-description">{item.description}</div>
                                                </div>
                                                <div className="item-price">
                                                    <strong className='text-danger'>{item.price}</strong>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                              )
                            })
                        }
                    </div>
                </div>


            </>
        )
    }
