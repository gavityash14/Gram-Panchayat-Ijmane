import React, { useContext } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext.jsx';

export default function PradhanMantriAwasYojana() {
    const { language } = useContext(AppContext);
    return (
        <div>
            <Header />
            <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
                <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
                    <div className='flex'>
                        <h1 className='text-white font-bold text-2xl md:text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "Pradhan Mantri Awas Yojana" : "प्रधान मंत्री आवास योजना"} </h1>
                        <a className=' self-end text-blue-700' href="https://nregastrep.nic.in/netnrega/homestciti.aspx?state_code=18&state_name=MAHARASHTRA&lflag=eng&labels=labels">(Visit Official Website)</a>
                    </div>
                    <p className='text-white text-start mt-10'>
                        {language === "en" ?
                            "Pradhan Mantri Awas Yojana - Rural: The objective of the scheme is to provide financial assistance for house construction to families below the poverty line and homeless in rural areas. Beneficiaries are selected through Gram Panchayats. The permanent waiting list prepared through Gram Panchayats is published on the notice board of the Gram Panchayat. General conditions for getting the benefit of the scheme are that the beneficiary should be below the poverty line, his name should be in the permanent waiting list and he should have his own land for house construction. Since the year 2016-17, Pradhan Mantri Awas Yojana-Rural is being implemented as a centrally sponsored scheme. ₹1.20 lakh per beneficiary is given as financial assistance for house construction in general areas and ₹1.30 lakh for Naxal-affected areas. The financial assistance of Pradhan Mantri Awas Yojana-Rural will be deposited in the beneficiaries' bank/post office accounts through PFMS system from the state level bank accounts. Pradhan Mantri Awas Yojana-Rural will use the information from Socio-Economic and Caste Census 2011 for selection of beneficiaries. Pradhan Mantri Awas Yojana-Rural will have a national technical support institution to provide technical assistance at the national level. In addition to house subsidies, financial assistance is given under Mahatma Gandhi National Rural Employment Guarantee Scheme in the form of 90/95 days of unskilled wage for building houses."
                            : "प्रधान मंत्री आवास योजना - ग्रामीण भागातील दारिद्रय रेषेखालील बेघर/कच्चेघर असलेल्या कुटूंबांना घरकुल बांधकामासाठी अर्थसहाय्य देणे हा योजनेचा उद्देश आहे. लाभार्थ्यांची निवड ग्रामपंचायतीमार्फत केली जाते. ग्रामपंचायतीमार्फत तयार केलेली कायम प्रतिक्षा यादी ग्रामपंचायतीच्या सुचना फलकावर प्रसिध्द केली जाते. योजनेचा लाभ मिळण्यासाठी लाभार्थी दारिद्रय रेषेखालील असावा, कायम प्रतिक्षा यादीत त्याचे नाव असावे व घरकुल बांधकामासाठी स्वत:ची जागा असावी, अशा सर्वसाधारण अटी आहेत. सन 2016-17 पासून प्रधान मंत्री आवास योजना-ग्रामीण ही केंद्र पुरस्कृत योजना राबविली जाणार आहे. घरकुल बांधकामाकरिता साधारण क्षेत्रात रू.1.20 लक्ष व नक्षलग्रस्त भागाकरिता रू.1.30 लक्ष प्रति लाभार्थी अर्थसहाय देण्यात येणार आहे. प्रधान मंत्री आवास योजना-ग्रामीण योजनेचे अर्थसहाय राज्यस्तरावरील बँक खात्यातून PFMS प्रणालीव्दारे लाभार्थ्यांच्या बँक/पोस्ट खात्यात जमा होणार आहे. प्रधान मंत्री आवास योजना-ग्रामीण अंतर्गत सामाजिक, आर्थिक व जात सर्वेक्षण, 2011 मधील माहिती लाभार्थ्यांच्या निवडीकरिता वापरण्यात येणार आहे. प्रधान मंत्री आवास योजना-ग्रामीण अंतर्गत राष्ट्रीय स्तरावर तांत्रिक सहाय्य पुरविण्यासाठी राष्ट्रीय तांत्रिक सहाय्य संस्था गठीत करण्यात येणार आहे. घरकुल अनुदाना व्यतिरिक्त महात्मा गांधी राष्ट्रीय रोजगार हमी योजनेअंतर्गत 90/95 दिवसांच्या अकुशल मुजूरीच्या स्वरूपात अर्थसहाय्य दिले जाते."
                        }
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

