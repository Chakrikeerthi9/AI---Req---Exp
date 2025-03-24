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

            
            <div className="mx-24">
              <Table>
                    <TableHeader className="bg-gray-300">
                    <TableRow>
                        <TableHead className="p-2 text-left ">Promp</TableHead>
                        <TableHead className="p-2 text-left ">Details</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {result.map((item, index) => (
                        <TableRow key={index}>
                        <TableCell className="border border-gray-200 text-left p-2">{item.Category}</TableCell>
                        <TableCell className="border border-gray-200 text-left p-2">
                            {item.Details ? item.Details : "No details available"}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </div>
  )
};

export default ResultTable;
