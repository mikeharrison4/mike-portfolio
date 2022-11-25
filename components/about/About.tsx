import React from 'react';

function About() {
  return (
    <div className="grid grid-cols-4 gap-10">
      <ul className="col-span-1 grid grid-cols-5 place-items-center place-items-start">
        <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/typescript.svg" />
      </ul>
      <div className="col-span-3">
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
