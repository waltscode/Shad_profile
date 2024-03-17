import React, { useEffect } from 'react';
import '../assets/css/styles.css'

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hiding');
    hiddenElements.forEach(element => {
      observer.observe(element);
    });

    const hiddenElements2 = document.querySelectorAll('.hiding2');
hiddenElements2.forEach(element => {
  observer.observe(element);
});

    // Cleanup function
    return () => {
      hiddenElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div id="about">
    <div className="bkg-container flex-container">
      <div className="hero-left hiding">
        <h1 className='blu hero-text'>Name: John Walters </h1>
      </div>
      <div className="hero-right hiding">
        <img src="/images/blue2.png" alt="profile picture" className=" prof-img blob-effect" />
      </div>
    </div>

    <div className="icons icon-container blue-bkrnd">
      <div className="waves">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className='icons-left'>
        <div class="icon hiding">
          <img src="https://api.dicebear.com/8.x/bottts/png" alt="" />
        </div>
        <div className="icon hiding">
          <img src="https://api.dicebear.com/8.x/bottts/png" alt="" />
        </div>
        <div className="icon hiding">
          <img src="https://api.dicebear.com/8.x/bottts/png" alt="" />
        </div>
        <div className="icon hiding">
          <img src="https://api.dicebear.com/8.x/bottts/png" alt="" />
        </div>
      </div>
      <div className="icons-right hiding">
            <p>testing</p>
      </div>
    </div>

    <div className="icons icon-container orange-bkgrnd">
      <div className="waves-blue">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="icon hiding">
        <img src="https://api.dicebear.com/8.x/bottts/png" alt="" />
      </div>
      <div className="icon hiding">
        <img src="https://api.dicebear.com/8.x/bottts/png" alt="" />
      </div>
      <div className="icon hiding">
        <img src="https://api.dicebear.com/8.x/bottts/png" alt="" />
      </div>
      <div className="icon hiding">
        <img src="https://api.dicebear.com/8.x/bottts/png" alt="" />
      </div>
    </div>
  </div>
);
}