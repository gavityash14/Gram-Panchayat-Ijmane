import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function OtherGovernmentScheme() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
          <div className='flex'>
            <h1 className='text-white font-bold text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "Other Schemes" : "इतर"} </h1>
          </div>
          <div className='text-white text-start mt-10'>
            <h3 className='font-bold text-2xl'>{language === "en" ? "Features of the scheme -" : "योजनेची वैशिष्ठे -"}</h3>
            <ul className='mt-4 pl-8 list-disc'>
              <li>{language === "en" ? "The Gram Sabha will select the work at the Gram Panchayat level." : "ग्रामपंचायत स्तरावर कामाची निवड ग्राम सभा करणार"}</li>
              <li>{language === "en" ? "Panchayat Samiti will approve the planning plan at the taluka level." : "तालुका पातळीवर नियोजन आराखडयास मंजुरी पंचायत समिती देणार"}</li>
              <li>{language === "en" ? "Zilla Parishad will approve the planning plan at the district level." : "जिल्हा पातळीवर नियोजन आराखडयास मंजुरी जिल्हा परिषद देणार"}</li>
              <li>{language === "en" ? "75 percent of the approved works will be implemented through the Gram Panchayat." : "मंजुर कामांच्या ७५ टक्के खर्चाची कामे ग्राम पंचायत मार्फत राबविणार"}</li>
              <li>{language === "en" ? "The state government will remain responsible for providing employment for more than 100 days." : "१०० दिवसांपेक्षा जास्त दिवस रोजगार देण्याची जबाबदारी राज्य शासनाची राहिल."}</li>
              <li>{language === "en" ? "Guaranteed minimum wage as per government norms." : "शासन निकषा प्रमाणे किमान मजुरीची हमी."}</li>
              <li>{language === "en" ? "Employment will be provided within 15 days of application." : "अर्ज केल्यापासुन १५ दिवसांत रोजगार पुरविणार."}</li>
              <li>{language === "en" ? "The adult member of the family can register the names of all his/her family members through the application." : "कुटुंबातील प्रौढ व्यक्ती अर्जाद्वारे त्याचे सर्व कुटबातील व्यक्तींची नावे नोंदणी करु शकतील"}</li>
              <li>{language === "en" ? "Once registered, it will remain valid for a period of 5 years." : "एकदा केलेली नोंदणी ५ वर्षे कालावधीकरीता राहिल."}</li>
              <li>{language === "en" ? "All the facilities available to laborers under the Rohingya Act will be provided." : "रोहयो कायदया अंतर्गत मजुरांना मिळणा-या सर्व सोई सुविधा मिळतील."}</li>
              <li>{language === "en" ? "Duties at various levels" : "विविध स्तरावरील कर्तव्य्"}</li>        
            </ul>
            <br />
            <h3 className='font-bold text-2xl'> <span className='font-bold text-green-400'>✓ </span>{language === "en" ? "Gram Panchayat level -" : "ग्रामपंचायत स्तर -"}</h3>
            <ul className='mt-4 pl-8 list-disc'>
                <li>{language === "en" ? "Registration of families/laborers/entry on job cards" : "कुटुंबांची /मजुरांची नोंदणी करणे/जॉबकार्डवरील नोंदी करणे"}</li>
                <li>{language === "en" ? "Requesting/providing work for laborers" : "मजुरांची कामाची मागणी घेणे/कामे पुरविणे"}</li>
                <li>{language === "en" ? "Surveying/Estimating Work" : "कामाचे सर्वेक्षण करणे/अंदाजपत्रक करणे"}</li>
                <li>{language === "en" ? "Planning work" : "कामाचे नियोजन करणे"}</li>
                <li>{language === "en" ? "Providing funds for wages and work to laborers" : "मजुरांना मजुरी व कामासाठी निधी उपलब्ध करुन देणे"}</li>
                <li>{language === "en" ? "Disbursing wages on time" : "वेळेवर मजुरी वाटप करणे"}</li>
                <li>{language === "en" ? "Social audit" : "सामाजिक अंकेशन"}</li>
            </ul>
            <br />
            <h3 className='font-bold text-2xl'><span className='font-bold text-green-400'>✓ </span>{language === "en" ? "Taluka Level -" : "तालुका स्तर"} </h3>
            <ul className='mt-4 pl-8 list-disc'>
                <li>{language === "en" ? "Guiding Gram Panchayats on work planning" : "ग्रामपंचायतींना कामाच्या नियोजनाबद्दल मार्गदर्शन करणे"}</li>
                <li>{language === "en" ? "Planning work" : "कामाचे नियोजन करुन घेणे"}</li>
                <li>{language === "en" ? "Keeping attendance records and accounting for funds" : "हजेरीपट व निधीचा हिशोब ठेवणे"}</li>
                <li>{language === "en" ? "To collect taluka information using a computer system and send it to the district level" : "तालुक्याची माहिती संगणक प्रणालीचा वापर करुन संकलित करुन जिल्हा स्तरावर पाठविणे"}</li>
                <li>{language === "en" ? "Taking attendance of work done online through computer system" : "संगणक प्रणालीद्वारे झालेल्या कामांचे हजेरीपट ऑनलाईन करणे"}</li>
            </ul>
            <br />
            <h3 className='font-bold text-2xl'><span className='font-bold text-green-400'>✓ </span> {language === "en" ? "Subdivision level -" : "उपविभाग स्तर–"}</h3>
            <ul className='mt-4 pl-8 list-disc'>
                <li>{language === "en" ? "Revenue Department" : "महसुल विभाग"}</li>
            </ul>
            <br />
            <h3 className='font-bold text-2xl'><span className='font-bold text-green-400'>✓ </span> {language === "en" ? "District level-" : "जिल्हास्तर–"}</h3>
            <ul className='mt-4 pl-8 list-disc'>
                <li>{language === "en" ? "To plan all the works in the district" : "जिल्हयातील सर्व कामांचे नियोजन करुन घेणे"}</li>
                <li>{language === "en" ? "Keeping an account of funds" : "निधींचा हिशोब ठेवणे"}</li>
                <li>{language === "en" ? "Sending necessary information to the Central and State Governments" : "केंद्र राज्य शासनाकडे आवश्यक ती माहिती पाठविणे"}</li>
                <li>{language === "en" ? "Supervise the work." : "कामाचे सनियंत्रण करणे."}</li>
                <li>{language === "en" ? "Duties of Gram Sevak/Granny Employment Servant" : "ग्रामसेवक/ग्रामरोजगार सेवक यांची कर्तव्ये"}</li>
                <li>{language === "en" ? "Family registration, employment card distribution/work distribution" : "कुटब नोंदणी रोजगार पत्रक वाटप/कामांचे वाटप"}</li>
                <li>{language === "en" ? "Planning plan-inclusion/prioritization/self-preparation of tasks." : "नियोजन आराखडा-कामांचा समावेश/प्राधान्यक्रम/सेल्फ तयार करणे."}</li>
                <li>{language === "en" ? "75 percent work implementation" : "७५ टक्के कामाचे कार्यान्वयन"}</li>
                <li>{language === "en" ? "Wage distribution" : "मजुरी वाटप"}</li>
                <li>{language === "en" ? "Unemployment allowance distribution (25 percent for the first 30 days, 50 percent of the minimum wage for the next 100 days)" : "बेरोजगार भत्ता वाटप(पहिले-३०दिवसांसाठी.२५टक्के पुढील १०० दिवसापर्यंत किमान वेतनाच्या ५० टक्के)"}</li>
                <li>{language === "en" ? "Employment Guarantee Day organized" : "रोजगार हमी दिन आयोजन"}</li>
                <li>{language === "en" ? "Assistance with social audits." : "सामाजिक लेखा परिक्षणास मदत."}</li>
            </ul>
            <br />
            <h3 className='font-bold text-2xl'><span className='font-bold text-green-400'>✓ </span>{language === "en" ? "Role of Sarpanch:-" : "सरपंचांची भुमिकाः–"} </h3>
            <ul className='mt-4 pl-8 list-disc'>
                <li>{language === "en" ? "To determine the works to be undertaken in the Gram Panchayat area in the Gram Sabha." : "ग्रामपंचायत क्षेत्रात घ्यावयाची कामे ग्रामसभेमध्ये निश्चित करणे."}</li>
                <li>{language === "en" ? "Assisting various agencies in undertaking work within the scope of work with the approval of the Group Program Officer." : "गट कार्यक्रम अधिकारी यांच्या मंजुरीने कार्यक्षेत्रातील कामे हाती घेणेकामी विविध यंत्रणांना मदत करणे."}</li>
                <li>{language === "en" ? "Assistance in preparing Gram Panchayat Development Plan as per the recommendations of Gram Sabha." : "ग्राम सभेच्या शिफारशी नुसार ग्रामपंचायत विकास आराखडा तयार करणेकामी मदत."}</li>
                <li>{language === "en" ? "Assistance in sending the development plan of the work to be undertaken next year to the Group Program Officer." : "पुढील वर्षी घ्यावयाच्या कामांचा विकास आराखडा गट कार्यक्रम अधिकारी यांचेकडे पाठविणे कामी मदत."}</li>
                <li>{language === "en" ? "Follow up with a view to starting the work immediately after requisitioning laborers." : "मजुरांची मागणी केलेनंतर कामे तात्काळ सुरु करणेचे दृष्टीने पाठपुरावा करणे."}</li>
                <li>{language === "en" ? "Help with social networking." : "सामाजिक अंकेशन कामी मदत."}</li>
                <li>{language === "en" ? "Annual planning and labor budget." : "वार्षिक नियोजन व लेबर बजेट."} </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
