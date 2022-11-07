import React from 'react';
import Map from '../components/map/Map';

export default function Home() {
  return (
    <div className="p-20">

      <div className="flex flex-col m-auto relative">
        <div className="w-2/5 m-auto opacity-10">
          <Map />
        </div>
        <div className="absolute w-full h-full text-center top-1/2">
          <h1 className="text-4xl text-white">Mike Harrison</h1>
        </div>
      </div>

    </div>
  );
}
