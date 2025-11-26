import React from 'react'
import Header from '../components/Header'
import { sarpanch, deputy_sarpanch, panchayat_memeber_1, panchayat_memeber_2, panchayat_officer, panchayat_staff_1, } from '../assets/assets'
import Footer from '../components/Footer'


export default function ContactUs() {
  return (
    <div>
      <Header />
      <div className="bg-black  flex items-center justify-center px-4 py-4 md:px-10 md:py-10">
        <div className="bg-gray-600 rounded-2xl p-2 md:p-8 w-full text-center">
          <h1 className="text-white font-bold text-3xl mb-8">Contact Us</h1>

          <div className="flex flex-row gap-10 justify-center items-center text-white">
            {/* Sarpanch */}
            <div className="flex flex-col items-center">
              <img
                src={sarpanch}
                alt="sarpanch"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">सौ.संगीता शशिकांत धोंडगे </h2>
              <h3 className="text-[10px] md:text-[16px]">माननीय सरपंच इजामाने</h3>
              <h3 className="text-[10px] md:text-sm">मो. 7757921125</h3>
            </div>

              {/* Deputy Sarpanch */}
             <div className="flex flex-col items-center">
              <img
                src={deputy_sarpanch}
                alt="deputy_sarpanch"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
                />
                <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.गोरख दिलीप गायकवाड </h2>
                <h3 className="text-[10px] md:text-[16px]">उपसरपंच</h3>
                <h3 className="text-[10px] md:text-sm">मो. 7021197424</h3>
                </div>

            {/* Panchayat Officer */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_officer}
                alt="panchayat_officer"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.छोटीराम लोटन पाथरे  </h2>
              <h3 className="text-[10px] md:text-[16px]">पंचायत अधिकारी</h3>
              <h3 className="text-[10px] md:text-sm">मो. 9226345632</h3>
            </div>
          </div>

           {/* Panchayat Members */}
          <h1 className="text-green-500 font-bold text-2xl mb-8 mt-8 text-center">
            ग्रामपंचायत सदस्य
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center text-white">
            {/* Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_memeber_1}
                alt="panchayat member"
                className="h-[200px] w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-lg font-semibold">श्री. धनंजय शशिकांत धोंडगे</h2>
              </div>
            {/* Member 2 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_memeber_2}
                alt="panchayat member"
                className="h-[200px] w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-lg font-semibold">श्री.जयेंद्रे निंबा म्हसदे</h2>
              </div>
            </div>

          {/* Staff */}
          <h1 className='text-green-500 font-bold text-2xl mb-8 mt-8'>कर्मचारी वृंद</h1>
          <div className="flex justify-center text-white">
            {/* Staff 1 */}
            <div className="flex flex-col items-center">
              <img
                src={panchayat_staff_1}
                alt="staff 1"
                className="h-[60px] w-[60px] md:h-[200px] md:w-[200px] object-cover rounded-full"
              />
              <h2 className="mt-3 text-[12px] md:text-lg font-semibold">श्री.मनोहर रमेश तळोदेकर </h2>
              <h3 className="text-[10px] md:text-[16px]">ग्रामपंचायत शिपाई</h3>
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-white mt-16 gap-4 md:px-20 md:pb-20 md:pt-10'>
            <div className='md:w-[100%] rounded-2xl overflow-hidden'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4107.388274896256!2d74.33233127937115!3d20.757237332403623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdef3481e814953%3A0x75727d84f1a5e987!2sIjmane%2C%20Maharashtra%20423204!5e0!3m2!1sen!2sin!4v1764186883628!5m2!1sen!2sin" width="600" height="450" allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='flex-row text-start py-4 px-10 bg-gray-500 md:ml-5 rounded-2xl self-center w-full md:h-[450px]'>
              <h3 className='font-bold text-2xl text-center'>Gram Panchayat, Ijmane</h3>
              <hr className='mt-4 mb-4' />
              <p className='md:text-[18px] md:pt-4'><strong>Email Id:</strong> nskgpezamne13@gmail.com</p>
              <p className='md:text-[18px] md:pt-4'><strong>LGD Code: </strong>182638</p>
              <p className='md:text-[18px] md:pt-4'><strong>Censes Code: </strong>550059</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
