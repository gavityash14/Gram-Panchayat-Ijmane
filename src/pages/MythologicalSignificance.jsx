import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContext } from '../context/AppContext'

export default function MythologicalSignificance() {
  const { language } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-gray-200 px-10 py-10">
        <h1 className="text-black font-bold text-4xl">{language === "en" ? "Mythological Significance" : "पौराणिक महत्व"} </h1>
        <hr className='mt-5 mb-5' />
        
          <h2 className='font-bold'>{language === "en" ? "Historical events of Ijmane village.":"इजमाने गावातील ऐतिहासिक घटना."}</h2>
          {language === "en" ?
            (
          <ol className='list-decimal md:mt-4'>
            
          <li>Connection to the Mythological Landscape of Baglan</li>
            <ul className='list-disc md:pl-4'>
              <li>Located within Baglan taluka, Mangi–Tungi is connected to many ancient ascetics and Jain Tirthankaras.</li>
              <li>Hindu mythology links the hill to divine ascetic practices, and some traditions say ancient sages performed tapasya (penance) here.</li>
              <li>Villages around Baglan—including Ijamane—traditionally consider these hills sacred directions (देव दिशा) and offer prayers during certain festivals.</li>
              <li>In several Baglan villages, elders believe that Lord Rama, during his exile, passed through the hilly north Nashik belt.</li>
              <li>While not historically confirmed, villages accept this as oral tradition and often link local forests or streams to “पांडव/रामचंद्र पायवाट”.</li>
              <li>Like many villages in North Maharashtra, Ijamane also likely has stories connected to the Pandavas.</li>
              <li>A hill, cave, or old stone platform may be believed to be “Pandav cha paav” (पांडवांचा पाय ठेवलेली जागा).</li>
              <li>Sometimes an old well or rock is believed to have been created by Bhima with a strike of his mace.</li>
            </ul>

          <li>Local Deities & Village Protector Traditions</li>
            <ul className='list-disc md:pl-4'>
              <li>Gramdevata (Village Guardian Deity):Often believed to be: Khandoba,Gaondevi,Waghoba,or a local ancestor-turned-protector.These deities are believed to protect:the fields,the cattle, and the health of the village.</li>
              <li>Sacred Trees (देवाची झाडे):Villages maintain Neem, Audumbar or Banyan trees which are believed to be:seats of divine spirits, protectors from disease, or blessings for crop fertility.</li>
              <li>Swayambhu Stones / Natural Shrines: Some tribal and rural communities believe certain stones or mounds near fields: emerged automatically (“स्वयंभू”), represent a deity,or mark a mythological event.Ijamane likely has one such local sacred spot near its settlement or farmland.</li>
            </ul>

          <li>Tribal Mythology Influence (Bhil/Pawra traditions)</li>
            <ul className='list-disc md:pl-4'>
              <li>Nature Spirits:Forests, hills, and rivers are believed to have: guardian spirits, ancestral protectors, and seasonal deities controlling rain, crops, and hunting.</li>
              <li>Folk heroes and demi-gods:The Bhil tribal groups narrate stories of:warrior-ancestors, forest guardians, heroic hunters who became divine protectors.</li>
              <li>During that period, schools and the village panchayat system were established in the village, which remains the basis of administration even today.</li>
            </ul>

          <li>Mythological significance of the Gram Panchayat</li>
            <ul className='list-disc md:pl-4'>
              <li>Panchayat as “Panch Parmeshwar” (पंच परमेश्वर):A traditional belief across Maharashtra:“Panch ka faisla, Parmeshwar ka faisla.”(Meaning: The decision of the five elders is equal to divine judgement.)Thus, the village panchayat is seen as:morally sacred,guided by God’s justice,a protector of harmony.</li>
              <li>Panchayat inauguration traditions:When the gram panchayat of Ijamane was formed (modern records begin 1950s-60s): villagers first worshipped the gramdevta, sought blessings for justice, and performed purification rituals.</li>
              <li>This gives the gram panchayat a mythological role as a moral guardian, not just a government body.</li>
            </ul>
      
      </ol>)
      : (
        <ol className='list-decimal md:mt-4'>
          <li>बागलाणच्या पौराणिक भूदृश्याशी संबंध</li>
            <ul className='list-disc md:pl-4'>
              <li>बागलाण तालुक्यात स्थित, मांगी-तुंगी हे अनेक प्राचीन तपस्वी आणि जैन तीर्थंकरांशी जोडलेले आहे.</li>
              <li>हिंदू पौराणिक कथांनुसार या टेकडीचा संबंध दैवी तपस्वी पद्धतींशी जोडला जातो आणि काही परंपरांनुसार प्राचीन ऋषींनी येथे तपस्या केली.</li>
              <li>बागलाणच्या आसपासची गावे - इजामानेसह - पारंपारिकपणे या टेकड्यांना पवित्र दिशा (देव दिशा) मानतात आणि काही उत्सवांमध्ये प्रार्थना करतात.</li>
              <li>बागलाणच्या अनेक गावांमध्ये, वडीलधारी लोकांचा असा विश्वास आहे की भगवान राम त्यांच्या वनवासात असताना, उत्तर नाशिकच्या डोंगराळ पट्ट्यातून गेले होते.</li>
              <li>ऐतिहासिकदृष्ट्या पुष्टी नसली तरी, गावे हे मौखिक परंपरा म्हणून स्वीकारतात आणि बहुतेकदा स्थानिक जंगले किंवा ओढे "पांडव/रामचंद्र पायवाट" शी जोडतात.</li>
              <li>उत्तर महाराष्ट्रातील अनेक गावांप्रमाणे, इजामने येथेही पांडवांशी जोडलेल्या कथा आहेत:</li>
              <li>टेकडी, गुहा किंवा जुना दगडी प्लॅटफॉर्म हा "पांडव चा पाव" (पांडवांचा पाय ठेवलेली जागा) असल्याचे मानले जाऊ शकते.</li>
              <li>कधीकधी जुनी विहीर किंवा दगड भीमाने त्याच्या गद्याच्या प्रहाराने निर्माण केला असे मानले जाते.</li>
            </ul>

          <li>स्थानिक देवता आणि गावाचे रक्षक परंपरा</li>
            <ul className='list-disc md:pl-4'>
              <li>ग्रामदेवता (गावाचे रक्षक देवता): बहुतेकदा असे मानले जाते: खंडोबा, गावदेवी, वाघोबा, किंवा स्थानिक पूर्वजांपासून रक्षक बनलेले. हे देवता शेतांचे, गुरांचे आणि गावाच्या आरोग्याचे रक्षण करतात असे मानले जाते.</li>
              <li>पवित्र वृक्ष (देवाची झाडे): गावांमध्ये कडुनिंब, औदुंबर किंवा वटवृक्ष असतात जे दैवी आत्म्यांचे आसन, रोगांपासून रक्षक किंवा पिकाच्या सुपीकतेसाठी आशीर्वाद असल्याचे मानले जा.</li>
              <li>स्वयंभू दगड / नैसर्गिक तीर्थक्षेत्रे: काही आदिवासी आणि ग्रामीण समुदायांचा असा विश्वास आहे की शेतांजवळील काही दगड किंवा ढिगारे: आपोआप उद्भवतात ("स्वयंभू"), देवतेचे प्रतिनिधित्व करतात किंवा पौराणिक घटना चिन्हांकित करतात. इजामानेमध्ये कदाचित त्यांच्या वस्ती किंवा शेतजमिनीजवळ असेच एक स्थानिक पवित्र स्थान असेल.</li>
            </ul>

          <li>आदिवासी पौराणिक कथांचा प्रभाव (भिल्ल/पावरा परंपरा)</li>
            <ul className='list-disc md:pl-4'>
              <li>निसर्ग आत्मा: जंगले, टेकड्या आणि नद्या असे मानल्या जातात की: पालक आत्मा, पूर्वजांचे रक्षक आणि पाऊस, पिके आणि शिकार नियंत्रित करणारे हंगामी देवता.</li>
              <li>लोक नायक आणि अर्ध-देवता: भिल्ल आदिवासी गट योद्धा-पूर्वज, वनरक्षक, वीर शिकारी यांच्या कथा सांगतात जे दैवी रक्षक बनले..</li>
              <li>त्या काळात, गावात शाळा आणि ग्रामपंचायत व्यवस्था स्थापन झाली, जी आजही प्रशासनाचा आधार आहे.</li>
            </ul>

           <li>ग्रामपंचायतीचे पौराणिक महत्त्व</li>
            <ul className='list-disc md:pl-4'>
              <li>पंचायतीला "पंच परमेश्वर" (पंच परमेश्वर): महाराष्ट्रात पारंपारिक श्रद्धा आहे: "पंच का फैसला, परमेश्वर का फैसला." (अर्थ: पाच वडिलांचा निर्णय हा दैवी निर्णयासारखा आहे.) अशाप्रकारे, गाव पंचायतीला नैतिकदृष्ट्या पवित्र, देवाच्या न्यायाने मार्गदर्शन केलेली, सुसंवादाची रक्षक म्हणून पाहिले जाते.</li>
              <li>पंचायत उद्घाटन परंपरा: जेव्हा इजामानेची ग्रामपंचायत स्थापन झाली (आधुनिक नोंदी १९५०-६० च्या दशकापासून सुरू होतात): गावकऱ्यांनी प्रथम ग्रामदेवतेची पूजा केली, न्यायासाठी आशीर्वाद मागितले आणि शुद्धीकरण विधी केले..</li>
              <li>यामुळे ग्रामपंचायतीला केवळ सरकारी संस्था नव्हे तर नैतिक रक्षक म्हणून पौराणिक भूमिका मिळते.</li>
            </ul>
        </ol>
      )}
          
      </div>
      <Footer />
    </div>
  )
}
