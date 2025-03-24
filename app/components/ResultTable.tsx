import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ResultItem {
    Category: string;
    Details: string;
  }
  
  interface ResultTableProps {
    result: ResultItem[];
  }

const ResultTable: React.FC<ResultTableProps> = ({ result }) => {
  console.log("Result:", result);
  console.log("Type of Result:", typeof result);

  return (

            // Result Table Container
            // This div contains the table that displays the extracted data
            // It uses flexbox to center the table and allows horizontal scrolling if needed

            
            <div className="flex flex-col justify-center items-center col-span-6 overflow-x-auto my-8">
                <div className="w-[80%] ml-68">
                <Table className="w-[75%] border border-gray-200 shadow-lg">
                    <TableHeader className="bg-gray-300">
                    <TableRow>
                        <TableHead className="p-2 text-left w-44">Promp</TableHead>
                        <TableHead className="p-2 text-left break-words whitespace-pre-wrap">Details</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {result.map((item, index) => (
                        <TableRow key={index}>
                        <TableCell className="border border-gray-200 text-left p-2">{item.Category}</TableCell>
                        <TableCell className="border border-gray-200 text-left p-2 break-words whitespace-pre-wrap">
                            {item.Details ? item.Details : "No details available"}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </div>
            </div>
  );
};

export default ResultTable;
