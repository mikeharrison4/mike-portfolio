import React from 'react';

const careerJobs = [{
  company: 'Benifex',
  title: 'Frontend Developer',
  timespan: 'present - 2025',
}, {
  company: 'Selfridges',
  title: 'Frontend Developer',
  timespan: '2022 - 2025',
},
{
  company: 'American Express',
  title: 'Frontend Developer',
  timespan: '2019 - 2022',
}];

// eslint-disable-next-line import/prefer-default-export
export function Timeline() {
  return (
    <div className="relative after:content-[' '] after:absolute  after:bg-darkslate-grey after:w-[4px] after:h-full after:left-[50%] after:translate-x-[-50%] after:top-0 md:after:top-full md:after:w-full md:after:h-[4px] md:after:left-0 md:after:translate-x-0">
      <div className="flex items-center flex-col gap-4 md:justify-around md:flex-row md:items-stretch">

        {careerJobs.map((job) => (
          <div key={job.company} className="[&:nth-child(odd)]:bg-red-700 max-w-[150px] md:max-w-none max-md:[&:nth-child(odd)]:left-[-75px] max-md:[&:nth-child(even)]:left-[75px] relative border-darkslate-grey bg-gray-100 p-4 after:content-[' '] after:absolute after:h-[20px] after:w-[20px] after:bg-darkslate-grey after:top-[50%] max-md:[&:nth-child(odd)]:after:left-full max-md:[&:nth-child(even)]:after:left-0 after:translate-y-[-50%] md:after:translate-y-0 md:after:left-[50%] after:translate-x-[-50%] md:after:top-[calc(100%-8px)] after:rounded-full md:left-0">
            <h4 className="text-xl font-bold">{job.company}</h4>
            <div>{job.title}</div>
            <div>{job.timespan}</div>
          </div>
        ))}



        {/*<div className="max-w-[150px] md:max-w-none left-[75px] relative border-darkslate-grey bg-gray-100 p-4 after:content-[' '] after:absolute after:h-[20px] after:w-[20px] after:bg-darkslate-grey after:top-[50%] after:left-0 after:translate-y-[-50%] md:after:translate-y-0 md:after:left-[50%] after:translate-x-[-50%] md:after:top-[calc(100%-8px)] after:rounded-full md:left-0">*/}
        {/*  <h4 className="text-xl font-bold">Selfridges</h4>*/}
        {/*  <div>Frontend Developer</div>*/}
        {/*  <div>2022 - 2025</div>*/}

        {/*</div>*/}

        {/*<div className="max-w-[150px] md:max-w-none left-[-75px] relative border-darkslate-grey bg-gray-100 p-4 after:content-[' '] after:absolute after:h-[20px] after:w-[20px] after:bg-darkslate-grey after:top-[50%] after:left-full after:translate-y-[-50%] md:after:translate-y-0 md:after:left-[50%] after:translate-x-[-50%] md:after:top-[calc(100%-8px)] after:rounded-full md:left-0">*/}
        {/*  <h4 className="text-xl font-bold">American Express</h4>*/}
        {/*  <div>Frontend Developer</div>*/}
        {/*  <div>2022 - 2025</div>*/}
        {/*</div>*/}

        {/*<div className="max-w-[150px] md:max-w-none left-[-75px] relative border-darkslate-grey bg-gray-100 p-4 after:content-[' '] after:absolute after:h-[20px] after:w-[20px] after:bg-darkslate-grey after:top-[50%] after:left-full after:translate-y-[-50%] md:after:translate-y-0 md:after:left-[50%] after:translate-x-[-50%] md:after:top-[calc(100%-8px)] after:rounded-full md:left-0">*/}
        {/*  <h4 className="text-xl font-bold">American Express</h4>*/}
        {/*  <div>Frontend Developer</div>*/}
        {/*  <div>2022 - 2025</div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
