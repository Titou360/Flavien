import Image from 'next/image';
import NousDeux from '../../public/assets/img/About/deux.jpg';

const About = () => {
  return (
    <section id="About_us" className="w-5/6 my-10 py-8 border-y-2 border-black">
      <div className="relative">
        <h2 className="uppercase text-4xl p-6 text-center">nous deux</h2>
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 left-50 -ml-12 m-4 font-Kristi text-5xl text-black/60 capitalize place">
          à propos <span className="normal-case">de</span>
        </span>
      </div>
      <div className="w-3/4 m-auto flex flex-row justify-between place-items-center gap-10">
        <Image src={NousDeux} alt="Photo des deux propriétaires" width={400} height={400} className="p-3" />
        <div className="flex flex-col">
          <h4>Notre histoire</h4>
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
