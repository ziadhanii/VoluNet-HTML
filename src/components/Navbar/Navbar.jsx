import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');



  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false); // close menu on mobile after click
  };

  const handleScrollToSection = (sectionId) => {
    setActiveLink(sectionId);
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
  <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Toggle */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo & Links */}
          <div className="flex flex-1 items-center justify-between" dir="rtl">
            {/* Logo on the right */}
            <h1 className="text-white font-bold text-2xl flex-shrink-0 order-1 ml-4">
              <Link to="/" onClick={() => handleScrollToSection('header')}>
              <i className="fa-solid fa-user-group text-[#0D6EFD]"></i>

                <span className="text-black"> طوعني</span>
                
              </Link>
            </h1>
            {/* Centered Links */}
            <div className="flex-1 flex justify-center order-2">
              <div className="hidden sm:flex space-x-4 space-x-reverse ">
                <Link
                  to="/header"
                  onClick={() => handleScrollToSection('header')}
                  className={`relative pe-7 py-2 rounded-md text-md font-medium transition-colors duration-200
                    ${activeLink === 'header' ? 'text-[#0D6EFD]' : 'text-gray-500'}
                    group`}
                >
                  الرئيسية
                  <span
                    className={`absolute right-0 bottom-0 h-0.5 bg-[#0D6EFD] transition-all duration-300
                      ${activeLink === '/header' ? 'w-full' : 'w-0'} group-hover:w-full`}
                    style={{ transitionProperty: 'width' }}
                  ></span>
                </Link>
          
                <Link
                  to="/about"
                  onClick={() => handleScrollToSection('about')}
                  className={`relative px-7 py-2 rounded-md text-md font-medium transition-colors duration-200
                    ${activeLink === 'about' ? 'text-[#0D6EFD]' : 'text-gray-500'}
                    group`}
                >
                  عن المنصة
                  <span
                    className={`absolute right-0 bottom-0 h-0.5 bg-[#0D6EFD] transition-all duration-300
                      ${activeLink === '/about' ? 'w-full' : 'w-0'} group-hover:w-full`}
                    style={{ transitionProperty: 'width' }}
                  ></span>
                </Link>
                
                <Link
                  to="/team"
                  onClick={() => handleScrollToSection('team')}
                  className={`relative px-7 py-2 rounded-md text-md font-medium transition-colors duration-200 
                    ${activeLink === 'team' ? 'text-[#0D6EFD]' : 'text-gray-500'}
                    group`}
                >
                  فريقنا
                  <span
                    className={`absolute right-0 bottom-0 h-0.5 bg-[#0D6EFD] transition-all duration-300
                      ${activeLink === '/team' ? 'w-full' : 'w-0'} group-hover:w-full`}
                    style={{ transitionProperty: 'width' }}
                  ></span>
                </Link>
              </div>
            </div>
          </div>

        
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {[
              { path: '/header', label: 'الرئيسية' },
              { path: '/about', label: 'عن المنصة' },
              { path: '/teams', label: 'فريقنا' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => handleLinkClick(path)}
                className={`relative block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 group
                  ${activeLink === path ? 'text-[#0D6EFD]' : 'text-gray-500'}`}
              >
                {label}
                <span
                  className={`absolute right-0 bottom-0 h-0.5 bg-[#0D6EFD] transition-all duration-300
                    ${activeLink === path ? 'w-full' : 'w-0'} group-hover:w-full`}
                  style={{ transitionProperty: 'width' }}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;