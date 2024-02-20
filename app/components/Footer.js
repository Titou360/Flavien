import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-5/6 h-32 bg-gray-700 m-auto rounded-t-lg flex flex-row justify-between px-10 pt-2">
      <div className="text-white text-xs absolute bottom-0 left-1/2 transform -translate-x-1/2">Site développé par Nemo Solutions</div>
      <div className="text-white text-xs">
        <address>
          Café de la Place <br />
          39 Place Robert Bezos <br />
          40420 Brocas <br />
          France <br />
          <br />
        </address>
        <a href="tel:0123456789">01.23.45.67.89</a>
      </div>

      <div className=""></div>

      <div className="text-white text-xs">
        <ul>
          <li>
            <h3 className="underline">Rejoignez-nous</h3>
          </li>
          <li>
            <Link href="#">Facebook</Link>
          </li>
          <li>
            {' '}
            <Link href="#">Instagram</Link>
          </li>
          <li>
            {' '}
            <Link href="#">Linkedin</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
