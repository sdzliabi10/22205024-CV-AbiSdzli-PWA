import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Certificates from './components/Certificate/Certificates'
import Footer from './components/Footer'
import { requestForToken, onMessageListener } from './firebase';
import ContactForm from './components/Contact/ContactForm'
import Projects from './components/Projects/Projects'


function App() {
  useEffect(() => {
    requestForToken();
    onMessageListener().then((payload) => {
      console.log("Notification received:", payload);
    });
  }, []);

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Certificates/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
