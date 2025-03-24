"use client";
import { useState } from 'react';
import React, { Fragment } from 'react'
import PaymentMethod from './PaymentMethod'

const Payment = () => {
  const [Paymentopt, setPaymentOpt] = useState(false);
  return (


    // Using Fragment to avoid unnecessary divs in the DOM

    
    <Fragment>
      <div className='flex flex-col items-center'>
          <div className="m-4 bg-sky-200 p-6 rounded-lg shadown-lg border-2 border-sky-300 w-[75%]">
                  <button 
                  className="bg-purple-400 rounded-full px-8 py-2 mt-4 cursor-pointer hover:bg-purple-500"
                  onClick={()=> setPaymentOpt(true)}
                  >Buy Extra Credits</button>
                  <p className='italic font-light text-sm mt-2'>&quot;Unlock premium features – Make a secure payment now!&quot;</p>
          </div>
      </div>
    <PaymentMethod PaymentOption={Paymentopt} onClose={()=>setPaymentOpt(false)}/>
    </Fragment>
  )
}

export default Payment