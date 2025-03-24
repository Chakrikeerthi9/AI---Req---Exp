"use client"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface RequirementFormProps {
    setCount: (count : number) => void; // function to update the count
    onExtract: (requirement: string) => void; // function to handle the extraction of details
}

const RequirementForm: React.FC<RequirementFormProps> = ({setCount,onExtract}) => {
    const [count,setCountStatus] = useState(20);
    const [requirement, setRequirement] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

  return (

    // Requirement Form Container
    <div className='bg-gray-50 p-6'>
      <div  className="flex flex-row justify-center">
        <Textarea className='border-2 border-gray-300 rounded-md p-2 w-138 h-25'
        rows={10}
        cols={50}
        placeholder="Enter your requirements here..."
        onChange={(e)=> setRequirement(e.target.value)}
        />
      </div>
        <div className="flex flex-column gap-6 justify-center my-2">
            <p className={`mr-10 text-md italic ${(count < 5 )? 'bg-red-400' : (count < 10) ? 'bg-yellow-400':'bg-green-400'} rounded-full pt-2 px-3`}>Avaliable Credit in your account :<strong>{count}</strong></p>
            <button 
            className='border-none bg-sky-500 px-4 ml-16 py-2 rounded-full text-white cursor-pointer hover:bg-sky-600 disabled:bg-gray-300 disabled:cursor-not-allowed'
            onClick={() => {
                if (requirement === "") {
                  setIsEmpty(true);
                } else {
                  setCountStatus(count - 1);
                  onExtract(requirement);
                  console.log(setCount);
                }
              }}
            disabled={count === 0}
            >
                Extract Details
            </button>
        </div>
        {
            isEmpty && <p className="text-red-500 font-bold text-md my-4">Enter something .....!</p>
        }
        {
            count === 0 ? <p className="text-red-500 font-bold text-xl my-4">&quot;You have reached the limit. Please purchase more credits to continue.&quot;</p>: null
        }
    </div>
  )
}

export default RequirementForm