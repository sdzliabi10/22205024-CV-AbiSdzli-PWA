import PropTypes from 'prop-types';


const ProjectCard = ({ title, main, demoLink = "#", codeLink = "#", imgSrc }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={imgSrc} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 h-full">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex justify-between gap-2 md:gap-4">
        <a 
          href={demoLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </a>
        <a 
          href={codeLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  main: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  codeLink: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
};

export default ProjectCard;