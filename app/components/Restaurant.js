'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ActionCook from '../../public/assets/img/Restaurant/cuisinier.jpg';

const Restaurant = () => {
  const controls = useAnimation();
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.5 });
    }
  }, [isVisible, controls]);

  return (
    <section id="Restaurant" className="relative">
      <div className="w-5/6 mx-auto my-10 flex flex-row justify-between gap-6 relative">
        <div className="w-2/3 lg:w-full relative mt-32 lg:mt-0 ml-10 lg:ml-0 lg:mx-auto">
          <div id="Title_restaurant">
            <h2 className="uppercase text-4xl p-6">RESTAURANT</h2>
            <span className="absolute -top-6 left-0 m-4 font-Kristi text-5xl text-black/60 capitalize">
              à propos <span className="normal-case">du</span>
            </span>
          </div>

          <div className="flex flex-row h-full lg:flex-col lg:gap-10">
            <p className="w-1/2 lg:w-full text-black/60 p-4 lg:p-0 text-balance md:text-center">
              Cuisine de terroir, authentique et conviviale. Nous faisons confiance à la puissance locale au travers de ses producteurs et de leur
              savoir-faire
            </p>
            <p className="w-1/2 lg:w-full text-black/60 p-4 lg:p-0 text-balance md:text-center">
              Une cuisine gourmande, des assiettes joliment dressées pour le plaisirs des papilles de toutes et tous.{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-end gap-4 absolute inset-0 bottom-7 lg:-bottom-2 z-10 mx-4 lg:hidden">
          <motion.div
            className="bg-red-400 w-1/6 h-1/3"
            ref={elementRef}
            style={{ opacity: 0 }} // Initially invisible
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            BOX1
          </motion.div>

          <motion.div
            className="bg-green-400 w-1/6 h-1/3"
            ref={elementRef}
            style={{ opacity: 0 }} // Initially invisible
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            BOX2
          </motion.div>
          <motion.div
            className="bg-blue-400 w-1/6 h-1/3"
            ref={elementRef}
            style={{ opacity: 0 }} // Initially invisible
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            BOX3
          </motion.div>
          <motion.div
            className="bg-yellow-400 w-1/6 h-1/3"
            ref={elementRef}
            style={{ opacity: 0 }} // Initially invisible
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            BOX4
          </motion.div>
        </div>
        <div id="cook" className="w-1/3 h-full relative md:hidden">
          <Image src={ActionCook} alt="Photo d'un cuisinier au travail" className="object-cover" />
          {/* Next line making a gradient over the pic */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
