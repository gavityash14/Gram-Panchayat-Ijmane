import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Complaints() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <Header />
      <div className="bg-white  flex items-center justify-center py-10">
        {
          isLoading && (
            <div className='absolute inset-72 flex flex-col items-center justify-center bg-gray-600 z-10 border-2 border-black rounded-2xl'>
              <div className='w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin'></div>
              <p className='text-white'>Loading Form ...</p>
            </div>
          )
        }
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdS7z29SbY1rA-htt-zFmzPrWGtmJLXiNqGm42uL73WSoqHIg/viewform?embedded=true" width="640" height="1508" frameBorder="0" marginHeight="0" marginWidth="0" onLoad={() => setIsLoading(false)}>Loading…</iframe>
      </div>
      <Footer />
    </div>
  )
}
