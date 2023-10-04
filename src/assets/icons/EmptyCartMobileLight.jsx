import React, { useContext } from 'react'
import { Context } from '../../context'

export default function EmptyCartMobileLight() {
  const { isDarkMode } = useContext(Context)
  const fillColor = !isDarkMode ? 'black' : 'white'

  return (
    <svg width="50" height="43" viewBox="0 0 50 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.275 30.0998H16.0573C15.1171 30.0953 14.2066 29.7705 13.476 29.179C12.7453 28.5874 12.2381 27.7644 12.0381 26.8458L7.25387 4.25254C7.10115 3.5372 6.70806 2.89573 6.14002 2.4349C5.57198 1.97407 4.86326 1.72167 4.1318 1.7197H0.959597C0.78537 1.71742 0.61892 1.6472 0.495712 1.52399C0.372505 1.40078 0.302281 1.23433 0.300003 1.06011C0.302281 0.88588 0.372505 0.71943 0.495712 0.596222C0.61892 0.473014 0.78537 0.40279 0.959597 0.400513H4.1318C5.16104 0.408776 6.1569 0.766686 6.95594 1.4155C7.75497 2.06432 8.3097 2.96549 8.52909 3.97111L9.40855 7.99903H45.5895C46.1646 7.99924 46.732 8.13122 47.2482 8.38486C47.7644 8.6385 48.2155 9.00705 48.5671 9.46221C48.9187 9.91737 49.1612 10.447 49.2762 11.0105C49.3912 11.5741 49.3755 12.1564 49.2304 12.7129L45.8621 25.1837C45.4336 26.5994 44.5628 27.8407 43.3773 28.7254C42.1919 29.6102 40.7541 30.0918 39.275 30.0998ZM9.67238 9.31822L13.3309 26.5644C13.4651 27.189 13.8085 27.7492 14.3042 28.1521C14.7999 28.5551 15.4184 28.7769 16.0573 28.7806H39.275C40.4626 28.7689 41.6153 28.3776 42.5646 27.664C43.514 26.9503 44.2103 25.9518 44.5517 24.8143L47.92 12.4051C48.0186 12.0415 48.0321 11.66 47.9595 11.2903C47.8869 10.9206 47.7302 10.5726 47.5014 10.2732C47.2726 9.97388 46.978 9.73123 46.6403 9.56408C46.3027 9.39694 45.931 9.30981 45.5543 9.30943H9.67238V9.31822Z" fill={fillColor}/>
        <path d="M18.5805 42.1745C17.7664 42.1745 16.9707 41.9331 16.2938 41.4808C15.617 41.0286 15.0894 40.3858 14.7779 39.6337C14.4664 38.8816 14.3849 38.0541 14.5437 37.2557C14.7025 36.4573 15.0945 35.7239 15.6701 35.1483C16.2457 34.5726 16.9791 34.1806 17.7775 34.0218C18.5759 33.863 19.4035 33.9445 20.1556 34.2561C20.9076 34.5676 21.5504 35.0951 22.0027 35.772C22.455 36.4488 22.6963 37.2446 22.6963 38.0586C22.6963 39.1502 22.2627 40.1971 21.4908 40.969C20.719 41.7408 19.6721 42.1745 18.5805 42.1745ZM18.5805 35.2619C18.0274 35.2619 17.4866 35.426 17.0267 35.7333C16.5668 36.0406 16.2084 36.4773 15.9967 36.9884C15.785 37.4994 15.7296 38.0617 15.8375 38.6042C15.9455 39.1467 16.2118 39.645 16.6029 40.0362C16.9941 40.4273 17.4924 40.6936 18.0349 40.8016C18.5774 40.9095 19.1397 40.8541 19.6507 40.6424C20.1618 40.4307 20.5985 40.0723 20.9058 39.6124C21.2131 39.1525 21.3772 38.6117 21.3772 38.0586C21.3772 37.3169 21.0825 36.6055 20.558 36.0811C20.0336 35.5566 19.3222 35.2619 18.5805 35.2619Z" fill={fillColor}/>
        <path d="M38.2188 42.1745C37.4048 42.1745 36.609 41.9331 35.9322 41.4808C35.2553 41.0286 34.7278 40.3858 34.4163 39.6337C34.1048 38.8816 34.0233 38.0541 34.1821 37.2557C34.3409 36.4573 34.7329 35.7239 35.3085 35.1483C35.8841 34.5726 36.6175 34.1806 37.4159 34.0218C38.2143 33.863 39.0418 33.9445 39.7939 34.2561C40.546 34.5676 41.1888 35.0951 41.6411 35.772C42.0933 36.4488 42.3347 37.2446 42.3347 38.0586C42.3347 39.1502 41.9011 40.1971 41.1292 40.969C40.3573 41.7408 39.3104 42.1745 38.2188 42.1745ZM38.2188 35.2619C37.6657 35.2619 37.125 35.426 36.6651 35.7333C36.2052 36.0406 35.8467 36.4773 35.6351 36.9884C35.4234 37.4994 35.368 38.0617 35.4759 38.6042C35.5838 39.1467 35.8502 39.645 36.2413 40.0362C36.6324 40.4273 37.1307 40.6936 37.6732 40.8016C38.2157 40.9095 38.7781 40.8541 39.2891 40.6424C39.8001 40.4307 40.2369 40.0723 40.5442 39.6124C40.8515 39.1525 41.0155 38.6117 41.0155 38.0586C41.0155 37.3169 40.7209 36.6055 40.1964 36.0811C39.6719 35.5566 38.9606 35.2619 38.2188 35.2619Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M20.5276 23.7957C20.3838 23.5382 20.4759 23.2129 20.7334 23.069C22.2416 22.2264 24.987 20.7744 29.4272 20.7744C33.5638 20.7744 35.9627 22.1339 37.4289 23.0875C37.6761 23.2484 37.7462 23.5791 37.5854 23.8264C37.4245 24.0736 37.0938 24.1437 36.8465 23.9829C35.4846 23.097 33.2878 21.8425 29.4272 21.8425C25.2494 21.8425 22.692 23.1982 21.2543 24.0014C20.9968 24.1453 20.6715 24.0531 20.5276 23.7957Z" fill="green"/>
        <path d="M34.2425 14.9646C34.2425 15.4365 33.8599 15.819 33.388 15.819C32.9161 15.819 32.5336 15.4365 32.5336 14.9646C32.5336 14.4927 32.9161 14.1101 33.388 14.1101C33.8599 14.1101 34.2425 14.4927 34.2425 14.9646Z" fill="green"/>
        <path d="M26.0297 14.9646C26.0297 15.4365 25.6471 15.819 25.1752 15.819C24.7033 15.819 24.3208 15.4365 24.3208 14.9646C24.3208 14.4927 24.7033 14.1101 25.1752 14.1101C25.6471 14.1101 26.0297 14.4927 26.0297 14.9646Z" fill="green"/>
    </svg>
  )
}

