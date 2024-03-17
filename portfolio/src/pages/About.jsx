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


export default function About() {
  useIntersectionObserver('.hiding', {}, (target) => {
    target.classList.add('visible');
  });
  return (
   
    <div id="about" className="hiding" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div>
      <h1 className='egg'>Full-Stack Web Developer</h1>
    </div>
    <div>
      <img src="/images/blue.png" alt="party pic" className="hiding prof-img blob-effect" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}></img>
    </div>
  </div>
  
 
  
);
}
