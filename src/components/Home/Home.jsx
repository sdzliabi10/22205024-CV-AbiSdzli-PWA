import Type from './Typewritter'

const Home = () => {
  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <div id='Home' className="text-white flex w-full justify-between items-start p-10 md:p-20">
          <div className="md:w-2/4 md:pt-10 mt-8 ">
            <h1 className="text-sm md:text-3xl font-bold flex leading-normal tracking-tighter">Hello I&apos;M,</h1>
            <h2 className='text-xl md:text-5xl mt-3 font-bold'>Sofiullah Abi Sadzili</h2>
                <div className="text-xl md:text-2xl tracking-tight mt-6 ">
                  <Type/>
                </div>
                <button onClick={scrollToFooter} className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
        </div>
        <div></div>
    </div>
  )
}

export default Home