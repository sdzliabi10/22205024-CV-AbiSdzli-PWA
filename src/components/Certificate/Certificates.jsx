import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Certificates = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Array gambar berdasarkan urutan slide
  const images = [
    "/assets/Sertifikat/ukom.png",
    "/assets/Sertifikat/databasefoundations.png",
    "/assets/Sertifikat/javafundamental.png"
  ];

  // Fungsi untuk membuka preview gambar
  const openPreview = () => {
    setCurrentImage(images[activeIndex]);
    setIsPreviewOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Fungsi untuk menutup preview gambar
  const closePreview = () => {
    setIsPreviewOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = "auto"; 
  };

  // Menutup modal saat klik di luar gambar
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closePreview();
    }
  };

  // Penanganan swipper di tampilan mobile dan desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="Certificate" className="py-10 text-center">
      <h2 className="text-2xl font-bold mb-2 text-white">My Certificates</h2>
      <p className="text-gray-500 mb-1">beberapa sertifikat yang telah saya dapatkan</p>

      <p className="text-gray-500 mb-6 md:hidden">
        slide here to see more &gt;&gt;&gt;
      </p>

      <div className="w-full max-w-lg mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={isDesktop} 
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center relative">
              <img src={images[0]} alt="Ukom Certificate" className="w-full max-w-xs rounded-lg mb-4" />
              <p className="text-lg font-semibold mt-2 text-white">Ukom Microsoft Certificate</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center relative">
              <img src={images[1]} alt="Database Foundations Certificate" className="w-full max-w-xs rounded-lg mb-4" />
              <p className="text-lg font-semibold mb-5 text-white">Database Foundations Certificate</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col items-center relative">
              <img src={images[2]} alt="Java Fundamentals Certificate" className="w-full max-w-xs rounded-lg mb-4" />
              <p className="text-lg font-semibold mb-5 text-white">Java Fundamentals Certificate</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <button
        onClick={openPreview}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Preview
      </button>

      {/* Modal preview gambar */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 modal-overlay"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
            <img src={currentImage} alt="Certificate Preview" className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;