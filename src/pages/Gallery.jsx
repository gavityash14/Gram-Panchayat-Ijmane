import React, { useState,useContext } from "react";
import {gallery_img_1,
    gallery_img_2,
    gallery_img_3,
    gallery_img_4,
    gallery_img_5,
    gallery_img_6,
    gallery_img_7,
    gallery_img_8,
    gallery_img_9,
    gallery_img_10,
    gallery_img_11,
    gallery_img_12,
    gallery_img_13,
    gallery_img_14,
    gallery_img_15,
    gallery_img_16,
    gallery_img_25,
    gallery_img_26,
    gallery_video_1,
    gallery_video_2,
    gallery_video_3,
    gallery_video_4,
    gallery_video_5,
    gallery_video_6,
    gallery_video_7,
    gallery_video_8,
    gallery_video_9,
    gallery_video_10
 } from "../assets/assets.js"
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { AppContext } from "../context/AppContext.jsx";


export default function Gallery() {
  const { language } = useContext(AppContext);
  const photos = [
      gallery_img_1,
      gallery_img_2,
      gallery_img_3,
      gallery_img_4,
      gallery_img_5,
      gallery_img_6,
      gallery_img_7,
      gallery_img_8,
      gallery_img_9,
      gallery_img_10,
      gallery_img_11,
      gallery_img_12,
      gallery_img_13,
      gallery_img_14,
      gallery_img_15,
      gallery_img_16,
      gallery_img_25,
      gallery_img_26
   
    ];

  const videos = [
    {
      src: gallery_video_1,
      title: "Video 1",
    },
    {
      src: gallery_video_2,
      title: "Video 2",
    },
    {
      src: gallery_video_3,
      title: "Video 3",
    },
    {
      src: gallery_video_4,
      title: "Video 4",
    },
    {
      src: gallery_video_5,
      title: "Video 5",
    },
    {
      src: gallery_video_6,
      title: "Video 6",
    },
    {
      src: gallery_video_7,
      title: "Video 7",
    },
    {
      src: gallery_video_7,
      title: "Video 7",
    },
    {
      src: gallery_video_8,
      title: "Video 8",
    },
    {
      src: gallery_video_9,
      title: "Video 9",
    },
    {
      src: gallery_video_10,
      title: "Video 10",
    },
    
  ];

  // Pagination state
  const [imageVisibleCount, setImageVisibleCount] = useState(6);
  const [videoVisibleCount, setVideoVisibleCount] = useState(2);

  // Show next 6 images
  const showMoreImages = () => {
    setImageVisibleCount((prev) => prev + 6);
  };
  // Show next 6 VIDEOS
  const showMoreVideos = () => {
    setVideoVisibleCount((prev) => prev + 6);
  };

  return (
    <div>
      <Header />
      <div className="bg-black text-white min-h-screen flex flex-col items-center px-6 py-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-10 text-center">📸 {language === "en" ? "Gallery" : "गॅलरी"} </h1>

        {/* Photos Section */}
        <section className="w-full max-w-6xl mb-16">
          <h2 className="text-2xl font-semibold mb-6">{language === "en" ? "Photo Gallery" : "फोटो गॅलरी"} </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.slice(0, imageVisibleCount).map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {imageVisibleCount < photos.length && (
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
      </div>  
      <Footer />
    </div>
  );
}
