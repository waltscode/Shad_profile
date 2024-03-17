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
  
export default function Contact() {
    useIntersectionObserver('.hiding', {}, (target) => {
        target.classList.add('visible');
      });
    return (
      <div id="contact">
        <h1>Contact Me</h1>
        <p>
          You can reach me at</p>
  </div>
          )};