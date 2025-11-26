import React from 'react'
import { zila_parishad_nashik } from '../assets/assets'

export default function Footer() {
  return (
    <div className='flex-row'>
        <div className='bg-gray-400 w-screen text-center'>© 2024 Khamlon Gram Panchayat. All rights reserved.</div>
        <div className='flex w-screen bg-gray-600 justify-center p-2'>
          <a href="https://share.google/iSzyD15dbJD4lEIvs">
            <img src={zila_parishad_nashik} alt="Paanchayati Raj" className='w-[150px] h-[150px] mix-blend-multiply invert-0 brightness-100 saturate-0' />
          </a>
        </div>
    </div>
  )
}
