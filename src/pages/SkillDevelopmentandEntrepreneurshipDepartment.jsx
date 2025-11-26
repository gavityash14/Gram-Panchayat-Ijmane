import React, {useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function SkillDevelopmentandEntrepreneurshipDepartment() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
            <div className='flex'>
                <h1 className='text-white font-bold text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "Skill Development and Entrepreneurship Department" : "कौशल्य विकास व उद्योजकता विभाग"}  </h1>
                <a className=' self-end text-blue-700' href="https://kaushalya.mahaswayam.gov.in/">(Visit Official Website)</a>
            </div>
            <p className='text-white text-start mt-10'>
            <oll>
                <li>Employment Fairs / रोजगार मेळावे</li>
                <li>Service Scheme for Tribal Candidates Training and Guidance Centers / आदिवासी उमेदवारांसाठी सेवा योजना प्रशिक्षण व मार्गदर्शन केंद्रे</li>
                <li>Employment Incentive Program Scheme / रोजगार प्रोत्साहन कार्यक्रम योजना</li>
                <li>Starting Library-like Study Centers / ग्रंथालयसदृश अभ्यासिका सुरु करणे</li>
            </oll>
            </p>
        </div>
      </div>
      <Footer />
    </div>

  )
}
