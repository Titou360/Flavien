import { useEffect, useState } from 'react';
import { ChefIcon, DeliveryIcon, SaladeIcon } from './Icons';
import Image from 'next/image';
import MenuEnfant from '../../public/assets/img/Menu/infographie-menu-enfant-cafe-de-la-place-brocas.webp';

const Modal = ({ content, onClose }) => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState('');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showDeliveryIcon, setShowDeliveryIcon] = useState(false);
  const [showPriceIcon, setShowPriceIcon] = useState(false);
  const [showServiceTag, setShowServiceTag] = useState(false);

  useEffect(() => {
    if (content === 'food') {
      setTitle('La carte des Mets');
      fetch('foodData.json')
        .then((response) => response.json())
        .then((data) => setData(data));
      setShowDeliveryIcon(true);
      setShowPriceIcon(true);
      setShowAdditionalInfo(true);
      setShowServiceTag(true);
    } else if (content === 'drinks') {
      setTitle('La carte des Boissons');
      fetch('drinksData.json')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setShowDeliveryIcon(true);
          setShowPriceIcon(true); // Pas besoin de l'icône de prix pour les boissons
          setShowAdditionalInfo(true); // Afficher la légende
          setShowServiceTag(true);
        });
    } else if (content === 'burgers') {
      setTitle('La carte des Burgers');
      fetch('foodData.json')
        .then((response) => response.json())
        .then((data) => {
          const burgersData = data.Burgers;
          const burgerOfTheMoment = data['Le Burger du Moment'];
          setData({ Burgers: burgersData, 'Le Burger du Moment': burgerOfTheMoment });
          setShowDeliveryIcon(true);
          setShowPriceIcon(true);
          setShowAdditionalInfo(true);
          setShowServiceTag(true);
        });
    } else if (content === 'children') {
      setTitle('Notre menu enfant - 10 ans max');
      setData(null);
      setShowDeliveryIcon(false);
      setShowPriceIcon(false);
      setShowAdditionalInfo(false); // Pas de légende pour le menu des enfants
      setShowServiceTag(true);
    }
  }, [content]);

  useEffect(() => {
    const modal = document.getElementById('myModal');
    if (modal) {
      if (content) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [content]);

  useEffect(() => {
    setShowAdditionalInfo(['food', 'burgers', 'drinks'].includes(content));
  }, [content]);

  return (
    <dialog id="myModal" className="h-auto w-11/12 p-5 bg-white rounded-md">
      <div className="flex flex-col w-full h-auto">
        {/* Modal Header */}
        <div className="flex h-auto justify-center items-center">
          <div className="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold font-Quick">{title}</div>
          <div onClick={onClose} className="flex w-1/12 h-auto justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>

        {/* Légende des icônes sauf pour le menu des enfants */}
        {showAdditionalInfo && content !== 'children' && (
          <div className="flex flex-row justify-center items-center gap-8 my-4">
            {content !== 'drinks' && (
              <>
                <div className="flex items-center">
                  <ChefIcon className="fill-green-500" />
                  <span className="ml-2 text-sm font-Quick">Fait maison</span>
                </div>
                <div className="flex items-center">
                  <SaladeIcon className="fill-green-500" />
                  <span className="ml-2 text-sm font-Quick">Végétarien</span>
                </div>
              </>
            )}
            {content === 'drinks' && (
              <div className="flex items-center">
                <DeliveryIcon className="fill-green-500" />
                <span className="ml-2 text-sm font-Quick">À emporter</span>
              </div>
            )}
          </div>
        )}

        {/* Modal Content pour le menu des enfants */}
        {content === 'children' ? (
          <div className="flex justify-center mt-8">
            <Image src={MenuEnfant} alt="Menu enfant" width={600} height={800} className="rounded-md" />
          </div>
        ) : (
          data &&
          Object.entries(data).map(([category, items]) => (
            <div key={category} className="mt-6">
              <h3 className="text-4xl text-center font-Kristi">{category}</h3>

              {/* Si la catégorie est 'Le Burger du Moment', on le rend différemment */}
              {category === 'Le Burger du Moment' ? (
                <div key="Le Burger du moment" className="mt-6">
                  <div className="flex flex-row justify-between mx-32 lg:mx-0 lg:mt-2">
                    <div className="flex flex-col lg:w-3/4 mt-2 lg:mt-0">
                      <div className="flex flex-row gap-6">
                        <h4 className="text-base font-medium font-Quick">{items.name}</h4>
                        <div className="flex flex-row h-6">
                          {items.homemade === 'yes' ? <ChefIcon className="fill-green-500 mr-3 lg:mr-1" /> : null}
                          {items.delivery === 'yes' ? <DeliveryIcon className="fill-green-500 mx-3 lg:mx-1" /> : null}
                        </div>
                      </div>
                      <p className="text-sm font-Quick">{items.description}</p>
                    </div>
                    {showPriceIcon && (
                      <div className="flex flex-col">
                        <p className="text-sm lg:text-xs font-bold font-Quick">{items.price} €</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Sinon on rend les autres items normalement */
                Array.isArray(items) &&
                items.map((item, index) => (
                  <div key={index} className="flex flex-row justify-between mx-32 lg:mx-0 lg:mt-2">
                    <div className="flex flex-col lg:w-3/4 mt-2 lg:mt-0 ">
                      <div className="flex flex-row gap-6">
                        <h4 className="text-base font-medium font-Quick">{item.title}</h4>
                        <div className="flex flex-row h-6">
                          {content === 'drinks' && item.delivery === 'yes' && <DeliveryIcon className="fill-green-500 mx-3 lg:mx-1" />}
                          {content !== 'drinks' && item.homemade === 'yes' && <ChefIcon className="fill-green-500 mr-3 lg:mr-1 " />}
                          {content !== 'drinks' && item.delivery === 'yes' && <DeliveryIcon className="fill-green-500 mx-3 lg:mx-1" />}
                          {content !== 'drinks' && item.vegetarian === 'yes' && <SaladeIcon className="fill-green-500 ml-3 lg:ml-1" />}
                        </div>
                      </div>
                      <p className="text-sm font-Quick">{item.description}</p>
                    </div>
                    {showPriceIcon && (
                      <div className="flex flex-col">
                        <p className="text-sm lg:text-xs font-bold font-Quick">{item.price} €</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          ))
        )}

        {/* Service Tag */}
        {showServiceTag && (
          <div className="flex flex-row justify-center place-items-center mt-14 mb-8 font-Quick font-bold text-sm">
            <p>Prix nets - Service compris - Restaurant non fumeur, interdit aux animaux même tenus en laisse</p>
          </div>
        )}
      </div>
    </dialog>
  );
};

export default Modal;
