import React,{useContext} from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from "../context/AppContext";

export default function DepartmentOfCulturalAffairs() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
            <div className='flex'>
                <h1 className='text-white font-bold text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "Department Of Cultural Affairs" : "सांस्कृतिक कार्य विभाग"} </h1>
                <a className=' self-end text-blue-700' href="https://cultural.maharashtra.gov.in/">(Visit Official Website)</a>
            </div>
            <p className='text-white text-start mt-10'>
                {language === "en" ? "Cultural Work Department" : "सांस्कृतिक कार्य विभाग"} 
                <oll>
                    <li>{language === "en" ? "Maharashtra Vaibhav State Protected Monuments Conservation Scheme" : "महाराष्ट्र वैभव राज्य संरक्षित स्मारक संगोपन योजना"}</li>
                    <li>{language === "en" ? "Vridhha Kalavant Honorarium Scheme" : "वृध्द कलावंत मानधन योजना"}</li>
                    <li>{language === "en" ? "Ethical Values" : "नैतिक मूल्य"}</li>
                </oll>
            </p>
        </div>
      </div>
      <Footer />
    </div>

  )
}
