import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import SearchBar from "./SearchBar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [governmentSchemesOpen, setGovernmentSchemesOpen] = useState(false);
  const { language } = useContext(AppContext);

  return (
    <nav className="bg-[#03045e]  px-6 py-3 shadow-md text-white">
      <div className="container mx-auto flex justify-center items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <Link to="/" className="hover:text-gray-300 transition">{language === "en" ? "Home" : "मुख्यपृष्ठ"} </Link>

          {/* Dropdown About Us */}
          <div
            className="relative group"
            onClick={() => setAboutUsOpen(!aboutUsOpen)}
          >
            <button className="hover:text-gray-300 flex items-center gap-1">
              {language === "en" ? "About Us " : "आमच्याबद्दल "}
              <span>{aboutUsOpen ? "▴" : "▾"}</span> 
            </button>

            {/* Dropdown Menu */}
            {aboutUsOpen && (
              <div className="absolute bg-gray-400 mt-2 rounded-md shadow-lg p-2 space-y-1 w-48 z-10">
                <Link
                  to="/about-us/about-gram-panchayat"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "About Gram Panchayat" : "ग्रामपंचायतीबद्दल"} 
                </Link>
                <Link
                  to="/about-us/historical-significance"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Historical Significance" : "ऐतिहासिक महत्त्व"}     
                </Link>
                <Link
                  to="/about-us/taluka-background"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Taluka Background" : "तालुका पार्श्वभूमी"}     
                </Link>
                <Link
                  to="/about-us/mythological-significance"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Mythological Significance" : "पौराणिक महत्त्व"}  
                </Link>
                <Link
                  to="/about-us/other"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Others" : "इतर"} 
                </Link>
              </div>
            )}
          </div>
          {/* Dropdown Government Scheme Information */}
          <div
            className="relative group"
            onClick={() => setGovernmentSchemesOpen(!governmentSchemesOpen)}
          >
            <button className="hover:text-gray-300 flex items-center gap-1">
              {language === "en" ? "Government Scheme Information " : "शासकीय योजनांची माहिती "} 
              <span>{governmentSchemesOpen ? "▴" : "▾"}</span> 
            </button>

            {/* Dropdown Menu */}
            {governmentSchemesOpen && (
              <div className="absolute bg-gray-400 mt-2 rounded-md shadow-lg p-2 space-y-1 w-48 z-10">
                <Link
                  to="/government-scheme-information/pesa"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "PESA" : "पेसा"}
                </Link>
                <Link
                  to="/government-scheme-information/pradhan-mantri-awas-yojana"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Pradhan Mantri Awas Yojana" : "प्रधान मंत्री आवास योजना"} 
                </Link>
                <Link
                  to="/government-scheme-information/shabari-awas-yojana"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Shabari Awas Yojana" : "शबरी आवास योजना"} 
                </Link>
                <Link
                  to="/government-scheme-information/department-of-cultural-affairs"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Department Of Cultural Affairs" : "सांस्कृतिक कार्य विभाग"} 
                </Link>
                <Link
                  to="/government-scheme-information/skill-development-entrepreneurship-department"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Skill Development and Entrepreneurship Department" : "कौशल्य विकास व उद्योजकता विभाग"} 
                </Link>
                <Link
                  to="/government-scheme-information/tribal-development-department"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Tribal Development Department" : "आदिवासी विकास विभाग"} 
                </Link>
                <Link
                  to="/government-scheme-information/women-and-child-development-department"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Women and Child Development Department" : "महिला बाल विकास विभाग"} 
                </Link>
                <Link
                  to="/government-scheme-information/employment-guarantee-scheme-mgnarega"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Employment Guarantee Scheme MGNAREGA" : "रोजगार हमी योजना MGNAREGA"} 
                </Link>
                <Link
                  to="/government-scheme-information/other"
                  className="block px-3 py-1 hover:bg-gray-600 rounded"
                >
                  {language === "en" ? "Others" : "इतर"} 
                </Link>
                
              </div>
            )}
          </div>

          <Link to="/for-citizens" className="hover:text-gray-300 transition">{language === "en" ? "For Citizens" : "नागरिकांसाठी"} </Link>
          <Link to="/contactus" className="hover:text-gray-300 transition">{language === "en" ? "Contact Us" : "आमच्याशी संपर्क साधा"} </Link>
          <Link to="/complaints" className="hover:text-gray-300 transition">{language === "en" ? "Complaints" : "तक्रारी"} </Link>
          <Link to="/gallery" className="hover:text-gray-300 transition">{language === "en" ? "Gallery" : "फोटो गॅलरी"} </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gray-700 mt-2 p-3 space-y-2 rounded-md">
          <div className="relative md:mt-0 md:ml-4 w-full md:w-64" >
            <SearchBar />
          </div>
          <Link to="/" className="hover:bg-gray-600 px-3 py-1 rounded">{language === "en" ? "Home" : "मुख्यपृष्ठ"}</Link>

          {/* AboutUs inside mobile menu */}
          <div>
            <button
              className="w-full text-left hover:bg-gray-600 px-3 py-1 rounded flex justify-between items-center"
              onClick={() => setAboutUsOpen(!aboutUsOpen)}
            >
              {language === "en" ? "About Us" : "आमच्याबद्दल"} 
              <span>{aboutUsOpen ? "▴" : "▾"}</span>
            </button>

            {aboutUsOpen && (
              <div className="ml-3 mt-1 space-y-1">
                <Link
                  to="/about-us/about-gram-panchayat"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "About Gram Panchayat" : "ग्रामपंचायतीबद्दल"} 
                </Link>
                <Link
                  to="/about-us/historical-significance"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Historical Significance" : "ऐतिहासिक महत्त्व"}
                </Link>
                <Link
                  to="/about-us/taluka-background"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Taluka Background" : "तालुका पार्श्वभूमी"} 
                </Link>
                <Link
                  to="/about-us/mythological-significance"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Mythological Significance" : "पौराणिक महत्त्व"} 
                </Link>
                <Link
                  to="/about-us/other"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Others" : "इतर"}
                </Link>
              </div>
            )}
          </div>

          {/* Government Scheme Information inside mobile menu */}
          <div>
            <button
              className="w-full text-left hover:bg-gray-600 px-3 py-1 rounded flex justify-between items-center"
              onClick={() => setGovernmentSchemesOpen(!governmentSchemesOpen)}
            >
              {language === "en" ? "Government Scheme Information" : "शासकीय योजनांची माहिती"} 
              <span>{governmentSchemesOpen ? "▴" : "▾"}</span>
            </button>

            {governmentSchemesOpen && (
              <div className="ml-3 mt-1 space-y-1">
                <Link
                  to="/government-scheme-information/pesa"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "PESA" : "पेसा"}
                </Link>
                <Link
                  to="/government-scheme-information/pradhan-mantri-awas-yojana"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Pradhan Mantri Awas Yojana" : "प्रधान मंत्री आवास योजना"} 
                </Link>
                <Link
                  to="/government-scheme-information/shabari-awas-yojana"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Shabari Awas Yojana" : "शबरी आवास योजना"} 
                </Link>
                <Link
                  to="/government-scheme-information/department-of-cultural-affairs"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Department Of Cultural Affairs" : "सांस्कृतिक कार्य विभाग"} 
                </Link>
                <Link
                  to="/government-scheme-information/skill-development-entrepreneurship-department"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Skill Development and Entrepreneurship Department" : "कौशल्य विकास व उद्योजकता विभाग"} 
                </Link>
                <Link
                  to="/government-scheme-information/tribal-development-department"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Tribal Development Department" : "आदिवासी विकास विभाग"} 
                </Link>
                <Link
                  to="/government-scheme-information/women-and-child-development-department"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Women and Child Development Department" : "महिला बाल विकास विभाग"}
                </Link>
                <Link
                  to="/government-scheme-information/employment-guarantee-scheme-mgnarega"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Employment Guarantee Scheme MGNAREGA" : "रोजगार हमी योजना MGNAREGA"}
                </Link>
                <Link
                  to="/government-scheme-information/other"
                  className="block hover:bg-gray-600 px-3 py-1 rounded"
                >
                  {language === "en" ? "Others" : "इतर"}
                </Link>
              </div>
            )}
          </div>

          <Link to="/for-citizens" className="hover:bg-gray-600 px-3 py-1 rounded">{language === "en" ? "For Citizens" : "नागरिकांसाठी"}</Link>
          <Link to="/contactus" className="hover:bg-gray-600 px-3 py-1 rounded">{language === "en" ? "Contact Us" : "आमच्याशी संपर्क साधा"}</Link>
          <Link to="/complaints" className="hover:bg-gray-600 px-3 py-1 rounded">{language === "en" ? "Complaints" : "तक्रारी"}</Link>
          <Link to="/gallery" className="hover:bg-gray-600 px-3 py-1 rounded">{language === "en" ? "Gallery" : "फोटो गॅलरी"}</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
