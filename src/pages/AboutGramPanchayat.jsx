import React, { useState, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext';

export default function AboutGramPanchayat() {
  const [field, setField] = useState('overview');
  const { language } = useContext(AppContext);
  const tabClass = (isActive, isFirst) => {
    const base = 'border-2 bg-cyan-300 rounded-2xl text-center py-1 px-4 hover:bg-amber-300 cursor-pointer transition';
    const spacing = isFirst ? '' : 'mt-4';
    const active = 'bg-amber-300 text-white';
    const inactive = 'bg-cyan-300 text-black';
    return `${base} ${spacing} ${isActive ? active : inactive}`;
  }
  const tabs = [
    { key: 'overview', en: 'Overview', mr: 'आढावा'},
    { key: 'demographics', en: 'Demographics', mr: 'लोकसंख्या'},
    { key: 'education', en: 'Education', mr: 'शिक्षण'},
    { key: 'culture', en: 'Culture', mr: 'संस्कृती'}
  ];

  const details = {
    overview: {
      title: "Ijmane Gram Panchayat",
      details: `Ijamane is a village in Baglan (Satana) taluka of Nashik district, Maharashtra. It is governed locally by the Ijamane (listed as “Ejamane”) Gram Panchayat. The geographical area of the village is approximately 525 hectares.<br />The village of Ijmane was included in the village panchayat. The village panchayat was established in 1965 and has a total of 7 members, out of which 2 seats are reserved for women and 3 seats are reserved for men.<br />According to the 2011 census, the total population of Khamlon village is 968, out of which 148 are SC and 489 are ST. Total households are 178.`,
      mr_title: "खामलोन ग्रामपंचायत",
      mr_details: `इजामने हे महाराष्ट्रातील नाशिक जिल्ह्यातील बागलाण (सटाणा) तालुक्यातील एक गाव आहे. स्थानिक पातळीवर इजामने ("एजामने" म्हणून सूचीबद्ध) ग्रामपंचायतीद्वारे हे गाव शासित आहे. गावाचे भौगोलिक क्षेत्रफळ अंदाजे ५२५ हेक्टर आहे.
<br />
इजामने हे गाव ग्रामपंचायतीत समाविष्ट होते. १९६५ मध्ये ग्रामपंचायतीची स्थापना झाली आणि त्यात एकूण ७ सदस्य आहेत, त्यापैकी २ जागा महिलांसाठी राखीव आहेत आणि ३ जागा पुरुषांसाठी राखीव आहेत.
<br />
इजामने गावाची एकूण लोकसंख्या ९६८ आहे, त्यापैकी १४८ अनुसूचित जाती आणि ४८९ अनुसूचित जमाती आहेत. एकूण कुटुंबे १७८ आहेत.`
    },
    demographics: {
      title: "Population and Geographic Information",
      details: `The population of the Gram Panchayat according to the 2011 census: Total-968.<br />
      Geographic area of the village: 525.00 hectares:<br />
      • Irrigated area-283.00 hectares<br />
      • Forest area-0.00 hectares<br />
      • Total area under high slope areas, barren lands and other common lands-201.85 hectares<br />
      • Area under Fallow Lands-39.81 hectares<br />
      • Women Operational Holdings (Land) and jointly help by women-188.86 hectares<br />
      • River bed-5.00 hectares<br />
      • Roads, canals, pipelines-5.00 hectares<br />
      • Area Under Cultivation-323.00 hectares<br />
      Distance from taluka: 27 km, Distance from district: 117 km.`,
      mr_title: "लोकसंख्या आणि भौगोलिक माहिती",
      mr_details: `ग्रामपंचायतीची लोकसंख्या सन-२०११ च्या जनगणना नुसार:
<br />
एकूण 1661 एवढी आहे.
<br />
गावाचे भौगोलिक क्षेत्र 525.00 हेक्टर आहे:
<br />
• बागायत क्षेत्र- 283.00 हेक्टर
<br />
• वनक्षेत्र-0.00 हेक्टर
<br />
• उंच उताराचे क्षेत्र, नापीक जमीन आणि इतर सामान्य जमिनींखालील एकूण क्षेत्र - २०१.८५ हेक्टर
<br />
• महिला कार्यकारी धारण (जमीन) आणि महिलांच्या संयुक्त मदतीने - १८८.८६ हेक्टर
<br />
• नदीपात्र-५.०० हेक्टर
<br />
• रस्ते, कॅनोल, नळमार्ग-५.०० हेक्टर
<br />
• लागवडीखालील क्षेत्र-३२३.०० हेक्टर
<br />
गावापासून तालुक्याचे अंतर 27 कि.मी. व जिल्ह्याचे अंतर 117 कि.मी. आहे.`,
    },
    education: {
      title: "Educational Facilities",
      details: `Educational facilities under the Gram Panchayat:<br />
      Zilla Parishad Primary Schools-1<br />
      • Ijmane (Grades 1-4): Boys-19, Girls-24<br />
      Anganwadi Centers-2<br />
      • Children aged 0-6 years: Boys-67, Girls-60<br /
      Library-1`,
      mr_title: "शैक्षणिक सुविधा",
      mr_details: `ग्रामपंचायत अंतर्गत शैक्षणिक सुविधा:
<br />
जि.प.प्राथमिक शाळा-1
<br />
• खामलोन (वर्ग 1 ते 4): मुले-19, मुली-24
<br />
अंगणवाडी केंद्र-2
<br />
• 0 ते 6 वर्ष वयोगटातील मुले-67, मुली-60
<br />
वाचनालय-१`,
    },
    culture: {
      title: "Cultural Information",
      details: `People & community composition:<br />
      • Ijamane has a large Scheduled-Tribe (ST) population (≈481 people in 2011), plus SC and other groups — so tribal customs and community life are important locally.<br />
      • At the taluka level, the native/major tribal groups in Baglan include Bhil / Bhilala / Pawra / Vasava and related communities; these communities influence local cultural practices.<br /><br />
      Language & oral culture:<br />
      • Marathi is the main language; local speech will also show Ahirani / Khandeshi influences (Ahirani is commonly spoken in parts of Baglan/Nashik). Expect local idioms, proverbs and folk songs in Ahirani/Marathi.<br /><br />
      Major festivals & religious life:<br />
      • The village follows the typical Maharashtrian calendar: Ganeshotsav, Diwali, Holi, Navratri, Dussehra — these are celebrated with community rituals, processions and bhandara (community feast). (Typical for Baglan villages.)<br />
      • Local jatras / gram devta festivals: small villages usually host annual temple fairs (jatras) or deity-specific festivals where neighbouring villages attend — expect one or more local jatras tied to the village’s temples or tribal deities. (Ijamane’s exact jatra names/dates are not in public sources.)<br /><br />
      Temples, sacred places & nearby pilgrimage sites:<br />
      • The Baglan area contains important religious hills and temples (for example Mangi-Tungi is a major sacred place with an annual Kartik fair). Villagers from Ijamane likely participate in taluka-level pilgrimages and fairs.<br />
      • I could not find an online list of specific temples inside Ijamane (name/location). Those are normally recorded locally in the gram panchayat or temple-trust registers.<br /><br />
      Folk arts, music & performance:<br />
      • Expect bhajan/kirtan, local folk singers, and possibly tribal dance forms (regional Bhil/Bhilala dance forms) at festivals and life-cycle events. Community-sponsored devotional singing and bhajan evenings are common in Baglan villages.<br />`,
      mr_title: "सांस्कृतिक माहिती",
      mr_details: `लोक आणि समुदाय रचना:
<br />
• इजामाने येथे अनुसूचित जमाती (एसटी) लोकसंख्या मोठी आहे (२०११ मध्ये ≈४८१ लोक), तसेच अनुसूचित जाती आणि इतर गट - त्यामुळे स्थानिक पातळीवर आदिवासी रीतिरिवाज आणि समुदाय जीवन महत्त्वाचे आहे.<br />
• तालुका पातळीवर, बागलाणमधील स्थानिक/प्रमुख आदिवासी गटांमध्ये भिल्ल/भिलाला/पवडा/वसावा आणि संबंधित समुदायांचा समावेश आहे; हे समुदाय स्थानिक सांस्कृतिक पद्धतींवर प्रभाव पाडतात.<br />
<br />
भाषा आणि मौखिक संस्कृती:<br />
• मराठी ही मुख्य भाषा आहे; स्थानिक भाषेत अहिराणी/खान्देशी प्रभाव देखील दिसून येईल (बागलाण/नाशिकच्या काही भागात अहिराणी सामान्यतः बोलली जाते). अहिराणी/मराठीमध्ये स्थानिक वाक्प्रचार, म्हणी आणि लोकगीते अपेक्षित आहेत.<br />
<br />
प्रमुख सण आणि धार्मिक जीवन:<br />
• गाव सामान्य महाराष्ट्रीयन कॅलेंडरचे पालन करते: गणेशोत्सव, दिवाळी, होळी, नवरात्र, दसरा - हे सामुदायिक विधी, मिरवणुका आणि भंडारा (सामुदायिक मेजवानी) सह साजरे केले जातात. (बागलाण गावांसाठी सामान्य.)<br />
• स्थानिक जत्रा / ग्राम देवता उत्सव: लहान गावांमध्ये सहसा वार्षिक मंदिर मेळे (जत्रा) किंवा देव-विशिष्ट उत्सव आयोजित केले जातात जिथे शेजारची गावे उपस्थित राहतात — गावातील मंदिरे किंवा आदिवासी देवतांशी जोडलेल्या एक किंवा अधिक स्थानिक जत्रा अपेक्षित असतात. (इजामानेच्या जत्रेची नेमकी नावे/तारखा सार्वजनिक स्त्रोतांमध्ये नाहीत.)<br />
<br />
मंदिरे, पवित्र स्थळे आणि जवळील तीर्थस्थळे:<br />
• बागलाण परिसरात महत्त्वाचे धार्मिक टेकड्या आणि मंदिरे आहेत (उदाहरणार्थ मांगी-तुंगी हे वार्षिक कार्तिक मेळा असलेले एक प्रमुख पवित्र ठिकाण आहे). इजामान येथील ग्रामस्थ कदाचित तालुकास्तरीय तीर्थयात्रा आणि मेळ्यांमध्ये सहभागी होतात.<br />
• मला इजामानेच्या आत (नाव/स्थान) विशिष्ट मंदिरांची ऑनलाइन यादी सापडली नाही. ती सामान्यतः ग्रामपंचायत किंवा मंदिर-ट्रस्ट रजिस्टरमध्ये स्थानिक पातळीवर नोंदवली जातात.<br />
<br />
लोककला, संगीत आणि सादरीकरण:<br />
• उत्सव आणि जीवनचक्र कार्यक्रमांमध्ये भजन/कीर्तन, स्थानिक लोक गायक आणि शक्यतो आदिवासी नृत्य प्रकार (प्रादेशिक भिल्ल/भिलाला नृत्य प्रकार) अपेक्षित असतात. बागलाण गावांमध्ये समुदाय-प्रायोजित भक्तीगीत आणि भजन संध्याकाळ सामान्य आहेत.<br />`,
    }
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col md:flex-row bg-gray-200 px-10 gap-5 py-10 md:h-[550px] justify-center'>
        <h1 className='text-black font-bold text-4xl self-center hidden md:flex' dangerouslySetInnerHTML={{ __html: (language === "en") ? "About <br />Gram <br />Panchayat" : "ग्रामपंचायतीबद्दल" }}></h1>
        <h1 className='text-black font-bold text-4xl self-center flex md:hidden text-center' dangerouslySetInnerHTML={{ __html: (language === "en") ? "About <br />Gram Panchayat" : "ग्रामपंचायतीबद्दल" }}></h1>
        <div className='flex-col self-center'>
          {tabs.map((tab,idx) => (
            <div
            key={tab.key}
            onClick={() => setField(tab.key)}
            className={tabClass(field === tab.key, idx === 0)}
            >
              {language === "en" ? tab.en : tab.mr}
            </div>
          ))}
        </div>

        <div className='flex max-w-[760px] flex-col bg-white rounded-2xl p-5 w-full mt-4 md:mt-0 max-h-[80vh] overflow-y-auto'>
          <h1 className='font-bold text-[18px]'>{language === "en" ? details[field].title : details[field].mr_title}</h1>
          <hr />
          <div className='mt-4' dangerouslySetInnerHTML={{ __html: (language === "en") ? details[field]?.details : details[field]?.mr_details }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
