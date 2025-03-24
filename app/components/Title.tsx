import React from 'react'

const Title = () => {
  return (
    <div className='mb-8 grid grid-cols-2 gap-2 pt-28 pb-16 mx-4'>
        <div className='flex items-center'>
            <h1 className='text-5xl font-bold text-purple-500 font-sans px-5'>AI-Powered Requirement Extraction with Credit Management</h1>
        </div>
        <div>
        <p className='font-light italic mx-4 pt-5'>
          &quot;The AI-Powered Requirement Extraction with Credit Management project utilizes AI to
           automatically extract key software requirements from user input.
           The application allows users to input requirements, processes the input using an API call, and extracts structured data.
            Integrated credit management allows users to track and manage
            credits for accessing premium features. This combination of AI insights and credit control optimizes
             resource allocation and enhances the evaluation process of software products and vendors.&quot;
        </p>
        </div>
    </div>
  )
}

export default Title