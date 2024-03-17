import React, { useEffect } from 'react';
import '../assets/css/styles.css'

function useIntersectionObserver(selector, options, callback) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector, options, callback]);
}

export default function Portfolio() {
  useIntersectionObserver('.hiding-portfolios', {}, (target) => {
    target.classList.add('visible');
  });
    const projects = [
      {
        name: 'name of project',
        description: 'A website that offers fitness training services.',
        link: ''
      },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        {
            name: 'name of project',
            description: 'A website that offers fitness training services.',
            link: ''
        },
        
    ];

    return (
        <div id="portfolio" className="py-8 px-4 ">
          <h1 className='text-3xl font-bold text-center mb-4'>Portfolio</h1>
          <p className='text-lg text-center mb-8'>
            Check out some of my projects.
          </p>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 hiding-portfolios">
            {projects.map((project, index) => (
              <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden" key={index}>
                <div className="px-6 py-4">
                  <h5 className="text-xl font-semibold mb-2">{project.name}</h5>
                  <p className="text-gray-700">{project.description}</p>
                </div>
                <div className="px-6 py-4">
                  <a href={project.link} className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
 }