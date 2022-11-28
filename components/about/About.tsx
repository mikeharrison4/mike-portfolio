import React from 'react';

const skillIcons = [
  {
    name: 'TypeScript',
    icon: 'cib:typescript',
  },
  {
    name: 'JavaScript',
    icon: 'cib:javascript',
  },
  {
    name: 'React',
    icon: 'cib:react',
  },
  {
    name: 'HTML5',
    icon: 'cib:html5',
  },
  {
    name: 'CSS3',
    icon: 'cib:css3',
  },
  {
    name: 'SASS',
    icon: 'cib:sass-alt',
  },
  {
    name: 'NPM',
    icon: 'cib:npm',
  },
  {
    name: 'Redux',
    icon: 'cib:redux',
  },
  {
    name: 'GitHub',
    icon: 'cib:github',
  },
  {
    name: 'Responsive Design',
    icon: 'mdi:responsive',
  },
  {
    name: 'Jest',
    icon: 'cib:jest',
  },
  {
    name: 'Node JS',
    icon: 'mdi:nodejs',
  },
];

function About() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-x-10 gap-y-10">
      <ul className="col-span-1 grid grid-cols-4 md:grid-cols-5 place-items-center">
        {skillIcons.map(({ name, icon }) => (
          <li key={name} className="text-2xl">
            <iconify-icon icon={icon} />
          </li>
        ))}
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
