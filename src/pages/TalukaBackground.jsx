import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function TalukaBackground() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-200 px-10 py-10">
        <h1 className="text-black font-bold text-4xl">{language === "en" ? "Taluka Background" : "तालुका पार्श्वभूमी"}</h1>
        <hr className='mt-5 mb-5' />
        <p>
          {language === "en" ?
            `Satana city is situated on the banks of the Aram river. This area is also known as Baglan. Malegaon city is at a distance of 40 to 50 kilometers from Satana and Nashik city is at a distance of 95 kilometers.

According to the 2001 census, the population of Satana city was 32,511, with 52% males and 48% females. The literacy rate of Satana is 75%, which is higher than the national average of 59.9%.

Baglan taluka is known as the taluka of forts. The taluka has forts like Salher, Mulher, Salota, Bhilai, Pisol, Hargad, Morgad, Nhavigad, Tambolya Gad, Hanuman Gad, Dermal, Tamragad, Karhegad, Chaulher Gad, Dundhagad, Bishtagad etc.

Baglan taluka has a great historical heritage and King Shivaji has a direct connection with this taluka. In Baglan taluka, a civil servant has been given the title of God and his temple has been built for his work and service to the poor. Even today, he is worshiped with great devotion. The citizens of the taluka know him as Devmamaledar. A grand temple has been built in Satana city and in the month of December, a grand procession is taken out and a yatra is held for about 10 to 12 days. On the occasion of the yatra, lakhs of devotees come to see Devmamaledar.`
            : `सटाणा शहर  हे आराम नदीच्या काठावर बसलेले आहे. या परिसराला बागलाण असेही संबोधले जाते. सटाण्यापासून ४० ते ५० किलोमीटर अंतरावर मालेगाव शहर व ९५ किलोमीटर अंतरावर नासिक शहर आहे.
२००१ च्या जनगणनेनुसार सटाणा शहराची लोकसंख्या ३२५११ इतकी होती आणि त्यात ५२% पुरुष आणि ४८ % स्रिया आहेत. सटाण्याची लोकसाक्षरता ७५% असून ती भारताच्या सरासरी साक्षरतेपेक्षा (५९.९%) जास्त आहे. 
बागलाण तालुक्याला किल्यांचा तालुका म्हणुन ओळखले जाते.तालुक्यात साल्हेर,मुल्हेर,सालोटा,भिलाई,पिसोळ,हरगड,मोरगड,न्हावीगड,तांबोळ्या गड,हनुमान गड,डेरमाळ,ताम्रगड,कर्हेगड,चौल्हेर गड,दुन्धागड,बिष्टागड इ. गड/किल्ले आहेत.
बागलाण तालुक्याला खूप मोठा ऐतिहासिक वारसा लाभला असुन राजे शिवाजी यांचा थेट सबंध या तालुक्याशी येतो.
बागलाण तालुक्यात एका सनदी अधिकार्याला तांच्या कर्तबगारी,गोरगरिबांची केलेली सेवा यामुळे देवाची उपाधी देऊन त्यांचे मंदिर बांधण्यात आले आहे. आजही मोठ्या श्रद्धेने त्यांची पूजा होत आहे.तालुक्यात नागरिक त्यांना देवमामलेदार म्हणुन ओळखतात.सटाणा शहरात त्यांचे भव्य मंदिर उभारले असुन माहे डिसेंबर मध्ये त्यांची दिमाखात मिरवणुक निघते व साधारणतः १० ते १२ दिवस यात्रा भरते यात्रे निमित्त लाखो भाविका देवमामले दारांच्या दर्शनासाठी येत असतात.
`
          }
        </p>
      </div>
      <Footer />
    </div>
  )
}
