const Copyright = () => {
  // Repeat the actual year
  const currentYear = new Date().getFullYear();

  return (
      <p className="text-white text-center mb-2">&copy; {currentYear} Le Café de la Place. Tous droits réservés.</p>
  );
};

export default Copyright;
