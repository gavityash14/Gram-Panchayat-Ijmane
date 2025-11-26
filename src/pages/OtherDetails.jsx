import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function OtherDetails() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
        <div className="bg-[#ebebeb] p-10 w-full text-center flex-row">
          <div className='flex text-center'>
            <h1 className='text-black font-bold text-4xl' >{language === "en" ? "Other Details" : "इतर"} </h1>
          </div>
          <hr className='mt-5' />
          <div className='text-black text-start mt-10'>
                <h3 className='font-bold text-2xl'>{language === "en" ? "Gram Panchayat" : "ग्रामपंचायत"}</h3>
                <p className='mt-4 pl-8'>{language === "en" ? "In Maharashtra, the administration of Gram Panchayats is done by Section 5 of the Mumbai Gram Panchayat Act, 1958. The population is taken into consideration while establishing a new Gram Panchayat in the state. The Gram Panchayat is managed with the help of Sarpanch, Upasarpanch, Gram Sevak. Gram Panchayat is the smallest but most important part of Panchayat Raj. There are 27,951 Gram Panchayats in Maharashtra." : "महाराष्ट्रात, ग्रामपंचायतींचे प्रशासन मुंबई ग्रामपंचायत कायदा, १९५८ च्या कलम ५ द्वारे केले जाते. राज्यात नवीन ग्रामपंचायत स्थापन करताना लोकसंख्येचा विचार केला जातो. सरपंच, उपसरपंच, ग्रामसेवक यांच्या मदतीने ग्रामपंचायतीचे व्यवस्थापन केले जाते. ग्रामपंचायत ही पंचायत राजचा सर्वात कमी परंतु सर्वात महत्त्वाचा भाग आहे. महाराष्ट्रात २७,९५१ ग्रामपंचायती आहेत."}</p>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Sections of the Gram Panchayat Act" : "ग्रामपंचायत कायद्यातील कलमे"}</h3>
                <p className='mt-4 pl-8'>{language === "en" ? "According to Section 5 of the Maharashtra Gram Panchayat Act, 1958, there must be one Gram Panchayat for every village." : "महाराष्ट्र ग्रामपंचायत कायदा १९५८ च्या कलम ५ नुसार, प्रत्येक गावासाठी एक ग्रामपंचायत असणे आवश्यक आहे"}.</p>
                <ul className='list-disc mt-4 pl-8'>
                    <li>{language === "en" ? "To carry out the functions of the Gram Panchayat, the people of the village will elect their representatives in proportion to the population through direct voting." : "ग्रामपंचायतीची कामे पार पाडण्यासाठी गावातील लोक थेट मतदानाद्वारे लोकसंख्येच्या प्रमाणात त्यांचे प्रतिनिधी निवडतील."}</li>
                    <li>{language === "en" ? "The voting of the said members will be by adult and secret ballot." : "सदर सदस्यांचे मतदान प्रौढ आणि गुप्त मतदान पद्धतीने असेल."}</li>
                </ul>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Reservation :-" : "आरक्षण :-"}</h3>
                <ul className='list-disc mt-4 pl-8'>
                    <li>{language === "en" ? "50% of the total seats in Gram Panchayats are reserved for women." : "ग्रामपंचायतींमध्ये एकूण जागांपैकी ५०% जागा महिलांसाठी राखीव आहेत."}</li>
                    <li>{language === "en" ? "Seats are reserved for Scheduled Castes and Scheduled Tribes in proportion to the population." : "लोकसंख्येच्या प्रमाणात अनुसूचित जाती आणि जमातींसाठी जागा राखीव असतात."}</li>
                    <li>{language === "en" ? "27% of the seats are reserved for people from Other Backward Classes category." : "इतर मागासवर्गीय प्रवर्गातील लोकांसाठी २७% जागा राखीव आहेत."}</li>
                </ul>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Member Qualifications" : "सदस्यांची पात्रता :-"}</h3>
                <ul className='list-disc mt-4 pl-8'>
                    <li>{language === "en" ? "He should be a member of the village Gram Sabha." : "तो गावाच्या ग्रामसभेचा सदस्य असावा"}.</li>
                    <li>{language === "en" ? "His name must be in the voter list." : "त्याचे नाव मतदार यादीत असणे आवश्यक आहे"}.</li>
                    <li>{language === "en" ? "He must have completed 21 years of age." : "त्याचे वय २१ वर्षे पूर्ण झालेले असावे."}</li>
                    <li>{language === "en" ? "The presidents of agricultural and credit cooperatives can be taken as associate members. But for this, the permission of the Gram Panchayat is required, now this method has been discontinued." : "कृषी आणि पतपुरवठा सहकारी संस्थांच्या अध्यक्षांना सहयोगी सदस्य म्हणून घेता येते. परंतु त्यासाठी ग्रामपंचायतीची परवानगी आवश्यक आहे, आता ही पद्धत बंद करण्यात आली आहे."}</li>
                    <li>{language === "en" ? "Tenure - The tenure of the Gram Panchayat is 5 years. It is mandatory to hold elections within 6 months of the dissolution of the Gram Panchayat and no extension is given under any circumstances. The State Government has the right to dissolve the Gram Panchayat. If more than half of the members resign, the State Government directs to hold by-elections or decides to dissolve it. The District Collector sends a report to the Government in this regard." : "कार्यकाळ - ग्रामपंचायतीचा कार्यकाळ ५ वर्षांचा असतो. ग्रामपंचायत विसर्जित झाल्यानंतर ६ महिन्यांच्या आत निवडणुका घेणे बंधनकारक असते आणि कोणत्याही परिस्थितीत मुदतवाढ दिली जात नाही. राज्य सरकारला ग्रामपंचायत विसर्जित करण्याचा अधिकार आहे. जर अर्ध्याहून अधिक सदस्यांनी राजीनामा दिला तर राज्य सरकार पोटनिवडणुका घेण्याचे निर्देश देते किंवा बरखास्त करण्याचा निर्णय घेते. जिल्हाधिकारी त्या संदर्भात अहवाल सरकारला पाठवतात."}</li>
                    <li>{language === "en" ? "In mountainous areas, there are seven members for a population of 300 to 1500." : "डोंगराळ भागात ३०० ते १५०० लोकसंख्येमध्ये सात सदस्य असतात."}</li>
                </ul>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Sarpanch and Upasarpanch" : "सरपंच आणि उपसरपंच"}</h3>
                <p className='mt-4 pl-8'>{language === "en" ? "The Sarpanch is the executive head of the Gram Panchayat. The elected members of the Gram Panchayat elect the Sarpanch and the Upasarpanch from among themselves. (Since 2017, the election of Sarpanchs has been conducted directly by the people.) The post of Sarpanch is reserved while the post of Upasarpanch is open and is filled up by releasing the reservation in the Collector's office before the election. After the election, the District Collector issues a notification to convene the first meeting of the Gram Panchayat. An officer appointed by the District Collector presides over this meeting." : "सरपंच हा ग्रामपंचायतीचा कार्यकारी प्रमुख असतो. ग्रामपंचायतीतून निवडून आलेले सदस्य आपापसातून सरपंच आणि उपसरपंच निवडतात. (२०१७ पासून, सरपंचांची निवडणूक थेट जनतेतून होते). सरपंच पद राखीव असते तर उपसरपंच पद खुले असते आणि निवडणुकीपूर्वी जिल्हाधिकारी कार्यालयात आरक्षण सोडत काढली जाते. निवडणुकीनंतर ग्रामपंचायतीची पहिली बैठक बोलावण्यासाठी जिल्हाधिकारी अधिसूचना जारी करतात. जिल्हाधिकाऱ्यांनी नियुक्त केलेला अधिकारी या बैठकीचे अध्यक्षस्थान करतो."}</p>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Gram sevk" : "ग्रामसेवक"}</h3>
                <p className='mt-4 pl-8'>{language === "en" ? "The Gram Sevak is known as the Secretary, Chief Executive Officer or Chitnis of the Gram Panchayat. The Gram Sevak is selected by the Zilla Parishad and appointed by the Chief Executive Officer. He is a servant of the Zilla Parishad. His salary is received from the district fund. He is closely monitored by the Group Development Officers." : "ग्रामसेवकाला ग्रामपंचायतीचा सचिव, मुख्य कार्यकारी अधिकारी किंवा चिटणीस म्हणून ओळखले जाते. ग्रामसेवकाची निवड जिल्हा परिषदेद्वारे केली जाते आणि त्याची नियुक्ती मुख्य कार्यकारी अधिकारी करतात. तो जिल्हा परिषदेचा सेवक असतो. त्याचा पगार जिल्हा निधीतून मिळतो. गटविकास अधिकाऱ्यांचे त्याच्यावर बारकाईने नियंत्रण असते."}</p>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Duties of Gram Sevak" : "ग्रामसेवकाचे काम"}</h3>
                <ol className='list-decimal mt-4 pl-8'>
                    <li>{language === "en" ? "Preparing the Gram Panchayat budget." : "ग्रामपंचायतीचे बजेट तयार करणे."}</li>
                    <li>{language === "en" ? "Managing the office of the Gram Panchayat." : "ग्रामपंचायतीचे कार्यालय सांभाळणे."}</li>
                    <li>{language === "en" ? "Providing advice to the people of the village on issues such as health, agriculture, rural development, education, etc." : "गावातील लोकांना आरोग्य, शेती, ग्रामविकास, शिक्षण इत्यादी विषयांवर सल्ला देणे."}</li>
                    <li>{language === "en" ? "Providing information to the people about various government schemes for the development of the village." : "गावाच्या विकासासाठी विविध सरकारी योजनांची माहिती लोकांना देणे."}</li>
                    <li>{language === "en" ? "Collecting taxes and providing various types of certificates to the public." : "कर गोळा करणे आणि जनतेला विविध प्रकारचे प्रमाणपत्रे प्रदान करणे."}</li>
                    <li>{language === "en" ? "To act as registrar for birth and death registration." : "जन्म आणि मृत्यु नोंदणीसाठी निबंधक म्हणून काम करणे."}</li>
                    <li>{language === "en" ? "To work as a child marriage prevention and public information officer." : "बालविवाह प्रतिबंधक आणि जन माहिती अधिकारी म्हणून काम करणे."}</li>
                    <li>{language === "en" ? "Acting as a registration officer for workers and registering construction workers." : "कामगारांसाठी नोंदणी अधिकारी म्हणून काम करणे आणि बांधकाम कामगारांची नोंदणी करणे."}</li>
                    <li>{language === "en" ? "Serving as Secretary of the Biodiversity Committee." : "जैवविविधता समितीचे सचिव म्हणून काम पाहणे."}</li>
                    <li>{language === "en" ? "Working as a marriage registrar." : "विवाह निबंधक म्हणून काम करणे."}</li>
                    <li>{language === "en" ? "Acting as Secretary of the Emergency Committee." : "आपत्कालीन समिती सचिव म्हणून काम पाहणे."}</li>
                </ol>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Gram Sabha" : "ग्रामसभा"}</h3>
                <ul className='list-disc mt-4 pl-8'>
                    <li>{language === "en" ? "According to Section 7A of the Mumbai Gram Panchayat Act, 1958, a Gram Sabha was established for each village. Every person with voting rights in the village is a member of the Gram Sabha. Since the Gram Panchayat is the executive body of the Gram Sabha, it is responsible to the Gram Sabha. The Gram Sabha was strengthened by a committee called Bongirwal. In 1993, according to the 73rd Amendment to the Constitution." : "मुंबई ग्रामपंचायत कायदा, १९५८ कलम ७अ नुसार प्रत्येक गावासाठी एक ग्रामसभा स्थापन करण्यात आली.. गावातील मतदानाचा हक्क असलेली प्रत्येक व्यक्ती ग्रामसभेचा सदस्य आहे. ग्रामपंचायत ही ग्रामसभेची कार्यकारी संस्था असल्याने, ती ग्रामसभेला जबाबदार असते. बोंगीरवाल नावाच्या समितीने ग्रामसभेला बळकटी दिली. १९९३ मध्ये ७३ व्या घटनादुरुस्तीनुसार."}</li>
                    <li>{language === "en" ? "The Gram Sabha holds four meetings. These meetings are convened on January 26, May 1, August 15, and October 2. The Gram Sabha scheduled for October 2, 2018, has been cancelled and will be held before the start of the new financial year." : "ग्रामसभेच्या चार बैठका होतात. या बैठका २६ जानेवारी, १ मे, १५ ऑगस्ट आणि २ ऑक्टोबर रोजी बोलावल्या जातात. २०१८ पासून २ ऑक्टोबर रोजी होणारी ग्रामसभा रद्द करण्यात आली आहे आणि ती नवीन आर्थिक वर्ष सुरू होण्यापूर्वी घेतली जाईल."}</li>
                </ul>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Chairman" : "अध्यक्ष"}</h3>
                <p className='mt-4 pl-8'>{language === "en" ? "The Sarpanch of the Gram Panchayat presides over the Gram Sabha meetings. In his absence, there is a Deputy Sarpanch and if both are absent, one of the members is elected as the Chairman." : "ग्रामपंचायतीचा सरपंच ग्रामसभेच्या बैठकीचे अध्यक्षस्थान भूषवतो. त्यांच्या अनुपस्थितीत एक उपसरपंच असतो आणि जर दोघेही अनुपस्थित असतील तर सदस्यांपैकी एकाची अध्यक्ष म्हणून निवड केली जाते."}</p>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Gram Sabha Responsibilities" : "ग्रामसभेने केलेली कामे"}</h3>
                <ul className='list-disc mt-4 pl-8'> 
                    <li>{language === "en" ? "Approval for taxation" : "कर आकारणीसाठी मान्यता."}</li>
                    <li>{language === "en" ? "Paying salaries for development works of Gram Panchayat." : "ग्रामपंचायतीच्या विकास कामांसाठी वेतन देणे."}</li>
                    <li>{language === "en" ? "Appointment of a Vigilance Committee to monitor the actual expenditure and work of the Gram Panchayat." : "ग्रामपंचायतीच्या प्रत्यक्ष खर्चावर आणि कामावर लक्ष ठेवण्यासाठी दक्षता समितीची नियुक्ती."}</li>
                    <li>{language === "en" ? "To elect Gram Panchayat members." : "ग्रामपंचायत सदस्यांची निवड करणे."}</li>
                    <li>{language === "en" ? "The Gram Sabha can send suggestions and opinions to all departments through resolutions." : "ग्रामसभा सर्व विभागांना ठरावाद्वारे सूचना आणि मते पाठवू शकते."}</li>
                </ul>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Income of Gram Panchayat" : "ग्रामपंचायतीचे उत्पन्न"}</h3>
                <ol className='list-decimal mt-4 pl-8'>
                    <li>{language === "en" ? "Tax on houses and vacant land within the Gram Panchayat limits" : "ग्रामपंचायत हद्दीतील घरे आणि रिकाम्या जागांवर कर"}</li>
                    <li>{language === "en" ? "Business tax, travel tax, tax on the purchase and sale of animals" : "व्यवसाय कर, प्रवास कर, प्राण्यांच्या खरेदी-विक्रीवरील कर"}</li>
                    <li>{language === "en" ? "Grant from the state government in proportion to land revenue" : "जमीन महसुलाच्या प्रमाणात राज्य सरकारकडून अनुदान"}</li>
                    <li>{language === "en" ? "Grant from Zilla Parishad for development works." : "विकासकामांसाठी जिल्हा परिषदेकडून अनुदान."}</li>
                </ol>
                <br />
                <h3 className='font-bold text-2xl'>{language === "en" ? "Functions of Gram Panchayat" : "ग्रामपंचायतीची कार्ये"}</h3>
                <ol className='list-decimal mt-4 pl-8'>
                    <li>{language === "en" ? "Building and repairing roads in the village." : "गावात रस्ते बांधणे आणि दुरुस्ती करणे."}</li>
                    <li>{language === "en" ? "Keeping records of births, deaths and marriages." : "जन्म, मृत्यू आणि लग्नाच्या नोंदी ठेवणे."}</li>
                    <li>{language === "en" ? "Arranging street lighting, supplying drinking water and managing the sewage system." : "रस्त्यावरील दिव्यांची व्यवस्था करणे, पिण्याच्या पाण्याचा पुरवठा करणे आणि सांडपाणी व्यवस्था व्यवस्थापित करणे."}</li>
                    <li>{language === "en" ? "Providing facilities for education and health along with maintaining public hygiene" : "सार्वजनिक स्वच्छता राखण्याबरोबरच शिक्षण आणि आरोग्यासाठी सुविधा उपलब्ध करून देणे"}.</li>
                    <li>{language === "en" ? "Implementing plans for agricultural development and livestock improvement." : "कृषी विकास आणि पशुधन सुधारणेसाठी योजना राबवणे."}</li>
                    <li>{language === "en" ? "Organizing village markets, fairs, festivals, processions and religious events." : "गावातील बाजारपेठा, मेळे, उत्सव, मिरवणुका आणि धार्मिक कार्यक्रमांचे आयोजन करणे."}</li>
                    <li>{language === "en" ? "Proper utilization of taxes collected within the limits of the Gram Panchayat and funds received from the government." : "ग्रामपंचायतीच्या हद्दीत गोळा केलेल्या करांचा आणि सरकारकडून मिळालेल्या निधीचा योग्य वापर."}</li>
                </ol>
            </div>
        </div>
      
      <Footer />
    </div>

  )
}
