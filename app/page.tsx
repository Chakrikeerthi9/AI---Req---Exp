"use client"
import Image from "next/image";
import Header from "./components/Header";
import RequirementForm from "./components/RequirementForm";
import ResultTable from "./components/ResultTable";
import Title from "./components/Title";
import Payment from "./components/Payment";
import Footer from "./components/Footer"
import { useState } from "react";
import axios from 'axios';

interface ExtractedData {
  Category: string;
  Details: string;
}


export default function Home() {
  const [count, setCount] = useState(20); // Initialize count to 20
  const [data, setData] = useState<ExtractedData[]>([]);


  // Function to handle the extraction of data
  const handleExtract = async (requirement:string) =>{
    try {const res= await axios.post('/api', {text: requirement});
        const extractedData = res.data.extractedData;
        setData((prevResults:ExtractedData[]) => [...prevResults, ...extractedData]); // Append new results to the existing state
      }
    catch (error) {
          console.error('Error:', error);
        }
  }


  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-500 bg-cover h-full text-center" >
      <div className="max-w-8xl mx-auto bg-sky-50 rounded-lg shadow-lg">
        <Header />
        <Title />
        <RequirementForm setCount={setCount} onExtract={handleExtract}/>
        <ResultTable result={data} />
        <Payment />
        <Footer />
      </div>
    </div>
  )
}
