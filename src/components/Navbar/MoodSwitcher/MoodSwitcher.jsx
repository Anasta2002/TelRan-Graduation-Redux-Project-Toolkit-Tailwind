import React from 'react'
import DarkMood from '../../../assets/icons/DarkMood';
import LightMood from '../../../assets/icons/LightMood';

export default function MoodSwitcher({isDarkMode, toggleTheme}) {

  return (
    <>
        {isDarkMode ? <DarkMood onClick={toggleTheme} /> : <LightMood onClick={toggleTheme} />}
    </>
  )
}
