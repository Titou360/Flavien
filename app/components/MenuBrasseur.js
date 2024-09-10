import data from '../../public/data.json';

const brasseurMenuData = data.brasseur;
const menuDetails = brasseurMenuData[0].options;

const MenuBrasseur = () => {
  return (
    <>
      {/* Affichage des options (Entrée + Plat, Plat + Dessert, etc.) */}
      {menuDetails.map((option, i) => (
        <h4 key={i}>
          {option.name} - {option.price}
        </h4>
      ))}

      <div className="w-full">
        {brasseurMenuData.map((detail, index) => (
          <div key={index}>
            {/* Affichage des entrées */}
            <div className="mt-4">
              <h3 className="font-bold underline mx-10">
                Entrées <span>au choix - {detail.starters.price}</span>
              </h3>
              {detail.starters.items.map((starter, i) => (
                <p key={i} className="mx-20">
                  {starter}
                </p>
              ))}
            </div>

            {/* Affichage des plats principaux */}
            <div className="mt-4">
              <h3 className="font-bold underline mx-10">
                Plats principaux <span>au choix - {detail.hotplates.price}</span>
              </h3>
              {detail.hotplates.items.map((hotplate, i) => (
                <p key={i} className="mx-20">
                  {hotplate}
                </p>
              ))}
              <p className="italic text-sm mt-4 text-center underline">Garnitures au choix :</p>
              <p className="italic text-sm mt-4 text-center m-0 px-4"> {detail.hotplates.garniture.description}</p>
            </div>

            {/* Affichage des desserts */}
            <div className="mt-4">
              <h3 className="font-bold underline mx-10">
                Desserts <span>au choix - {detail.desserts.price}</span>
              </h3>
              {detail.desserts.items.map((dessert, i) => (
                <p key={i} className="mx-20">
                  {dessert}
                </p>
              ))}
            </div>
            <p className="mt-10 font-bold italic text-center ">{detail.delivery[0].deliveryText}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuBrasseur;
