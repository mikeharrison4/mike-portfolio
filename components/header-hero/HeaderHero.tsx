import React from 'react';
import Image from 'next/image';
import Map from './map/Map';

function HeaderHero() {
  return (
    <div className="flex flex-col md:mx-24 py-20 relative">
      <div className="opacity-10 m-auto w-4/5 sm:w-3/5 md:w-2/5">
        <Map />
      </div>
      <div className="absolute w-full h-full text-center top-0 flex flex-col justify-center items-center pb-32">
        <Image src="/mikeharrison.jpg" alt="Mike Harrison" width={100} height={100} className="rounded-full" />
        <div className="text-white">
          <h1 className="text-4xl text-white mt-3">Mike Harrison</h1>
          <span>Frontend Engineer</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderHero;
