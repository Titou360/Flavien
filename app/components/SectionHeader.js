const SectionHeader = ({ title, subtitle, subtitle2 }) => (
  <div className="relative">
    <h2 className="uppercase text-4xl p-6 text-center">{title}</h2>
    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 left-50 -ml-2 m-3 font-Kristi text-5xl text-black/50 capitalize">
      {subtitle}
      <span className="normal-case"> {subtitle2}</span>
    </span>
  </div>
);

export default SectionHeader;
