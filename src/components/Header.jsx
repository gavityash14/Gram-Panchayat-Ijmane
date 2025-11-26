import React, { useContext } from 'react';
import {
  emblem_of_india,
  maharashtra_shashan,
  panchayat_vikas_logo
} from "../assets/assets.js";
import Navbar from './Navbar.jsx';
import { AppContext } from '../context/AppContext.jsx';
import SearchBar from './SearchBar.jsx';

export default function Header() {
  const { language, toggleLanguage } = useContext(AppContext);

  return (
    <div className="flex-row">
      {/* Top bar */}
      {/* <div className="flex justify-between bg-[#03045e] py-[15px] px-10">
        <h3 className="text-white text-[18px]">{language === "en" ? "Government of Maharashtra" : "महाराष्ट्र शासन"} </h3>
        <button
          onClick={toggleLanguage}
          className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          {language === "en" ? "Translate to Marathi" : "Translate to English"}
        </button>
      </div> */}

      {/* Middle section */}
      {/* <div className="flex justify-between w-full px-10 py-[16px]">
        <div className="flex items-center">
          <img
            src={emblem_of_india}
            alt="emblem_of_india"
            className="h-[50px] w-[32px]"
          />
          <h1 className="px-3 text-[20px]">
            {language === "en" ? "Rural Development & Panchayat Raj Department" : "ग्रामविकास आणि पंचायत राज विभाग"} 
          </h1>
        </div>
        <img
          src={maharashtra_shashan}
          alt="maharashtra_shashan"
          className="h-[60px] w-[60px]"
        />
      </div> */}
      <div className="flex justify-between w-full px-4 md:px-10 py-[16px]">
        <div className="flex items-center">
          <img
            src={emblem_of_india}
            alt="emblem_of_india"
            className="h-[80px] w-[60px]"
          />
          <div>
            <a href="https://share.google/l6x5tqw40ZucixTVe">
              <h1 className=" hidden md:flex px-3 text-[12px] md:text-[20px] font-bold text-[#03045e]">
                {language === "en" ? "Rural Development & Panchayat Raj Department" : "ग्रामविकास आणि पंचायत राज विभाग"} 
              </h1>
            </a>
            <a href="https://share.google/l6x5tqw40ZucixTVe">
              <h1 className="flex md:hidden px-3 text-[12px] md:text-[20px] font-bold">
                {language === "en" ? "Rural Development & " : "ग्रामविकास आणि"} 
              </h1>
              <h1 className="flex md:hidden px-3 text-[12px] md:text-[20px] font-bold">
                {language === "en" ? "Panchayat Raj Department" : "पंचायत राज विभाग"} 
              </h1>
            </a>
          </div>
        </div>
        <div className=' hidden md:flex'>
          <SearchBar />
        </div>
        <div className='flex gap-1 md:gap-4'>
          <button
          onClick={toggleLanguage}
          className="bg-[#ebebeb] px-1 py-1 md:px-4 md:py-2 rounded-md hover:bg-blue-700 transition min-w-20 max-w-44 max-h-10 self-center text-[10px]"
        >
          {language === "en" ? "Translate to Marathi" : "Translate to English"}
        </button>
        <a href="https://maharashtra.gov.in/">
          <img
            src={maharashtra_shashan}
            alt="maharashtra_shashan"
            className="h-[80px] w-[80px]"
          />
        </a>

        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Bottom welcome section */}
      <div className="flex w-full px-4 md:px-10 justify-center items-center py-4">
        <img
          src={panchayat_vikas_logo}
          alt="panchayat_vikas_logo"
          className="h-[150px] w-[150px]"
        />
        <div className="flex-row">
          <h1 className="text-[#03045e] font-bold text-[18px] md:text-3xl px-8">
            Welcome To Ijmane Gram Panchayat
          </h1>
          <h1 className="text-red-500 text-[16px] md:text-2xl px-8 font-bold">
            इजमाने ग्रामपंचायतमध्ये आपले स्वागत आहे
          </h1>
        </div>
      </div>
    </div>
  );
}
