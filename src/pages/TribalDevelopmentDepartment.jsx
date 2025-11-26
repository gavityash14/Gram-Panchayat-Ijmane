import React,{useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function TribalDevelopmentDepartment() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
            <div className='flex'>
                <h1 className='text-white font-bold text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "Tribal Development Department" : "आदिवासी विकास विभाग"} </h1>
                <a className=' self-end text-blue-700' href="https://tribal.maharashtra.gov.in/1001/%e0%a4%ae%e0%a5%81%e0%a4%96%e0%a5%8d%e0%a4%af-%e0%a4%aa%e0%a5%83%e0%a4%b7%e0%a5%8d%e0%a4%a0">(Visit Official Website)</a>
            </div>
            <p className='text-white text-start mt-10'>
                <oll>
                    <li>{language === "en" ? "Central Budget (Nucleus Budget) Scheme" : "केंद्रीय अर्थसंकल्प (न्यूक्लिअस बजेट) योजना"} </li>
                    <li>{language === "en" ? "Guaranteed Loan Scheme" : "खावटी कर्ज योजना"}</li>
                    <li>{language === "en" ? "Thakkar Bappa Tribal Residential Area Integrated Development Program" : "ठक्कर बाप्पा आदिवासी बस्ती सुधारणा एकात्मिक कार्यक्रम"}</li>
                    <li>{language === "en" ? "Nawasanjivani Scheme" : "नवसंजीवनी योजना"}</li>
                </oll>
            </p>
        </div>
      </div>
      <Footer />
    </div>

  )
}
