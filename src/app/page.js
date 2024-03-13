'use client'

import { useState, useEffect, useRef } from "react";

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Home() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true)

  const container = useRef()

  const tl = useRef()

  useGSAP(() => {
      tl.current = gsap.timeline({paused: false})
          .to(".counter", 0.25, {
              delay: 4.0,
              opacity: 0,
          })
          .to(".bar", 1.5, {
              delay: 0.1,
              height: 0,
              stagger: {
                amount: 0.5
              },
              ease: "power4.inOut"
          })
  }, {scope: container})

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(prevCount => prevCount + 2);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 7000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="page-content hero" ref={container}>

      {isVisible && (
        <>
          <h1 className="counter">{count}%</h1>

          <div className="overlay">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </>
      )}
      <h1>
        INNOVA <sup>(01)</sup>
      </h1>
    </div>
  );
}
