const SectionHeader = ({ title, subtitle, subtitle2 }) => (
  <div className="relative">
    <h2 className="uppercase text-4xl lg:text-xl p-6 lg:p-4 text-center">{title}</h2>
    <span className="absolute -top-6 left-0 right-0 text-center m-3 lg:-m-3 font-Kristi text-5xl lg:text-4xl text-black/50 capitalize">
      {subtitle} <span className="normal-case">{subtitle2}</span>
    </span>
  </div>
);

export default SectionHeader;
