import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>Projects</h1>
      <h2 className='text-lg text-center font-semibold mt-3 text-gray-600'>Beberapa Project sederhana yang saya buat</h2>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Wedding Website"
          main="Undangan Pernikahan yang dibangun menggunakan HTML, CSS, dan JavaScript. Memiliki fitur untuk menampilkan informasi pernikahan secara dinamis dengan URL state, sehingga pengguna dapat mengganti nama penerima undangan sesuai kebutuhan. Terdapat berbagai elemen interaktif seperti galeri foto, hitung mundur acara, dan audio pernikahan, yang dirancang untuk memberikan pengalaman undangan yang personal dan menarik."
          demoLink="https://sdzliabi10.github.io/weeding/"
          codeLink="https://github.com/sdzliabi10/weeding"
          imgSrc="/assets/weeding.png"
        />

        <ProjectCard
          title="Tiktok Downloader"
          main="Tiktok Downloader di bangun dengan bahasa pemograman React JS + Vite, webiste ini mengambil dari API yang memiliki kekurangan tidak bisa mendownload video slides gambar."
          demoLink="https://tiktokdownloader-beta.vercel.app"
          codeLink="https://github.com/sdzliabi10/TiktokDownloader"
          imgSrc="/assets/tiktok.png"
        />
        
      </div>
    </div>
  );
};

export default Projects;