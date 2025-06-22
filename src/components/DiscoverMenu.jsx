import React, { useState } from 'react';

const discoverSections = [
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

export default function DiscoverMenu() {
  const [activeTab, setActiveTab] = useState(discoverSections[0].title);

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  const currentSection = discoverSections.find(sec => sec.title === activeTab);

  return (
    <div className="container py-4 mt-5">
      
      {/* Category Card Pagination */}
      <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
        {discoverSections.map((section) => (
          <div
            key={section.title}
            className={`text-center d-flex flex-column gap-2 px-4 py-3 rounded shadow-sm ${
              section.title === activeTab ? "bg-danger text-white" : "border text-danger"
            }`}
            style={{
              minWidth: "120px",
              cursor: "pointer",
              transition: "0.3s",
              borderRadius: section.title === activeTab ? "0 0 20px 20px" : "10px",
            }}
            onClick={() => handleTabClick(section.title)}
          >
            <i style={{ fontSize: "30px" }} className={section.icon}></i>
            <strong>{section.title}</strong>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className=" row discover-content-row mx-2 g-4 d-flex justify-content-end">
        <div className="col-sm-12 col-md-12 col-lg-8 position-relative">
          <div
            className="light-color py-4 border border-dark rounded-4 d-flex flex-column align-items-center justify-content-center"
            style={{ backgroundColor: "#F5F8FD" }}
          >
            <img
              src={currentSection.image}
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
                <h2 className='fw-bold' >{currentSection.title}</h2>
              </div>
              <ul className="list-unstyled">
                {currentSection.items.map((item, i) => (
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
      </div>
    </div>
  );
}
