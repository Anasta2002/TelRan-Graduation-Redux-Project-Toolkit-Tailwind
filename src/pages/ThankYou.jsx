import React from 'react'
import Banner from '../components/UI/Banner/Banner'
import Container from '../components/UI/Container/Container'
import Button from '../components/UI/Button/Button'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <Banner>
        <Container>
            <h1 className={['h1', 'text-white'].join(' ')}>Thank You </h1>
            <p className={['h2', 'text-white'].join(' ')}>Your payment has been successfully completed. Please check your email for order details.</p>
            <p className={['h2', 'text-white'].join(' ')}>We thank you for choosing our store and hope to see you again! </p>
            <Link to={'/products'} className='w-72 md:w-80 bg-transparent block mx-auto mt-4 text-white'>
                <Button name='Continue shopping' type='primary' />
            </Link>
        </Container>
    </Banner>
  )
}
