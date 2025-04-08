import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/boondah-logo.png" 
            alt="Boon-dah Learning Logo" 
            width={180} 
            height={60} 
          />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/curriculum" className="font-medium text-gray-700 hover:text-blue-600">
            CURRICULUM
          </Link>
          <Link href="/learner-variability" className="font-medium text-gray-700 hover:text-blue-600">
            LEARNER VARIABILITY
          </Link>
          <Link href="/testimonials" className="font-medium text-gray-700 hover:text-blue-600">
            TESTIMONIALS
          </Link>
          <Link href="/about" className="font-medium text-gray-700 hover:text-blue-600">
            ABOUT US
          </Link>
          <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-600">
            CONTACT
          </Link>
        </nav>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 