// this is the components for the "About" section
"use client"
import Image from 'next/image';
import NousDeux from '../../public/assets/img/About/deux.jpg';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionHeader from "../components/SectionHeader"

const About = () => {
  const { t } = useTranslation();

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
    <section id="About_us" className="relative w-5/6 lg:w-full lg:px-3 my-10 lg:my-4 py-8 border-y-2 border-black">
      <SectionHeader subtitle="à propos" subtitle2=" de" title="nous deux" />
      <motion.div
        className="w-3/4 md:w-full m-auto flex flex-row lg:flex-col justify-between place-items-center gap-10"
        ref={elementRef}
        style={{ opacity: 0 }} // Initially invisible
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <Image src={NousDeux} alt="Photo des deux propriétaires" width={300} height={300} className="p-3 lg:mx-20" />
        <div className="flex flex-col lg:mx-4">
          <h3 className="lg:mb-8">Notre histoire</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ad corrupti impedit ipsam aperiam accusantium ullam repellendus earum
            commodi facere adipisci perferendis nihil voluptatibus deleniti. Ut inventore neque doloremque temporibus doloribus! Rerum cumque minima
            molestias animi numquam aperiam excepturi.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
