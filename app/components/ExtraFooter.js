import Link from 'next/link';

const ExtraFooter = () => {
  return (
    <div className="w-5/6 lg:w-full m-auto text-white bg-black text-xs text-center">
      Site développé par{' '}
      <Link href="http://www.nemosolutions.fr" target="_blank">
        <span className="text-lg text-nemo">Nemo Solutions 🐙</span>
      </Link>
    </div>
  );
};

export default ExtraFooter;
