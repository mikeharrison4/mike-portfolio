import React, { useState } from 'react';
import Image from 'next/image';
import Toggle from './Toggle';

const navItems: Array<string> = ['Home', 'About', 'Work', 'Contact'];

function Navigation() {
  const [toggleOn, setToggleOn] = useState(false);

  const handleToggleClick = () => {
    setToggleOn(!toggleOn);
  };

  return (
    <nav className="bg-darkslate-grey flex mx-2 py-2 md:mx-24 md:py-4 text-white overflow-hidden">
      <Image src="/mh-logo-small.png" alt="MH Logo" width={50} height={50} priority />
      <ul className={`flex flex-wrap justify-end items-center ml-auto pr-6 relative transition-all duration-500 ease-in-out ${toggleOn ? 'left-0' : 'left-200'}`}>
        {navItems.map((navItem) => <li key={navItem} className="pl-4"><a className="text-xs sm:text-sm font-bold underline underline-offset-2" href="http://google.co.uk">{navItem}</a></li>)}
      </ul>
      <Toggle handleToggleClick={handleToggleClick} toggleOn={toggleOn} />
    </nav>
  );
}

export default Navigation;
