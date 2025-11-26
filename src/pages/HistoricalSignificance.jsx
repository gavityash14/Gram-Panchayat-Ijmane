import React,{useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function HistoricalSignificance() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-200 px-10 py-10">
        <h1 className='text-black font-bold text-4xl' >{(language === "en" )? "Historical Significance" : " ऐतिहासिक महत्व"}</h1>
        <hr className='mt-5 mb-5' />
        <h2 className='md:mb-4'>{(language === "en")? `Ijmane is a village located in Taluka Baglan, District Nashik (Maharashtra). The village has been inhabited since ancient times and has been linked to agriculture, culture and society for generations.`:"इजामाने हे नाशिक जिल्ह्यातील बागलाण तालुक्यात वसलेले एक गाव आहे. हे गाव प्राचीन काळापासून वसलेले आहे आणि पिढ्यानपिढ्या शेती, संस्कृती आणि समाजाशी जोडलेले आहे."}</h2>
        {(language === "en")?

        (<ol className='list-decimal'>
          <li >Baglan has been historically important because it lies between two hill-ranges (the Selbari and Dolbari ranges) that guard the ancient trade route connecting the Mughal-era trade city of Surat to the Deccan interior (e.g. Golconda, central India). The route passed through Baglan and was vital for commerce and movement</li>
          <li>To protect and oversee this route, several forts were built in Baglan — including Salher, Mulher Fort, Mora Fort, and other hill-forts.</li>
          <li>The Salher Fort is especially significant: in 1671 it was captured by Chhatrapati Shivaji Maharaj during the Maratha expansion.</li>
          <li>In 1672, the historic Battle of Salher was fought there — regarded as the first big pitched-field battle where the Marathas defeated the Mughal forces.</li>
          <li>Control of Baglan (with its forts) thus gave strategic advantage to whoever held the region: controlling trade routes, securing passes, enabling raids/defense, which was critical during the 17th-century Maratha–Mughal power struggles.</li>
          <li>Over time, the region — with its forts, passes and tribal populations — developed as a frontier zone: first under local rulers (the older Bagul/Bagul dynasty), then under Mughal influence, then as part of the Maratha empire under Shivaji, and later under Peshwas, and finally under British rule.</li>          
       </ol>):
       (<ol className='list-decimal'>
          <li>बागलाण हे ऐतिहासिकदृष्ट्या महत्त्वाचे आहे कारण ते दोन डोंगररांगांमध्ये (सेलबारी आणि डोलबारी रांगांमध्ये) आहे जे मुघल काळातील व्यापारी शहर सुरतला दख्खनच्या आतील भागात (उदा. गोलकोंडा, मध्य भारत) जोडणाऱ्या प्राचीन व्यापारी मार्गाचे रक्षण करतात. हा मार्ग बागलाणमधून जात होता आणि व्यापार आणि हालचालीसाठी महत्त्वाचा होता.</li>
          <li>या मार्गाचे संरक्षण आणि देखरेख करण्यासाठी, बागलाणमध्ये अनेक किल्ले बांधण्यात आले - ज्यात साल्हेर, मुल्हेर किल्ला, मोरा किल्ला आणि इतर डोंगरी किल्ले यांचा समावेश आहे.</li>
          <li>साल्हेर किल्ला विशेषतः महत्त्वाचा आहे: १६७१ मध्ये मराठा विस्तारादरम्यान छत्रपती शिवाजी महाराजांनी तो ताब्यात घेतला होता.</li>
          <li>१६७२ मध्ये, साल्हेरची ऐतिहासिक लढाई तेथे लढली गेली - जिथे मराठ्यांनी मुघल सैन्याचा पराभव केला होता ती पहिली मोठी मैदानी लढाई मानली जाते.</li>
          <li>बागलानवरील नियंत्रण (त्याच्या किल्ल्यांसह) अशा प्रकारे ज्यांनीही या प्रदेशावर ताबा मिळवला त्यांना धोरणात्मक फायदा मिळाला: व्यापारी मार्गांवर नियंत्रण ठेवणे, प्रवेशद्वार सुरक्षित करणे, छापे/संरक्षण सक्षम करणे, जे १७ व्या शतकातील मराठा-मुघल सत्ता संघर्षादरम्यान महत्त्वाचे होते.</li>
          <li>कालांतराने, हा प्रदेश - त्याच्या किल्ले, प्रवेशद्वार आणि आदिवासी लोकसंख्येसह - एक सीमावर्ती क्षेत्र म्हणून विकसित झाला: प्रथम स्थानिक शासकांच्या (जुन्या बागुल/बागुल राजवंशाच्या) अंतर्गत, नंतर मुघल प्रभावाखाली, नंतर शिवाजी महाराजांच्या अंतर्गत मराठा साम्राज्याचा भाग म्हणून आणि नंतर पेशव्यांच्या अंतर्गत आणि शेवटी ब्रिटिश राजवटीखाली.</li>
       </ol>)}
      </div>
      <Footer />
    </div>
  )
}
