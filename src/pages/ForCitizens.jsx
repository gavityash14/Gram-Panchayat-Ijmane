import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  required_documents,
  right_to_public_service_ordinance,
  residence_self_declaration,
} from '../assets/assets';
import { AppContext } from '../context/AppContext';

export default function ForCitizens() {
  const { language } = useContext(AppContext);

  return (
    <div>
      <Header />

      <div className="bg-black flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row text-white">
          <h1
            className="font-bold text-4xl"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            {language === 'en' ? 'For Citizens' : 'नागरिकांसाठी'}
          </h1>

          <div className="flex flex-col md:flex-row mt-16 justify-center">
            <div className="flex-row">
              <h2 className="text-start font-bold text-2xl">
                {language === 'en'
                  ? 'Birth/Death Certificate Information'
                  : 'जन्म / मृत्यू दाखल्यासाठी'}
              </h2>

              <h3 className="text-start font-bold mt-8">
                {language === 'en'
                  ? 'For Birth Certificate:'
                  : 'जन्म दाखल्यासाठी :'}
              </h3>
              <ol className="text-start">
                <li>
                  {language === 'en'
                    ? "1) Child's: Aadhaar Card"
                    : '१) मुलाचे / मुलीचे: आधार कार्ड'}
                </li>
                <li>
                  {language === 'en'
                    ? "2) Father's: Aadhaar Card"
                    : '२) वडिलांचे: आधार कार्ड'}
                </li>
                <li>
                  {language === 'en'
                    ? "3) Mother's: Aadhaar Card"
                    : '३) आईचे: आधार कार्ड'}
                </li>
              </ol>

              <h3 className="text-start font-bold mt-8">
                {language === 'en'
                  ? 'For Death Certificate:'
                  : 'मृत्यू दाखल्यासाठी :'}
              </h3>
              <ol className="text-start">
                <li>
                  {language === 'en'
                    ? "1) Deceased's: Aadhaar Card"
                    : '१) मयताचे: आधार कार्ड'}
                </li>
                <li>
                  {language === 'en'
                    ? "2) Father's: Aadhaar Card"
                    : '२) वडिलांचे: आधार कार्ड'}
                </li>
                <li>
                  {language === 'en'
                    ? "3) Mother's: Aadhaar Card"
                    : '३) आईचे: आधार कार्ड'}
                </li>
                <li>
                  {language === 'en'
                    ? "4) Spouse's: Aadhaar Card"
                    : '४) जोडीदाराचे: आधार कार्ड'}
                </li>
              </ol>

              <h3 className="text-start font-bold mt-16">
                {language === 'en'
                  ? 'Your Government Service Center, Sakode'
                  : 'आपले सरकार सेवा केंद्र, साकोडे'}
              </h3>

              <p
                className="text-start"
                dangerouslySetInnerHTML={{
                  __html:
                    language === 'en'
                      ? '<strong>Center Operator:</strong> Dattu Babulal Thakre <br />Mobile Number: 9604261186'
                      : '<strong>केंद्र चालक:</strong> दत्तू बाबूलाल ठाकरे <br />मोबाईल क्रमांक: 9604261186',
                }}
              ></p>
            </div>

            <img
              src={required_documents}
              alt="Required Documents"
              className="w-full max-w-[750px] md:pl-16"
            />
          </div>

          <div className="flex flex-col md:flex-row w-full mt-16">
            <div className="w-full md:w-[50%] flex-row">
              <h1 className="mb-8">{language === "en" ? "Maharashtra Right to Public Service Ordinance" : "लोकसेवा हक्क अधिनियम २0१५ तपशील"} </h1>
              <iframe  
                width="100%"
                src={right_to_public_service_ordinance}
                title="Right to Public Service Ordinance"
                className='h-[400px] md:h-[800px]'
              ></iframe>
            </div>
            <div className="w-full md:w-[50%] flex-row md:ml-5 mt-5 md:mt-0">
              <h1 className="mb-8">{language === "en" ? "Residence Self-Declaration" : "रदिवासी स्वयांघोषणापत्र"} </h1>
              <iframe
                width="100%"
                src={residence_self_declaration}
                title="Residence Self Declaration"
                className='h-[400px] md:h-[800px]'
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
