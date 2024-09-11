'use client';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Aperitif from '../../public/assets/img/Restaurant/aperitif.jpg';
import Burger from '../../public/assets/img/Restaurant/burger.webp';
import ActionCook from '../../public/assets/img/Restaurant/cuisinier.jpg';
import Glace from '../../public/assets/img/Restaurant/glace.jpg';
import Salade from '../../public/assets/img/Restaurant/salade.jpg';
import SectionHeader from './SectionHeader';

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
      <div className="w-5/6 mx-auto my-20 flex flex-row justify-between gap-6 relative">
        <div className="w-2/3 lg:w-full relative mt-32 lg:mt-0 ml-10 lg:ml-0 lg:mx-auto">
          <SectionHeader subtitle="à propos" subtitle2=" du" title="restaurant" />

          <div className="flex flex-row h-full lg:flex-col lg:gap-10">
            <p className="w-1/2 lg:w-full text-black/60 dark:text-white p-4 lg:p-0 text-balance md:text-center">
              Cuisine de terroir, authentique et conviviale. Nous faisons confiance à la puissance locale au travers de ses producteurs et de leur
              savoir-faire.
            </p>
            <p className="w-1/2 lg:w-full text-black/60 dark:text-white p-4 lg:p-0 text-balance md:text-center">
              Une cuisine gourmande, des assiettes joliment dressées pour le plaisir des papilles de toutes et tous.
            </p>
          </div>
        </div>

        {/* Images with motion.div */}
        <div className="flex flex-row justify-start items-end gap-4 absolute inset-0 bottom-7 lg:-bottom-2 z-10 mx-4 lg:hidden">
          <motion.div
            className="w-1/6 h-1/3 relative" // `relative` to contain the Image component
            ref={elementRef}
            style={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <Image src={Aperitif} alt="Aperitif" className="object-cover w-full h-full" />
          </motion.div>

          <motion.div className="w-1/6 h-1/3 relative" ref={elementRef} style={{ opacity: 0 }} animate={controls} transition={{ duration: 0.5 }}>
            <Image src={Salade} alt="Salade" fill style={{ objectFit: 'cover' }} />
          </motion.div>

          <motion.div className="w-1/6 h-1/3 relative" ref={elementRef} style={{ opacity: 0 }} animate={controls} transition={{ duration: 0.5 }}>
            <Image src={Burger} alt="Burger" fill style={{ objectFit: 'cover' }} />
          </motion.div>

          <motion.div className="w-1/6 h-1/3 relative" ref={elementRef} style={{ opacity: 0 }} animate={controls} transition={{ duration: 0.5 }}>
            <Image src={Glace} alt="Glace" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>

        {/* Cook image */}
        <div id="cook" className="w-1/3 h-full relative md:hidden">
          <Image src={ActionCook} alt="Photo d'un cuisinier au travail" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
