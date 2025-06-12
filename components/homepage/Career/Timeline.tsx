import React from 'react';

const careerJobs = [
  {
    company: 'Benifex',
    title: 'Frontend Developer',
    logo: 'benifex-logo.jpg',
    timespan: 'Jun 2025',
    present: true,
  }, {
    company: 'Selfridges',
    title: 'Frontend Developer',
    logo: 'selfridges-logo.svg',
    timespan: 'Apr 2022',
  },
  {
    company: 'American Express',
    title: 'Software Engineer III',
    logo: 'amex-logo.svg',
    timespan: 'Feb 2021',
  },
  {
    company: 'American Express',
    title: 'Software Engineer III',
    logo: 'amex-logo.svg',
    timespan: 'Sep 2019',
  },
];

// eslint-disable-next-line import/prefer-default-export
export function Timeline() {
  return (
    <div className="relative after:content-[' '] after:absolute  after:bg-gray-100 after:w-[4px] after:h-full after:left-[50%] after:translate-x-[-50%] after:top-0 md:after:top-full md:after:w-full md:after:h-[4px] md:after:left-0 md:after:translate-x-0">
      <div className="flex items-center text-center flex-col md:gap-4 md:justify-around md:flex-row">

        {careerJobs.map((job) => (
          <div key={job.company} className={`${job.present ? 'after:animate-pulse bg-darkslate-grey text-white after:bg-red-700 rounded-tl rounded-bl md:rounded-bl-none md:rounded-tr' : ''} after:z-10 flex flex-col mt-auto items-center max-w-[150px] md:max-w-none max-md:[&:nth-child(odd)]:left-[-75px] max-md:[&:nth-child(even)]:left-[75px] relative border-darkslate-grey p-4 after:content-[' '] after:absolute after:h-[20px] after:w-[20px] after:bg-darkslate-grey after:top-[50%] max-md:[&:nth-child(odd)]:after:left-full max-md:[&:nth-child(even)]:after:left-0 after:translate-y-[-50%] md:after:translate-y-0 md:after:left-[50%] after:translate-x-[-50%] md:after:top-[calc(100%-8px)] after:rounded-full md:left-0`}>
            {/* <h4 className="text-xl font-bold">{job.company}</h4> */}
            <img src={`/${job.logo}`} alt={job.company} className="w-[100px] rounded" />
            <h5 className="font-bold mt-3 mb-1">{job.company}</h5>
            <h6 className="text-xs">{job.title}</h6>
            <h6 className="text-s">{job.timespan}</h6>
          </div>

        ))}

        {/* <div className="max-w-[150px] md:max-w-none left-[75px] relative border-darkslate-grey bg-gray-100 p-4 after:content-[' '] after:absolute after:h-[20px] after:w-[20px] after:bg-darkslate-grey after:top-[50%] after:left-0 after:translate-y-[-50%] md:after:translate-y-0 md:after:left-[50%] after:translate-x-[-50%] md:after:top-[calc(100%-8px)] after:rounded-full md:left-0"> */}
        {/*  <h4 className="text-xl font-bold">Selfridges</h4> */}
        {/*  <div>Frontend Developer</div> */}
        {/*  <div>2022 - 2025</div> */}

        {/* </div> */}

        {/* <div className="max-w-[150px] md:max-w-none left-[-75px] relative border-darkslate-grey bg-gray-100 p-4 after:content-[' '] after:absolute after:h-[20px] after:w-[20px] after:bg-darkslate-grey after:top-[50%] after:left-full after:translate-y-[-50%] md:after:translate-y-0 md:after:left-[50%] after:translate-x-[-50%] md:after:top-[calc(100%-8px)] after:rounded-full md:left-0"> */}
        {/*  <h4 className="text-xl font-bold">American Express</h4> */}
        {/*  <div>Frontend Developer</div> */}
        {/*  <div>2022 - 2025</div> */}
        {/* </div> */}

        {/* <div className="max-w-[150px] md:max-w-none left-[-75px] relative border-darkslate-grey bg-gray-100 p-4 after:content-[' '] after:absolute after:h-[20px] after:w-[20px] after:bg-darkslate-grey after:top-[50%] after:left-full after:translate-y-[-50%] md:after:translate-y-0 md:after:left-[50%] after:translate-x-[-50%] md:after:top-[calc(100%-8px)] after:rounded-full md:left-0"> */}
        {/*  <h4 className="text-xl font-bold">American Express</h4> */}
        {/*  <div>Frontend Developer</div> */}
        {/*  <div>2022 - 2025</div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
