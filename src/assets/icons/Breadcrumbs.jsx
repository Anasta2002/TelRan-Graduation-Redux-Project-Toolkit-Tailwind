import React, { useContext } from 'react'
import { Context } from '../../context';

export default function BreadcrumbsIcon() {
    const { isDarkMode } = useContext(Context)
    const fillColor = !isDarkMode ? 'black' : 'white'

    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8485 9.85119C13.8485 9.68375 13.7648 9.51631 13.6811 9.43259L9.49504 5.24654C9.24388 4.99538 8.82528 4.99538 8.57411 5.24654C8.32295 5.4977 8.32295 5.91631 8.57411 6.16747L12.3416 9.93491L8.57411 13.7024C8.32295 13.9535 8.32295 14.3721 8.57411 14.6233C8.82528 14.8744 9.24388 14.8744 9.49504 14.6233L13.6811 10.4372C13.7648 10.1024 13.8485 9.93491 13.8485 9.85119Z" fill={fillColor} />
        </svg>
    )
}



