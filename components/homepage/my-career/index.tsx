import React from 'react';
import Image from 'next/image';

type Job = {
  company: string;
  logo: string;
  title: string;
  description: string
}

const jobs: Array<Job> = [
  {
    company: 'Selfridges',
    logo: 'selfridges-logo.svg',
    title: 'fill',
    description: 'hello',
  },
  {
    company: 'American Express',
    logo: 'amex-logo.svg',
    title: 'Software Engineer III',
    description: 'Working in the Travel and Lifestyle Services team as a Frontend Software Engineer,\n'
      + 'building on top of a production deployed CRM product, delivering exciting new\n'
      + 'features and playing a key part as an agile member of the scrum team.',
  },
  {
    company: 'American Express',
    logo: 'amex-logo.svg',
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
      <div className="relative flex justify-between items-baseline">
        <span className="w-[10px] h-[10px] absolute top-[46px] bg-darkslate-grey rounded-full" />
        <hr className="absolute w-full top-[50px] -z-10 border-t-2 border-solid" />
        <span className="w-[10px] h-[10px] absolute top-[46px] bg-darkslate-grey rounded-full right-0" />
        { jobs.map((job) => (
          <div className="w-1/4 flex flex-col justify-center items-center">
            <Image src={`/${job.logo}`} alt="Amex Logo" width="100" height="100" className="rounded" />
            <div className="bg-gray-100 w-full mt-3 p-5 text-center">
              <h5 className="font-bold">{job.company}</h5>
              <h6 className="text-xs">{job.title}</h6>
              <p className="text-xs mt-3">{job.description}</p>
            </div>
          </div>
        )) }
      </div>
    </>
  );
}

export default MyCareer;
