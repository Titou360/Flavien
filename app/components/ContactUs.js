"use client"
import Image from 'next/image';
import Link from 'next/link';
import Vegetables from '../../public/assets/img/Contact/legumes.jpg';
import { CheckCaseIcon } from './Icons';
import BookTable from './BookTable';
const ContactUs = () => {
  return (
    <section id="contact" className="lg:h-full w-full lg:w-full h-52 m-auto my-10 relative">
      <div className="w-full h-32 inset-0 m-auto">
        <Image
          src={Vegetables}
          alt="Photo de légumes au retour du marché"
          width={1024}
          height={80}
          className="absolute inset-0 w-full h-full object-left object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/70 dark:bg-black/60"></div>

      <div className="lg:hidden w-full flex flex-row lg:flex-col absolute items-center justify-evenly gap-4 inset-0 p-12">
        <div className="w-32">
          <CheckCaseIcon className="w-32 lg:w-6 fill-white" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-white uppercase flex flex-row lg:flex-col">
            <h2 className="inline font-Quick text-4xl lg:text-xl font-thin">Contactez-nous !</h2>
            <Link href="tel:0033547871549" className="underline decoration-1 underline-offset-2 ml-4 font-Quick text-4xl lg:text-xl font-bold">
              05.47.87.15.49
            </Link>
          </div>
          <div className="text-white font-Quick text-2xl lg:text-lg">Ou utlisez le formulaire ci-dessous </div>
        </div>

        <BookTable />
      </div>

      <div className="hidden lg:block w-full flex-row lg:flex-col absolute items-center justify-evenly inset-0 gap-2">
        <div className="flex flex-col gap-6">
          <div className="text-white uppercase flex flex-row lg:flex-col place-items-center">
            <h2 className="font-Quick text-4xl lg:text-xl font-thin">Contactez-nous !</h2>
            <Link href="tel:0033547871549" className="underline decoration-1 underline-offset-2 ml-4 ont-Quick text-4xl lg:text-xl font-bold">
              05.47.87.15.49
            </Link>
          </div>
          <div className="text-white text-center font-bold font-Quick text-lg">Ou utlisez le formulaire ci-dessous </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
