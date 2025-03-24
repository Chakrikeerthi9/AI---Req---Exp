import { NextApiRequest, NextApiResponse } from 'next';
import getResponse from "./api"; // Adjust the import path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { text } = req.body;
      const extractedData = await getResponse(text);
      console.log(extractedData, typeof extractedData); // Log the extracted data for debugging
      const result = [
        { Category: text, Details: extractedData }
      ];
      res.status(200).json({extractedData: result });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      console.error('Error processing request:', error)
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}