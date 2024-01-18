import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  const scrollToTopBtnRef = useRef(null);

  useEffect(() => {
    const scrollToTopBtn = scrollToTopBtnRef.current;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        scrollToTopBtn.classList.remove('opacity-0');
        scrollToTopBtn.classList.add('opacity-100');
      } else {
        scrollToTopBtn.classList.remove('opacity-100');
        scrollToTopBtn.classList.add('opacity-0');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  return (
    <footer className="bg-gray-300 border-y">
      <button
        onClick={scrollToTop}
        ref={scrollToTopBtnRef}
        className="opacity-0 fixed bottom-[3.5rem] right-2 bg-red-600 text-white px-3 py-2 rounded-md cursor-pointer transition-opacity duration-300 ease-in-out"
      >
        <IoIosArrowUp className="text-2xl font-mediums" />
      </button>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex items-center justify-between">
        <div>
          <h1 className="font-medium text-gray-800">&copy; FMEC 2024.</h1>
        </div>
        <div>
          <Link className="text-gray-700" to="/calls">
            All Rights Reserved
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
