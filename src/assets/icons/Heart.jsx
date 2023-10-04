import React, { useContext } from 'react'
import { Context } from '../../context'

export default function Heart() {
  const {isDarkMode} = useContext(Context)
  const fillColor = isDarkMode ? 'white' : 'black'

  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.443 22C12.2565 22 12.1633 21.9071 11.9767 21.8142C11.1374 21.1638 4.23618 15.4033 3.0238 12.8947C1.34512 9.17823 1.71816 5.6476 4.23618 3.41773C6.10138 1.65241 10.0183 1.37368 12.3498 3.51064C12.443 3.60355 12.5363 3.60355 12.6296 3.51064C14.9611 1.37368 18.878 1.65241 20.7432 3.41773C23.2612 5.74051 23.7275 9.36405 21.8623 12.9876C20.3701 15.9608 13.1891 21.6284 12.9093 21.9071C12.7228 21.9071 12.6296 22 12.443 22ZM8.15309 3.32482C6.94072 3.32482 5.8216 3.69646 5.16878 4.34684C3.11706 6.20507 2.83728 9.08532 4.32944 12.2443C5.16878 14.0096 10.1116 18.3765 12.443 20.3276C14.0285 19.0268 19.4375 14.5671 20.5567 12.2443C22.1421 9.17823 21.8623 6.29798 19.7173 4.43975C18.5049 3.32482 15.4274 2.76735 13.4689 4.53266C12.9093 5.09013 11.8835 5.09013 11.3239 4.53266C10.4846 3.69646 9.27221 3.32482 8.15309 3.32482Z" fill={fillColor} />
    </svg>

  )
}