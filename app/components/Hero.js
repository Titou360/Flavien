import React from 'react'
import HeroPicture from "../../public/assets/img/hero.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="hero" className="w-full border rounded-lg mt-4">
      <Image src={HeroPicture} className="" alt="Photo de la devanture du restaurant" />
    </section>
  );
}

export default Hero
