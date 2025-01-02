"use client"; // Mark this file as a Client Component

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  // Array of 27 products
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 Mid '07",
      description: "Men's Shoes",
      color: "1 Colour",
      price: "₹10 795.00",
      image: "/images/1.jpg",
      label: "Just In",
    },
    {
      id: 2,
      name: "Nike Court Vision Low Next Nature",
      description: "Men's Shoes",
      color: "1 Colour",
      price: "₹4 995.00",
      image: "/images/2.jpg",
      label: "Just In",
    },
    {
      id: 3,
      name: "Nike Air Force 1 PLT.AF.ORM",
      description: "Women's Shoes",
      color: "1 Colour",
      price: "₹8 695.00",
      image: "/images/3.jpg",
      label: "Just In",
    },
    {
      id: 4,
      name: "Nike Air Force 1 React",
      description: "Men's Shoes",
      color: "1 Colour",
      price: "₹13 295.00",
      image: "/images/4.jpg",
      label: "Just In",
    },
    {
      id: 5,
      name: "Air Jordan 1 Elevate Low",
      description: "Women's Shoes",
      color: "1 Colour",
      price: "₹21 995.00",
      image: "/images/5.jpg",
      label: "Promo Exclusion",
    },
    {
      id: 6,
      name: "Nike Standard Issue",
      description: "Women's Basketball Jersey",
      color: "1 Colour",
      price: "₹2 999.00",
      image: "/images/6.jpg",
      label: "Just In",
    },
    {
      id: 7,
      name: "Nike Dunk Low Retro SE",
      description: "Men's Shoes",
      color: "1 Colour",
      price: "₹9 999.00",
      image: "/images/7.jpg",
      label: "Promo Exclusion",
    },
    {
      id: 8,
      name: "Nike Dri-FIT UV Hyverse",
      description: "Men's Short-Sleeve Graphic Fitness Top",
      color: "1 Colour",
      price: "₹2 499.00",
      image: "/images/8.jpg",
      label: "Sustainable Materials",
    },
    {
      id: 9,
      name: "Nike Court Vision Low",
      description: "Men's Shoes",
      color: "1 Colour",
      price: "₹5 699.00",
      image: "/images/9.jpg",
      label: "Just In",
    },
    {
      id: 10,
      name: "Nike Dri-FIT Ready",
      description: "Men's Short-Sleeve Fitness Top",
      color: "3 Colours",
      price: "₹2 495.00",
      image: "/images/10.jpg",
      label: "Just In",
    },
    {
      id: 11,
      name: "Nike Air Force 1 LVB 3",
      description: "Older Kid's Shoe",
      color: "1 Colour",
      price: "₹7 995.00",
      image: "/images/11.jpg",
      label: "Just In",
    },
    {
      id: 12,
      name: "Nike Blazer Low Platform",
      description: "Men's Casual Shoes",
      color: "3 Colours",
      price: "₹7,499.00",
      image: "/images/12.jpg",
      label: "Just In",
    },
    {
      id: 13,
      name: "Nike Air Force 1'07",
      description: "Women's Shoes",
      color: "1 Colour",
      price: "₹8 999.00",
      image: "/images/13.jpg",
      label: "Just In",
    },
    {
      id: 14,
      name: "Nike Pro Dri-FIT",
      description: "Men's Tight Fit Sleveeles Top ",
      color: "1 Colour",
      price: "₹1 695.00",
      image: "/images/14.jpg",
      label: "Just In",
    },
    {
      id: 15,
      name: "Nike Dunk Retro",
      description: "Men's Shoes",
      color: "1 Colour",
      price: "₹8 999.00",
      image: "/images/15.jpg",
      label: "Just In",
    },
    {
      id: 16,
      name: "Nike Air Max SC",
      description: "Women's Shoes",
      color: "2 Colours",
      price: "₹5 299.00",
      image: "/images/16.jpg",
      label: "Just In",
    },
    {
      id: 17,
      name: "Nike Dri-FIT UV Miller",
      description: "Men's Short Sleeves Running Top",
      color: "1 Colour",
      price: "₹1 499.00",
      image: "/images/17.jpg",
      label: "Just In",
    },
    {
      id: 18,
      name: "Nike Air Max SYSTM",
      description: "Older Kid's Shoes",
      color: "1 Colour",
      price: "₹6 499.00",
      image: "/images/18.jpg",
      label: "Just In",
    },
    {
      id: 19,
      name: "Nike Air Max SYSTM",
      description: "Older Kid's Shoes",
      color: "1 Colour",
      price: "₹6 995.00",
      image: "/images/19.jpg",
      label: "Just In",
    },
    {
      id: 20,
      name: "Nike SB Zoom Jakosi OG+",
      description: "Shoes",
      color: "1 Colour",
      price: "₹8 499.00",
      image: "/images/20.jpg",
      label: "Just In",
    },
    {
      id: 21,
      name: "Nike Dri-FIT Run Division Rise 365",
      description: "Men's Running Tank",
      color: "2 Colours",
      price: "3 999.00",
      image: "/images/21.jpg",
      label: "Just In",
    },
    {
      id: 22,
      name: "Nike Dri-FIT Challenger",
      description: "Men's Shorts",
      color: "1 Colour",
      price: "₹2 299.00",
      image: "/images/22.jpg",
      label: "Just In",
    },
    {
      id: 23,
      name: "Jordan Series ES",
      description: "Men's Shorts",
      color: "2 Colours",
      price: "₹7 499.00",
      image: "/images/27.jpg",
      label: "Just In",
    },
    {
      id: 24,
      name: "Nike Outdoor Play",
      description: "Older Kid's Over Size Woven Jacket",
      color: "1 Colour",
      price: "₹3 295.00",
      image: "/images/23.jpg",
      label: "Just In",
    },
    {
      id: 25,
      name: "Nike Sportswear Trend",
      description: "Older Kid's Girls Woven Short",
      color: "2 Colours",
      price: "₹2 499.00",
      image: "/images/24.jpg",
      label: "Just In",
    },
    {
      id: 26,
      name: "Nike Blazer Low '77 Jumbo",
      description: "Women's Shoes",
      color: "1 Colour",
      price: "₹8 499.00",
      image: "/images/25.jpg",
      label: "Just In",
    },
    {
      id: 27,
      name: "Nike SB Force 58",
      description: "Skate Shoes",
      color: "1 Colour",
      price: "₹5 999.00",
      image: "/images/26.jpg",
      label: "Just In",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex">
     {/* Left Sidebar Section */}
<div className="w-[240px] bg-gray-100 p-4 border rounded-md">
  {/* New (500) Section */}
  <h3 className="font-bold text-lg mb-4">New (500)</h3>
  <ul className="space-y-2">
    <li className="text-sm text-black-600">Shoes</li>
    <li className="text-sm text-black-600">Sports Bras</li>
    <li className="text-sm text-black-600">Tops & T-Shirts</li>
    <li className="text-sm text-black-600">Hoodies & Sweatshirts</li>
    <li className="text-sm text-black-600">Jackets</li>
    <li className="text-sm text-black-600">Trousers & Tights</li>
    <li className="text-sm text-black-600">Shorts</li>
    <li className="text-sm text-black-600">Tracksuits</li>
    <li className="text-sm text-black-600">Jumpsuits & Rompers</li>
    <li className="text-sm text-black-600">Skirts & Dresses</li>
    <li className="text-sm text-black-600">Socks</li>
    <li className="text-sm text-black-600">Accessories & Equipment</li>
  </ul>

  {/* Gender Section */}
  <div className="mt-6 border-t pt-4">
    <h3 className="font-bold text-lg mb-2">Gender</h3>
    <div className="space-y-2">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" />
        <span className="text-sm text-black-600">Men</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" />
        <span className="text-sm text-black-600">Women</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" />
        <span className="text-sm text-black-600">Unisex</span>
      </label>
    </div>
  </div>

  {/* Kids Section */}
  <div className="mt-6 border-t pt-4">
    <h3 className="font-bold text-lg mb-2">Kids</h3>
    <div className="space-y-2">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" />
        <span className="text-sm text-black-600">Boys</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" />
        <span className="text-sm text-black-600">Girls</span>
      </label>
    </div>
  </div>

  {/* Shop By Price Section */}
  <div className="mt-6 border-t pt-4">
    <h3 className="font-bold text-lg mb-2">Shop By Price</h3>
    <div className="space-y-2">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" />
        <span className="text-sm text-black-600">Under ₹2,500.00</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-600" />
        <span className="text-sm text-black-600">₹2,501.00 - ₹5,000.00</span>
      </label>
    </div>
  </div>
</div>

 {/* Product Display Section */}
 <div className="flex-1 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className=" p-4 rounded-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-30 object-cover rounded-md"
                    />
                    <p className="text-red-700 font-bold text-sm mt-2">{product.label}</p>
                    <h2 className="text-sm font-semibold mt-1">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-sm text-gray-600">{product.color}</p>
                    <p className="text-sm font-semibold mt-1">MRP: {product.price}</p>
                   
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;