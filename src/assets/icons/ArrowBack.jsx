import React, { useContext } from 'react'
import { Context } from '../../context';

export default function ArrowBack() {
    const { isDarkMode } = useContext(Context)
    const fillColor = !isDarkMode ? 'black' : 'white'

    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.81387 10.3513C6.81387 10.1838 6.89759 10.0164 6.98131 9.93265L11.1674 5.7466C11.4185 5.49544 11.8371 5.49544 12.0883 5.7466C12.3394 5.99776 12.3394 6.41637 12.0883 6.66753L8.32084 10.435L12.0883 14.2024C12.3394 14.4536 12.3394 14.8722 12.0883 15.1233C11.8371 15.3745 11.4185 15.3745 11.1674 15.1233L6.98131 10.9373C6.89759 10.6024 6.81387 10.435 6.81387 10.3513Z" fill={fillColor} />
        </svg>
    )
}
