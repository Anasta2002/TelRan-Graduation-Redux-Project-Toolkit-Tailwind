import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../components/UI/Banner/Banner';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';

export default function NotFound() {
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        navigate('/');
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, navigate]);


  return (
    <Banner>
      <Container>

      <h1  className={['h1', 'text-white'].join(' ')}>Sorry, but the page you are looking for could not be found</h1>
        <p className={['h2', 'text-white'].join(' ')}>
          Please click on the button to continue shopping or just wait. You'll be redirected to the home page in {seconds} seconds.
        </p>
        <Link to="/products" className="w-72 md-w-80 bg-transparent block mx-auto mt-4 text-white">
          <Button name="Continue shopping" type="primary" />
        </Link>
      </Container>
    </Banner>
  );
}