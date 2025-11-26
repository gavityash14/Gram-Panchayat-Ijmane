import React,{useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function WomenandChildDevelopmentDepartment() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
            <div className='flex'>
                <h1 className='text-white font-bold text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "Women and Child Development Department" : "महिला बाल विकास विभाग"} </h1>
                <a className=' self-end text-blue-700' href="https://womenchild.maharashtra.gov.in/">(Visit Official Website)</a>
            </div>
            <p className='text-white text-start mt-10'>
                {language === "en" ? "Women and Child Development Department" : "महिला बाल विकास विभाग"} 
                <ol>
                    <li>{language === "en" ? "1) Integrated Child Development Services Scheme" : "1) एकात्मिक बाल विकास सेवा योजना"}</li>
                    <li>{language === "en" ? "2) Manodhairya Scheme" : "2) मनोधैर्य योजना."}</li>
                    <li>{language === "en" ? "3) Rajiv Gandhi Sabala Scheme" : "3) राजीव गांधी सबला योजना"}</li>
                    <li>{language === "en" ? "4) Beti Bachao-Beti Padhao Scheme" : "4) बेटी बचाओ-बेटी पढाओ योजना"}</li>
                    <li>{language === "en" ? "5) Mazi Kanya Bhagyashri Scheme" : "5) माझी कन्या भाग्यश्री योजना"}</li>
                    <li>{language === "en" ? "6) Child Care Scheme" : "6) बाल संगोपन योजना"}</li>
                    <li>{language === "en" ? "7) Child Counseling Center" : "7) बाल सल्ला केंद्र"}</li>
                    <li>{language === "en" ? "8) Shelter Homes for Destitute Women" : "8) निराश्रित महिलांसाठी आधार गृहे"}</li>
                    <li>{language === "en" ? "9) Savitribai Phule Multi-purpose Women Centers for Atrocities Victims" : "9) अत्याचारग्रस्त पीडित महिलांसाठी सावित्री बाई फुले बहुउदशिय महिला केंद्र"}</li>
                    <li>{language === "en" ? "10) Women Counseling Center Shubhamangal" : "10) महिला समपदेश केंद्र शुभमंगल"}</li>
                    <li>{language === "en" ? "11) Shubha Mangal Collective Marriage Scheme" : "11) शुभ मंगल सामूहिक विवाह योजना"}</li>
                    <li>{language === "en" ? "12) Orphanage Women Acceptance Centers and Protected Homes." : "12) अनाथालय महिला स्वीकृती केंद्रे आणि संरक्षित गृहे यामधील ."}</li>
                    <li>{language === "en" ? "13) Grant for Marriage of Destitute and Abandoned Widows' Daughters" : "13) निराधार आणि परित्यक्त्या विधवांच्यामुलींच्या विवाहाकरीता अनुदान"}</li>
                </ol>
            </p>
        </div>
      </div>
      <Footer />
    </div>

  )
}
