import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function EmploymentGuaranteeScheme() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
          <div className='flex'>
            <h1 className='text-white font-bold text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "Employment Guarantee Scheme MGNAREGA" : "रोजगार हमी योजना MGNAREGA"} </h1>
            <a className=' self-end text-blue-700' href="https://nregastrep.nic.in/netnrega/homestciti.aspx?state_code=18&state_name=MAHARASHTRA&lflag=eng&labels=labels/">(Visit Official Website)</a>
          </div>
          <p className='text-white text-start mt-10'>
            {language === "en" ?
              `In order to ensure proper development of rural areas, while creating sustainable collective assets in rural areas through the available human resources, the central government has passed the National Rural Employment Guarantee Act 2005 with the aim of providing employment to laborers living in rural areas and doing unskilled manual labor. Under this act, a guarantee has been given to provide 100 days of employment to families in rural areas. The Maharashtra government has implemented the Maharashtra Rural Employment Guarantee Scheme by combining the state's Employment Guarantee Scheme and the Center's National Rural Employment Guarantee Scheme. The scheme is called Mahatma Gandhi National Rural Employment Guarantee Scheme Maharashtra.`
              : `ग्रामीण भागाचा सुयोग्य विकास करणेचे दृष्टीने उपलब्ध मानवी संपत्तीद्वारे ग्रामीण भागात टिकाऊ सामुहिक मालमत्ता निर्माण करीत असतानाच ग्रामीण भागात रहाण्या-या व अंग मेहनतीची अकुशल कामे करण्या-या, मजुरांना रोजगार उपलब्ध व्हावा या उद्देशाने केंद्र सरकारने राष्ट्रीय ग्रामीण रोजगार हमी अधिनियम २००५ पारीत केला असुन सदर कायदयान्वये ग्रामीण भागातील कुटुंबाला १०० दिवसांचा रोजगार उपलब्ध करुन देण्याची हमी देण्यात आलेली आहे.महाराष्ट्र शासनाने राज्याची रोजगार हमी योजना,व केंद्राची राष्ट्रीय ग्रामीण रोजगार हमी योजना यांची सांगड घालुन महाराष्ट्र ग्रामीण रोजगार हमी योजना आमलात आणलेली आहे.जिला महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी योजना महाराष्ट्र असे संबोधले जाते.`
            }
          </p>
        </div>
      </div>
      <Footer />
    </div>

  )
}


