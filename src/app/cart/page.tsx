import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  return (
    <div style={{ backgroundColor: "white", color: "black", fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      {/* Header */}
      <div className="bg-white text-black">
        {/* Top Bar */}
        <div className="flex justify-end items-center text-xs py-2 px-8">
          <Link href="/store" className="mx-2 hover:underline">Find a Store</Link>
          <Link href="/get-help" className="mx-2 hover:underline">Help</Link>
          <Link href="/join-us" className="mx-2 hover:underline">Join Us</Link>
          <Link href="/sign-in" className="mx-2 hover:underline">Sign In</Link>
        </div>

        {/* Main Header */}
        <nav className="bg-white text-black border-b border-gray-200">
          <div className="flex justify-between items-center px-8 py-4">
            {/* Left - Jordan Logo */}
            <div>
              <Image width={500} height={500}
                src="/images/jordan-logo.jpg"
                alt="Jordan Logo"
                className="h-6 w-auto"
              />
            </div>

            {/* Center - Nike Logo and Links */}
            <div className="flex items-center space-x-8">
              {/* Nike Logo */}
              <Image width={500} height={500}
                src="/images/nike-logo.png"
                alt="Nike Logo"
                className="h-6 w-auto"
              />
              {/* Links */}
              <div className="flex space-x-6 text-sm font-medium">
                <Link href="/new" className="hover:underline">New & Featured</Link>
                <Link href="/men" className="hover:underline">Men</Link>
                <Link href="/women" className="hover:underline">Women</Link>
                <Link href="/kids" className="hover:underline">Kids</Link>
                <Link href="/sale" className="hover:underline">Sale</Link>
                <Link href="/snkrs" className="hover:underline">SNKRS</Link>
              </div>
            </div>

            {/* Right - Search Bar and Icons */}
            <div className="flex items-center space-x-6">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none"
                />
              </div>
              {/* Icons */}
              <Link href="/favorites" className="text-xl hover:text-gray-500">❤️</Link>
              <Link href="/cart" className="text-xl hover:text-gray-500">🛒</Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "20px auto", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "40px" }}>
          {/* Left Section */}
          <div style={{ flex: 2 }}>
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
              How would you like to get your order?
            </h1>
            <p style={{ marginBottom: "20px", fontSize: "14px", lineHeight: "1.6" }}>
              Customs regulations for India require a copy of the recipient’s KYC. The address on the KYC needs to match the shipping
              address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and
              used solely for the purpose of clearing customs (including sharing it with customs officials for all orders and returns).
              If your KYC does not match your shipping address, please click the link for more information.{" "}
              <a href="#" style={{ color: "#000", textDecoration: "underline" }}>Learn More</a>
            </p>

            <button
              style={{
                border: "2px solid #000",
                padding: "10px 20px",
                fontSize: "14px",
                borderRadius: "5px",
                cursor: "pointer",
                display: "block",
                marginBottom: "40px",
              }}
            >
              Deliver It
            </button>

            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
              Enter your name and address:
            </h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input type="text" placeholder="First Name" style={inputStyle} />
              <input type="text" placeholder="Last Name" style={inputStyle} />
              <input type="text" placeholder="Address Line 1" style={inputStyle} />
              <input type="text" placeholder="Address Line 2" style={inputStyle} />
              <input type="text" placeholder="Address Line 3" style={inputStyle} />
              <div style={{ display: "flex", gap: "15px" }}>
                <input type="text" placeholder="Postal Code" style={inputStyle} />
                <input type="text" placeholder="Locality" style={inputStyle} />
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <select style={inputStyle}>
                  <option value="state">State/Territory</option>
                </select>
                <select style={inputStyle}>
                  <option value="india">India</option>
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label>
                  <input type="checkbox" /> Save this address to my profile
                </label>
                <label>
                  <input type="checkbox" /> Make this my preferred address
                </label>
              </div>
            </form>

            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "40px", marginBottom: "20px" }}>
              Whats your contact information?
            </h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input type="email" placeholder="Email" style={inputStyle} />
              <input type="text" placeholder="Phone Number" style={inputStyle} />
            </form>

            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "40px", marginBottom: "20px" }}>
              Whats your PAN?
            </h2>
            <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input type="text" placeholder="PAN" style={inputStyle} />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label>
                  <input type="checkbox" /> Save PAN details to Nike Profile
                </label>
                <label>
                  <input type="checkbox" /> I have read and consent to eShopWorld processing my information...
                </label>
              </div>
            </form>

            <button
              style={{
                backgroundColor: "#ccc",
                padding: "15px 20px",
                fontSize: "16px",
                borderRadius: "5px",
                marginTop: "30px",
                cursor: "not-allowed",
              }}
              disabled
            >
              Continue
            </button>
          </div>

          {/* Right Section - Order Summary */}
          <div style={{ flex: 1, backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>Order Summary</h2>
            <p style={{ marginBottom: "10px", fontSize: "14px" }}>Subtotal</p>
            <p style={{ marginBottom: "10px", fontSize: "14px" }}>Delivery/Shipping</p>
            <p style={{ marginBottom: "10px", fontSize: "14px", fontWeight: "bold" }}>Total</p>
            <p style={{ marginBottom: "20px", fontSize: "14px" }}>Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            <div>
              <Image width={500} height={500}
                src="/images/nike air max pulse.jpg"
                alt="Product"
                style={{ width: "100%", marginBottom: "20px", borderRadius: "8px" }}
              />
              <p style={{ fontSize: "14px" }}>Nike Air Max 97 SE Mens Shoes</p>
              <p style={{ fontSize: "14px", color: "#777" }}>Qty: 1 | Size: 8</p>
            </div>
          </div>
        </div>
      </main>

       {/* Footer */}
       <footer
        style={{
          backgroundColor: '#111',
          color: '#fff',
          padding: '20px',
          marginTop: '40px',
          textAlign: 'center',
        }}
      >
        <p style={{ marginBottom: '10px' }}>© 2024 Nike, Inc. All Rights Reserved</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <Image width={500} height={500} src="/images/visa.jpg" alt="Visa" className="h-4" />
          <Image width={500} height={500} src="/images/mastercard.jpg" alt="MasterCard" className="h-4"/>
          <Image width={500} height={500} src="/images/upi.jpg" alt="UPI" className="h-4"/>
        </div>
      </footer>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  width: '100%',
};
export default CartPage;