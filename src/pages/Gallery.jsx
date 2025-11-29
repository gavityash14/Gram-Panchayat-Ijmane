import React, { useState,useContext } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { AppContext } from "../context/AppContext.jsx";

const images = import.meta.glob("/src/assets/gallery_images/*.{png,jpg,jpeg,gif}",{eager:true})
const videos = import.meta.glob("/src/assets/gallery_videos/*.{mp4,mov,mkv,avi}",{eager:true})


export default function Gallery() {
  const { language } = useContext(AppContext);

  // Pagination state
  const [imageVisibleCount, setImageVisibleCount] = useState(6);
  const [videoVisibleCount, setVideoVisibleCount] = useState(2);
  const [imageLoadedCount, setImageLoadedCount] = useState(0);

  // Show next 6 images
  const showMoreImages = () => {
    setImageVisibleCount((prev) => prev + 6);
  };
  // Show next 6 VIDEOS
  const showMoreVideos = () => {
    setVideoVisibleCount((prev) => prev + 6);
  };

  const handleImageLoad = () => {
    setImageLoadedCount((prev) => prev + 1);
  };

  const allImageLoaded = imageLoadedCount === imageVisibleCount;

  return (
    <div>
      <Header />
      <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-10 text-center">📸 {language === "en" ? "Gallery" : "गॅलरी"} 🎥 </h1>

        {/* Photos Section */}
        <section className="w-full max-w-6xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">{language === "en" ? "Photo Gallery" : "फोटो गॅलरी"} </h2>
          {console.log(allImageLoaded,imageLoadedCount,imageVisibleCount)}
          {
          !allImageLoaded && (
            <div className='absolute inset-72 flex flex-col items-center justify-center bg-gray-600 z-10 border-2 border-black rounded-2xl'>
              <div className='w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin'></div>
              <p className='text-white'>Loading Images ...</p>
            </div>
          )
        }
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(images).slice(0, imageVisibleCount).map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={photo.default}
                  alt={`Photo ${index + 1}`}
                  onLoad={handleImageLoad}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {imageVisibleCount < Object.values(images).length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={showMoreImages}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Show More
              </button>
            </div>
          )}
        </section>

        {/* Videos Section */}
        {Object.values(videos).length > 0 && (
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">{language === "en" ? "Video Gallery" : "व्हिडिओ गॅलरी"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.values(videos).slice(0, videoVisibleCount).map((video, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition duration-300"
              >
                <div className="w-full h-64 object-cover">
                <video width="100%"
                  height="315px"
                  src={video.default}
                  title={`Video ${index + 1}`} 
                  muted
                  autoPlay
                  controls
                  loop
                  playsInline
                  
                  ></video>
                </div>
                <h3 className="p-4 text-lg font-medium text-center">{video.title}</h3>
              </div>
            ))}
          </div>
          {/* Show More Button */}
          {videoVisibleCount < Object.values(videos).length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={showMoreVideos}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
              >
                Show More
              </button>
            </div>
          )}
        </section>)}
      </div>  
      <Footer />
    </div>
  );
}
