import React from 'react';

export default function AboutMe() {
  return (
    <div className="h-full flex flex-col justify-center items-center pt-5">
      <div className="w-4/5">
        <div className="text-3xl font-semibold text-[#D95C48] text-center">About Me</div>
        <div className="text-lg mt-3 flex flex-col gap-3">
          <span>
            I identify myself as a JavaScript developer with a career marked by involvement in highly scalable projects. I am detail-oriented and strive for pixel-perfect results. Throughout my professional journey, I have predominantly worked with the Angular framework, but I continually enhance my
            skills with other frameworks as well. For instance, this website was built and deployed using Next.js/React.{' '}
          </span>
          <span>
            Currently, I am working as a senior engineer at the age of 25. I graduated from Vefa High School and later pursued a degree in Computer Engineering at Bahçeşehir University, graduating with a 3.0 GPA. Although my native language is Turkish, I am fluent in English, both in understanding
            and speaking. I take pleasure in activities such as sports, watching NBA games and meeting new people. You can explore my professional journey through the timeline below.
          </span>
        </div>
      </div>

      <ol className="items-center sm:flex w-4/5 mt-10">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold">Software Developer</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-300">June 2020 - October 2021</time>
            <span className="block mb-2 text-sm font-medium leading-none text-gray-300">Vendrops Technologies A.Ş.</span>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 h-20">Developing a facility management project's frontend from scratch using Javascript(ES6+), TypeScript, Angular, SCSS, JQuery technologies</p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold">Frontend Developer</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-300">October 2021 - May 2023</time>
            <span className="block mb-2 text-sm font-medium leading-none text-gray-300">Logiwa WMS</span>
            <p className="text-base font-normal text-gray-500 h-20">Developing the front-end part of a highly scalable WMS and fulfillment system with Angular(10+) framework. Creating user friendly UI that are cross-browser compatible and mobile responsive</p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-300">May 2023 - Current</time>
            <span className="block mb-2 text-sm font-medium leading-none text-gray-300">Logiwa WMS</span>
            <p className="text-base font-normal text-gray-500 h-20">Worked on Angular version upgrades and version updates of libraries. Implementing advanced Angular subjects such as routing, RxJs, state management, micro front-end architecture</p>
          </div>
        </li>
      </ol>
    </div>
  );
}
