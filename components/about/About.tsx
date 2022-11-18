import React from 'react';
import { SiTypescript, SiJavascript, SiJenkins } from 'react-icons/si';

function About() {
  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-2">
        {/*<SiTypescript />*/}
        {/*<SiJavascript />*/}
      </div>
      <div className="col-span-4">
        <h3 className="font-bold text-3xl text-darkslate-grey mb-3">About</h3>
        <p>
          Hey, I’m Mike, a web developer/software engineer from the south coast of England.
          This site is a way for me to demonstrate my skills I have acquired over the
          last 5 years of being involved with everything connected with software development.
          It is a great place for me to have some fun and play around for the world to see.
        </p>
      </div>
    </div>
  );
}

export default About;
