"use client"
import Image from 'next/image';
import Link from 'next/link';
import BookNowPic from '../../public/assets/img/Book/table.jpg';
import BookTable from './BookTable';

const BookNow = () => {
  return (
    <section id="Booknow" className="w-full h-96 relative mb-32">
      <Image src={BookNowPic} alt="Photo d'une table dressée" width={1440} height={120} className="absolute w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-70"></div>

      <div className="w-full absolute inset-0 flex justify-center place-items-center flex-row gap-8">
        <div className='flex flex-col'>
          <span className="text-white capitalize font-Kristi text-8xl ">Réservez !</span>
          <h4 className=" text-white flex justify-center place-items-center uppercase font-Quick text-4xl">une table</h4>
        </div>

        <BookTable />
      </div>
    </section>
  );
};

export default BookNow;
