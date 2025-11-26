import React, { useContext } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from "../context/AppContext";

export default function ShabariAwasYojana() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
          <div className='flex'>
            <h1 className='text-white font-bold text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "Shabari Awas Yojana" : "शबरी आवास योजना"} </h1>
            <a className=' self-end text-blue-700' href="https://www.mahaawaas.org/shabrigrm.html">(Visit Official Website)</a>
          </div>
          <div className='text-white text-start mt-10'>
            
              <strong>{language === "en" ? "Scheme Form:" : "योजनेचे स्वरूप:-"}</strong>{language === "en" ? "Under the tribal sub-plans, providing permanent houses with 269 sq. ft. plinth area to eligible beneficiaries of Scheduled Tribes in tribal areas and Scheduled Tribes in non-tribal areas. " : "आदिवासी उपयोजनेंतर्गत आदिवासी क्षेत्रात येणाऱ्या जिल्ह्यांतील अनुसूचित जमातीच्या लाभार्थ्यांसाठी तसेच आदिवासी बाह्य क्षेत्रात येणाऱ्या जिल्ह्यांतील अनुसूचित जमातीच्या पात्र लाभार्थ्यांना घराचे 269.00 चौ.फु. चटई क्षेत्र असलेले पक्के घरकुल उपलब्ध करून देणे."} 
              <br />
              <br />
              <strong>{language === "en" ? "Beneficiary Eligibility:" : "लाभार्थी पात्रता:- "} </strong>
              <ol>
                <li>{language === "en" ? "1. The beneficiary should be from Scheduled Tribes category in Maharashtra state." : "1. लाभार्थी महाराष्ट्र राज्यातील अनुसूचित जमाती संवर्गातील असावा."}</li>
                <li>{language === "en" ? "2. The beneficiary's residence in Maharashtra state should be minimum 15 years." : "2. लाभार्थ्यांचे महाराष्ट्र राज्यातील वास्तव्य किमान 15 वर्षांचे असावे. "} </li>
                <li>{language === "en" ? "3. The beneficiary should have his own land or government given land." : "3. लाभार्थ्यांकडे स्वत:ची किंवा शासनाने दिलेली जमीन असणे आवश्यक राहील."} </li>
                <li>{language === "en" ? "4. The beneficiary should not have his own or family member's permanent house." : "4. लाभार्थ्यांकडे स्वत:चे किंवा कुटुंबियांचे पक्के घर नसावे. "} </li>
                <li>{language === "en" ? "5. Widows, abandoned, helpless, remote area beneficiaries will be given priority." : "5. विधवा, परित्यक्ता, निराधार, दुर्गम भागातील लाभार्थ्यांना प्राधान्य देण्यात येईल."} </li>
                <li>
                  {language === "en" ? "6. Annual income limit of the beneficiary's family: " : "6. अर्जदाराच्या कुटुंबाची वार्षिक उत्पन्न मर्यादा खालीलप्रमाणे :-"}
                  <ol>
                    <li>{language === "en" ? "a) Rural area - ₹1.00 lakh " : "अ) ग्रामीण क्षेत्र - रु. 1.00 लाख "}</li>
                    <li>{language === "en" ? "b) Nagar Parishad area - ₹1.50 lakh" : "ब) नगरपरिषद क्षेत्र - रु. 1.50 लाख "}</li>
                    <li>{language === "en" ? "c) Municipal Corporation area - ₹2.00 lakh." : "क) महानगरपालिका क्षेत्र - रु. 2.00 लाख "}</li>
                  </ol>
                </li>
              </ol>
              <br />
              <strong>{language === "en" ? "House Cost Limit:" : "घराची किंमत मर्यादा:-"}</strong> {language === "en" ? "The maximum expenditure limit for house construction area-wise is as follows." : "घराच्या बांधकामासाठी क्षेत्रनिहाय कमाल खर्चाची मर्यादा पुढील प्रमाणे आहे. "}
              <ol>
                <li>{language === "en" ? "a) Rural general area: ₹1.32 lakh Naxal affected and hilly area: ₹1.42 lakh" : "अ) ग्रामीण साधारण क्षेत्र : रु. 1.32 लाख नक्षलग्रस्त व डोंगराळ क्षेत्रासाठी : रु. 1.42 लाख "}</li>
                <li>{language === "en" ? "b) Nagar Parishad area: ₹1.50 lakh" : "ब) नगरपरिषद क्षेत्र : रु. 1.50 लाख "} </li>
                <li>{language === "en" ? "c) Municipal Corporation area: ₹2.00 lakh." : "क) महानगरपालिका क्षेत्र : रु. 2.00 लाख "}</li>
              </ol> 
              <br />
              <h2><strong>{language === "en" ? "Required Documents:" : "आवश्यक कागदपत्रे:-"}</strong></h2> 
              <ol>
                  <li>{language === "en" ? "1. Two recent passport size photos of the applicant." : "1. अर्जदाराचे नजिकच्या काळातील दोन पासपोर्टसाईज फोटो "} </li>
                  <li>{language === "en" ? "2. Caste certificate." : "2. जातीचे प्रमाणपत्र "}</li>
                  <li>{language === "en" ? "3. Residence certificate." : "3. रहिवासी प्रमाणपत्र "}</li>
                  <li>{language === "en" ? "4. 7/12 extract and sample 8-A." : "4. 7/12 उतारा व नमुना 8-अ "}</li>
                  <li>{language === "en" ? "5. School leaving certificate/age certificate." : "5. शाळा सोडल्याचा दाखला/वयाचा दाखला "}</li>
                  <li>{language === "en" ? "6. Land availability certificate." : "6. जागा उपलब्धतेचे प्रमाणपत्र "}</li>
                  <li>{language === "en" ? "7. Income certificate attested by Tahsildar." : "7. तहसिलदार यांचेकडून प्रमाणित उत्पन्नाचा दाखला "} </li>
                  <li>{language === "en" ? "8. Documents as prescribed by government from time to time." : "8. शासन वेळोवेळी विहित करतील अशी कागदपत्रे "} </li>
                  <li>{language === "en" ? "9. Gram Sabha resolution." : "9. ग्रामसभेचा ठराव"}</li>
              </ol> 
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
