import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-8">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link href="/">Nike</Link>
        </div>
        <div className="flex space-x-8">
          <Link href="/new" className="hover:text-gray-400">New & Featured</Link>
          <Link href="/men" className="hover:text-gray-400">Men</Link>
          <Link href="/women" className="hover:text-gray-400">Women</Link>
          <Link href="/kids" className="hover:text-gray-400">Kids</Link>
          <Link href="/sale" className="hover:text-gray-400">Sale</Link>
          <Link href="/shoes" className="hover:text-gray-400">Shoes</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/cart" className="hover:text-gray-400">🛒</Link>
          <Link href="/sign-in" className="hover:text-gray-400">Sign In</Link>
        </div>
      </div>
    </nav>


);
};

export default Navbar;