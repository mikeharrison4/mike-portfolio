import React, { useState } from 'react';
import Toggle from './Toggle';

const navItems: Array<string> = ['Home', 'About', 'Work', 'Contact'];

function Navigation() {
  const [toggleOn, setToggleOn] = useState(false);

  const handleToggleClick = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <nav className="bg-darkslate-grey flex justify-end mx-4 md:mx-24 py-4 text-white overflow-hidden">
      <ul className={`flex items-center pr-6 relative transition-all duration-500 ease-in-out ${toggleOn ? 'left-0' : 'left-200'}`}>
        {navItems.map((navItem) => <li key={navItem} className="pl-4 text-sm opacity-50"><a href="http://google.co.uk">{navItem}</a></li>)}
      </ul>
      <Toggle handleToggleClick={handleToggleClick} toggleOn={toggleOn} />
    </nav>
  );
}

export default Navigation;
