import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap'



export function TextSecurity() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [cycleComplete, setCycleComplete] = useState(false);
    const words = ['Observed.', 'Defended.', 'Secured.'];
    const wordRef = useRef(null);
  
    const changeWord = (nextIndex) => {
      gsap.to(wordRef.current, {
        duration: 0.5,
        y: -20,
        opacity: 0,
        onComplete: () => {
          setCurrentWordIndex(nextIndex);
          gsap.set(wordRef.current, { textContent: words[nextIndex] });
          gsap.set(wordRef.current, { y: 20 });
          gsap.to(wordRef.current, { duration: 0.5, y: 0, opacity: 1 });
        },
      });
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        const nextIndex = (currentWordIndex + 1) % words.length;
        if (nextIndex === 0) {
          setTimeout(() => changeWord(nextIndex), 60000); 
        } else {
          changeWord(nextIndex); 
        }
      }, 3000); // Initial timeout
      return () => clearTimeout(timer); 
    }, [currentWordIndex, words]);
  
    return (
      <div className="container-txt ">
        <div className="text-container txt">
          <h1>Connected, our world is </h1>
        </div>
        <div className="word-container">
          <h1>
            <span className={`word ${currentWordIndex === 0 ? 'first-word' : (currentWordIndex === 1 ? 'second-word' : (currentWordIndex === 2 ? 'third-word' : ''))}`} ref={wordRef}>
              {words[currentWordIndex]}
            </span>
          </h1>
        </div>
      </div>
    );
  };