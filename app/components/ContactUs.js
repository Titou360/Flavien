"use client"
import Image from 'next/image';
import Link from 'next/link';
import Vegetables from '../../public/assets/img/Contact/legumes.jpg';
import { CheckCaseIcon } from './Icons';
import BookTable from './BookTable';
const ContactUs = () => {
  return (
    <section id="Contact_us" className="relative w-3/4 h-52 m-auto mb-32">
      <div className="w-3/4 h-32 inset-0 m-auto">
        <Image
          src={Vegetables}
          alt="Photo de légumes au retour du marché"
          width={1024}
          height={80}
          className="absolute inset-0 w-full h-full object-left object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-60"></div>

      <div className="w-full flex flex-row absolute items-center justify-evenly gap-4 inset-0 p-12">
        <CheckCaseIcon className="w-20 fill-white" />

        <div className='flex flex-col gap-6'>
          <div className="text-white uppercase flex flex-row">
            <h4 className="inline font-Quick text-4xl font-thin">Contactez-nous !</h4>
            <Link href="tel:0033621145888" className="underline decoration-1 underline-offset-2 ml-4 ont-Quick text-4xl font-bold">
              05.58.58.58.58
            </Link>
          </div>
          <div className="text-white font-Quick text-2xl">Ou utlisez le formulaire ci-dessous </div>
        </div>

        <BookTable />
      </div>
    </section>
  );
};

export default ContactUs;
