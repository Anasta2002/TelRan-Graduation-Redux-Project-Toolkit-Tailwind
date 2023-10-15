import React, { useState, useEffect, useRef } from 'react'
import Button from '../UI/Button/Button'
import BreadcrumbsIcon from '../../assets/icons/Breadcrumbs'
import ArrowUp from '../../assets/icons/ArrowUp';

export default function ScrollToTheTop() {
  const [showButton, setShowButton] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    footerRef.current = document.querySelector('footer');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [footerRef]);

  return (
    <div className='w-1/2 lg:w-1/6 pt-10 mt-10 mx-auto'>
      {showButton &&
        <Button className='primary' onClick={scrollToTop} name='Scroll to the top' icon={<ArrowUp />} />
      }
    </div>
  );
}

