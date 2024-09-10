// this is the components for the "About" section
'use client';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import NousDeux from '../../public/assets/img/About/flo_et_flav.webp';
import SectionHeader from '../components/SectionHeader';

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
    <section id="About_us" className="relative w-5/6 lg:w-full lg:px-3 lg:my-4 py-20 border-y-2 border-black dark:border-white">
      <SectionHeader subtitle="à propos" subtitle2=" de" title="nous deux" />
      <motion.div
        className="w-3/4 md:w-full m-auto flex flex-row lg:flex-col justify-between place-items-center gap-10"
        ref={elementRef}
        style={{ opacity: 0 }} // Initially invisible
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={NousDeux}
          alt="Photo des deux propriétaires"
          width={300}
          height={300}
          className="p-3 lg:mx-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        />
        <div className="flex flex-col lg:mx-4">
          <p className="dark:text-white text-sm font-Quick">
            Le Café de la Place a enfin retrouvé son éclat grâce à notre passion et notre engagement.
            <br />
            C&apos;est avec joie que nous avons réouvert les portes de ce lieu emblématique.
            <br />
            Avec notre expérience combinée, Florianne dans l&apos;accueil touristique et Flavien, fort de douze ans passés derrière les fourneaux à
            Bordeaux et d&apos;un double CAP en cuisine et pâtisserie, nous avons relevé le défi de redonner vie à ce Café de la Place à Brocas, en
            mettant l&apos;accent sur son activité restaurant.
            <br />
            Fier de la spécialité dans la cuisson des viandes à la plancha, Flavien a rapidement pris ses marques en favorisant des approvisionnements
            locaux, que ce soit pour notre carte régulière ou notre menu du jour, toujours fait maison et proposé à un prix accessible.
            <br />
            Nous tenons à souligner que chaque plat peut être dégusté sur place ou emporté pour une expérience gustative où vous le souhaitez. <br />
            Au plaisir de vous accueilir.
            <br />
            <span className="float-right italic">Florianne et Flavien</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
