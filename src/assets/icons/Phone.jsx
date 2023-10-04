import React, { useContext } from 'react'
import { Context } from '../../context';

export default function Phone() {
  const { isDarkMode } = useContext(Context)
  const fillColor = !isDarkMode ? 'black' : 'white'
  
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5179 21C13.6 21 10.3284 19.6829 7.85265 17.1366C5.90739 15.2049 4.58107 12.6585 4.13897 10.2C3.69686 7.47805 4.31581 5.10732 5.90739 3.52683C6.08423 3.35122 6.34949 3.17561 6.61475 3.0878C6.7916 3 7.05686 3 7.32212 3C7.58738 3 7.85265 3.17561 8.11791 3.26341C8.38317 3.35122 8.56002 3.61463 8.64844 3.87805L11.0358 7.03902C11.3895 7.56585 11.4779 8.09268 11.3895 8.61951C11.3895 9.14634 11.1242 9.67317 10.6821 10.1122L10.4169 10.3756C10.0632 10.7268 9.79791 11.2537 9.79791 11.8683C9.79791 12.3951 9.97475 12.922 10.4169 13.361L11.7432 14.678C12.539 15.4683 13.8653 15.4683 14.6611 14.678L14.9263 14.4146C15.28 14.0634 15.8105 13.8 16.3411 13.7122C16.8716 13.6244 17.4021 13.8 17.9326 14.0634L21.2042 16.522C21.3811 16.6098 21.5579 16.7854 21.7347 17.0488C21.9116 17.3122 22 17.5756 22 17.839C22 18.1024 22 18.3659 21.9116 18.6293C21.8232 18.8927 21.6463 19.1561 21.4695 19.3317C20.2316 20.3854 18.4632 21 16.5179 21ZM7.14528 4.31707C7.05686 4.31707 7.05686 4.31707 6.96844 4.31707C6.88002 4.31707 6.88002 4.40488 6.7916 4.40488C5.46528 5.63415 5.02318 7.65366 5.37686 9.93659C5.73055 12.2195 6.96844 14.5024 8.73686 16.1707C12.4505 19.8585 17.9326 20.7366 20.5853 18.1024C20.6737 18.0146 20.6737 18.0146 20.6737 17.9268C20.6737 17.839 20.6737 17.7512 20.6737 17.7512C20.6737 17.6634 20.6737 17.5756 20.5853 17.5756C20.5853 17.4878 20.4968 17.4878 20.4084 17.4L17.2253 15.0293C17.0484 14.9415 16.7832 14.8537 16.5179 14.9415C16.2526 14.9415 16.0758 15.1171 15.8105 15.2927L15.5453 15.5561C14.219 16.7854 12.0084 16.7854 10.7705 15.5561L9.44422 14.239C8.9137 13.5366 8.56002 12.6585 8.56002 11.7805C8.56002 10.9024 8.9137 10.0244 9.53265 9.40976L9.79791 9.14634C9.97475 8.97073 10.0632 8.70732 10.1516 8.4439C10.1516 8.18049 10.1516 7.91707 9.97475 7.74146L7.58738 4.58049C7.49896 4.49268 7.41054 4.40488 7.41054 4.40488C7.32212 4.31707 7.2337 4.31707 7.14528 4.31707Z" fill={fillColor} />
    </svg>
  )
}