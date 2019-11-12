import React from 'react';
import { useDarkMode } from '../Hooks/useDarkMode'

const DarkNav = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggle = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }
    return(
        <div className='nav-container' data-test='dark-Com'>
            <div className="dark-mode-toggle">
                <div
                onClick={toggle}
                className={darkMode ? 'toggle toggled' : 'toggle'}
            />
            </div>
        </div>
    )
}
export default DarkNav;