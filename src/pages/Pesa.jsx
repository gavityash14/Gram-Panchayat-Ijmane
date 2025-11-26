import React,{useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function Pesa() {
  const { language } = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-6 md:p-20 w-full text-center flex-row">
            <div className='flex'>
                <h1 className='text-white font-bold text-4xl' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{language === "en" ? "PESA" : "पेसा"}</h1>
                <a className=' self-end text-blue-700' href="https://panchayat.gov.in/en/pesa/">(Visit Official Website)</a>
            </div>
            <p className='text-white text-start mt-10'>
              {language === "en" ?
                `The PESA Act, also known as the "Panchayat Extension to Scheduled Areas Act, 1996", gives the tribal communities in the scheduled areas the right to self-governance. This law empowers Gram Sabhas to make decisions in a traditional manner, enabling development works to be carried out according to local needs and empowering the community. The aim of this law is to make people in tribal areas more active in the decision-making process. Main objectives and features of PESA Act: Self-Governance: By giving Gram Sabhas the right to self-governance, the decision-making process is brought to the local level. Local Needs: Gram Sabhas can identify the needs in their area and undertake development works accordingly. Authority to Gram Sabha: Gram Sabhas get the right to control land, water and natural resources. Empowerment of Tribal Communities: This law empowers tribal communities by giving them their rights and entitlements. Legal Implementation: This law came into force after the 73rd Amendment of 1992, which gave constitutional status to the Panchayati Raj system. Availability of Funds: Under PESA, 5% of the funds are made available to the Gram Panchayats in the tribal areas, so that they can work for local development.`
                : `"पंचायत विस्तारित क्षेत्र कायदा, १९९६" म्हणून ओळखला जाणारा पेसा कायदा अनुसूचित क्षेत्रातील आदिवासी समुदायांना स्वराज्याचा अधिकार देतो. हा कायदा ग्रामसभांना पारंपारिक पद्धतीने निर्णय घेण्यास सक्षम करतो, ज्यामुळे स्थानिक गरजांनुसार विकास कामे करता येतात आणि समुदायाला सक्षम बनवता येतो. या कायद्याचे उद्दिष्ट आदिवासी भागातील लोकांना निर्णय प्रक्रियेत अधिक सक्रिय करणे आहे. पेसा कायद्याची मुख्य उद्दिष्टे आणि वैशिष्ट्ये: स्वराज्य: ग्रामसभांना स्वराज्याचा अधिकार देऊन, निर्णय घेण्याची प्रक्रिया स्थानिक पातळीवर आणली जाते. स्थानिक गरजा: ग्रामसभा त्यांच्या क्षेत्रातील गरजा ओळखू शकतात आणि त्यानुसार विकास कामे करू शकतात. ग्रामसभेचे अधिकार: ग्रामसभांना जमीन, पाणी आणि नैसर्गिक संसाधनांवर नियंत्रण ठेवण्याचा अधिकार मिळतो. आदिवासी समुदायांचे सक्षमीकरण: हा कायदा आदिवासी समुदायांना त्यांचे हक्क आणि हक्क देऊन त्यांना सक्षम करतो. कायदेशीर अंमलबजावणी: हा कायदा १९९२ च्या ७३ व्या घटनादुरुस्तीनंतर अंमलात आला, ज्यामुळे पंचायती राज व्यवस्थेला घटनात्मक दर्जा मिळाला. निधीची उपलब्धता: पेसा अंतर्गत, आदिवासी भागातील ग्रामपंचायतींना ५% निधी उपलब्ध करून दिला जातो, जेणेकरून त्या स्थानिक विकासासाठी काम करू शकतील.`
              }
            </p>
        </div>
      </div>
      <Footer />
    </div>

  )
}
