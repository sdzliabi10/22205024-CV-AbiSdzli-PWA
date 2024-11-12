import { FaTiktok, FaLinkedin, FaWhatsapp, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer  id="footer" className="py-4 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white text-sm text-center md:text-left">
          All rights reserved. Copyright &copy; 2024 Abi Sadzili.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://wa.me/+6287716236368?text=Halo,%20ada%20yang%20bisa%20saya%20bantu?" target='_blank' rel='noopener noreferrer' className="text-white hover:text-green-500">
            <FaWhatsapp size={20} />
          </a>
          <a href="mailto:sofiullahabi@gmail.com" target='_blank' rel='noopener noreferrer' className="text-white hover:text-yellow-500">
            <FaEnvelope size={20} />
          </a>
          <a href="https://id.linkedin.com/in/sofiullah-abi-sadzili-185622336" target='_blank' rel='noopener noreferrer' className="text-white hover:text-blue-500">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.tiktok.com/@siisasdzli" target='_blank' rel='noopener noreferrer' className="text-white hover:text-gray-900">
            <FaTiktok size={20} /> 
          </a>
          <a href="https://www.instagram.com/sdzli__/" target='_blank' rel='noopener noreferrer' className="text-white hover:text-red-600">
            <FaInstagram size={20} />
          </a>
          <a href="https://github.com/sdzliabi10" target='_blank' rel='noopener noreferrer' className="text-white hover:text-gray-900">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;