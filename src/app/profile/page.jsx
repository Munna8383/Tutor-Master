import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  


const page = () => {
    return (
        <div className="w-11/12 mx-auto pt-32">
            <div className="text-center">

                <h1 className="text-3xl font-bold">My Profile</h1>
            </div>


            <div className="flex justify-center mt-10">
                <div className="w-4/12 p-5 space-y-5 text-center bg-white">

                <Image className="size-70 rounded-full mx-auto" width={70} height={70} src={"https://i.imghippo.com/files/DCeGg1727290832.png"}/>

                <h1>Name: <span>Jahed Ahmed Munna</span></h1>
                <h1>Email: <span>jahed munna612@gmail.com</span></h1>
                <h1>Role: <span>Student</span></h1>
                <Button variant="destructive">Logout</Button>
                


                </div>

                <div className="w=8/12 bg-gray-100">
                <Table>
  <TableCaption>A list of your Request.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>


                </div>
            </div>
        </div>
    );
};

export default page;