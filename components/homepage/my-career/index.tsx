import React from 'react';
import Image from 'next/image';

type Job = {
  company: string;
  logo: string;
  date:string;
  title: string;
  description: string
  present?: boolean;
}

const jobs: Array<Job> = [
  {
    company: 'Selfridges',
    logo: 'selfridges-logo.svg',
    date: 'Apr 2022 - Present',
    title: 'Frontend Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    present: true,
  },
  {
    company: 'American Express',
    logo: 'amex-logo.svg',
    date: 'Feb 2021 - Apr 2022',
    title: 'Software Engineer III',
    description: 'Working in the Travel and Lifestyle Services team as a Frontend Software Engineer,\n'
      + 'building on top of a production deployed CRM product, delivering exciting new\n'
      + 'features and playing a key part as an agile member of the scrum team.',
  },
  {
    company: 'American Express',
    logo: 'amex-logo.svg',
    date: 'Sep 2019 - Feb 2021',
    title: 'Junior Software Engineer (Apprentice)',
    description: 'Working in the Travel and Lifestyle Services team as a Frontend Software Engineer,\n'
      + 'building on top of a production deployed CRM product, delivering exciting new\n'
      + 'features and playing a key part as an agile member of the scrum team.',
  },
];

function MyCareer() {
  return (
    <>
      <h3 className="font-bold text-3xl text-darkslate-grey mb-10 text-right">My Career</h3>
      <div className="relative flex justify-between flex flex-row sm:flex-row">
        <div className="hidden absolute w-full top-[50px] -z-10 sm:block">
          <hr className="border-t-2 border-solid" />
        </div>
        <div className="block ml-[25px] absolute h-full border-l-2 border-solid sm:hidden" />
        <div className="sm:flex sm:items-baseline sm:justify-between">
          { jobs.map((job) => (
            <div key={job.date} className="px-2 flex sm:w-1/4 sm:flex-col justify-center sm:items-center mb-5">
              <div>
                <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] relative">
                  <Image src={`/${job.logo}`} alt="Amex Logo" fill className="rounded" />
                </div>
              </div>
              <div className={`${job.present ? 'bg-darkslate-grey text-white' : 'bg-gray-100'} rounded w-full p-5 text-center ml-3 sm:ml-0 sm:mt-3`}>
                <span className="text-xs">{job.date}</span>
                <h5 className="font-bold mt-3 mb-1">{job.company}</h5>
                <h6 className="text-xs">{job.title}</h6>
                <p className="text-xs mt-3">{job.description}</p>
              </div>
            </div>
          )) }
        </div>
      </div>
    </>
  );
}

export default MyCareer;
