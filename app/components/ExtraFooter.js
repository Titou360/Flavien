import Link from 'next/link';
import Copyright from './tools/Copyrights';

const ExtraFooter = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-row justify-around py-4">
      <div>
        <Copyright />
      </div>
      <nav className="flex flex-row lg:flex-col justify-evenly items-center gap-6 text-white uppercase">
        <Link
          href="#"
          className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cafeGold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          À Propos
        </Link>

        <Link
          href="#"
          className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cafeGold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Remerciements
        </Link>
        <Link
          href="#"
          className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cafeGold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Conditions générales
        </Link>
        <Link
          href="#"
          className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cafeGold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
        >
          Partenaires
        </Link>
      </nav>
      <div className="text-white dark:text-black  text-xs text-center">
        Web Design :
        <Link href="http://www.nemosolutions.fr" target="_blank">
          <span className="text-lg text-nemo"> Nemo Solutions 🐙</span>
        </Link>
      </div>
    </div>
  );
};

export default ExtraFooter;
