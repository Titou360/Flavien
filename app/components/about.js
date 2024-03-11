"use client"
import Image from 'next/image';
import NousDeux from '../../public/assets/img/About/deux.jpg';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="About_us" className="relative w-5/6 lg:w-full lg:px-3 my-10 lg:my-4 py-8 border-y-2 border-black">
      <div className="relative">
        <h2 className="uppercase text-4xl p-6 text-center">nous deux</h2>
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 left-50 -ml-12 m-4 font-Kristi text-5xl text-black/60 capitalize place">
          à propos <span className="normal-case">de</span>
        </span>
      </div>
      <div className="w-3/4 md:w-full m-auto flex flex-row lg:flex-col justify-between place-items-center gap-10">
        <Image src={NousDeux} alt="Photo des deux propriétaires" width={300} height={300} className="p-3 lg:mx-20" />
        <div className="flex flex-col lg:mx-4">
          <h4 className='lg:mb-8'>Notre histoire</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ad corrupti impedit ipsam aperiam accusantium ullam repellendus earum
            commodi facere adipisci perferendis nihil voluptatibus deleniti. Ut inventore neque doloremque temporibus doloribus! Rerum cumque minima
            molestias animi numquam aperiam excepturi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
