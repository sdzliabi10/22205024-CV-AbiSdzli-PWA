import Tilt from 'react-parallax-tilt';
import { FaHtml5, FaCss3, FaJs, FaReact, FaLaravel } from "react-icons/fa";

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center
    bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 mt-36'>
        <div className='w-full text-center'>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        </div>
        <div className='flex flex-col md:flex-row items-center mt-7'>
            <Tilt glareEnable={true} glareMaxOpacity={0.8} scale={1.1}>
            <img className='h-40 w-40 md:h-80 md:w-80 rounded-full mt-7 md:mt-0 md:mr-6' src="/assets/img.png" alt="about" />
            </Tilt>

            <ul className='md:ml-6 text-center md:text-left'>
                <div className='flex gap-3 py-4'>
                    <span className='w-full md:w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>
                        Hi Everyone, I&apos;M Sofiullah Abi Sadzili
                        </h1>
                        <p className='text-medium md:text-md leading-tight'>
                            Saya berasal dari Desa Limbangan Kulon, Brebes, dan saya seorang mahasiswa aktif di STMIK YMI Tegal.
                            Saya ingin menjadi web developer yang berfokus di Frontend developer,sekarang saya sedikit bisa 
                            HTML,CSS,Javascript dan sekarang lagi belajar React.js untuk Frontendnya,
                            Saya juga memiliki Hobi Sepak Bola.
                        </p>
                    </span>
                </div>
            </ul>
        </div>

        <div className="p-10 md:p-24">
          <h1 className="text-2xl md:text-4xl text-white font-bold text-center">My skills</h1>
          <p className="text-white text-center mt-8 text-md md:text-lg">
            Berikut beberapa skills saya: HTML, CSS, JavaScript, React.js, dan Laravel. 
            Sedangkan untuk React.js dan Laravel, saya masih belajar dan ingin mendalami framework tersebut.
          </p>
          <div className="flex justify-center mt-10">
            <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="icon-container">
                <FaHtml5 color="#E34F26" size={50} />
              </div>
              <div className="icon-container">
                <FaCss3 color="#1572B6" size={50} />
              </div>
              <div className="icon-container">
                <FaJs color="#F7DF1E" size={50} />
              </div>
              <div className="icon-container">
                <FaReact color="#61DAFB" size={50} />
              </div>
              <div className="icon-container">
                <FaLaravel color="#FF2D20" size={50} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About