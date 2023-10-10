import React from 'react'
import DarkMood from '../../../assets/icons/DarkMood';
import LightMood from '../../../assets/icons/LightMood';

export default function MoodSwitcher({isDarkMode, toggleTheme}) {

  return (
    <div className='p-5 md:p-0 md:ml-14 hover:scale-125'>
        {isDarkMode ? <DarkMood onClick={toggleTheme} /> : <LightMood onClick={toggleTheme} />}
    </div>
  )
}
