import './Cover.css'

const Cover = ({img, title, subPara}) => {
  return (
    <div
      className="hero h-[700px]  snap-x"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 text-center items-center snap-center "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-stone-700 h-[450px]  bg-opacity-65 lmenu">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">{subPara}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
