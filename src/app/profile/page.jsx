"use client"
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
import { useSession } from "next-auth/react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useRole from "../singleUser/page";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useToast } from "@/hooks/use-toast";
  


const page = () => {

  
  const session = useSession()
  const [person,isLoading]=useRole()
  const { toast } = useToast()

  const {data:list,isLoading:loading,refetch}=useQuery({
      queryKey:["list",session?.data?.user?.email],
      enabled:!isLoading,
      queryFn:async()=>{
          const res = await axios.get(`http://localhost:3000/profile/${session?.data?.user?.email}`)

          return res.data
      }
  })


  const handleAccept=async(id)=>{

 

    const res = await axios.patch(`https://tutor-master-gules.vercel.app/profile/accept/api/${id}`)



    if(res.data.message=="accepted"){

      toast({
        description: "Accepted."
      })

      refetch()


    }else{


      toast({
        description: "Something Wrong.",
        variant:"destructive"
      })
    }




  }


  const handleReject=async(id)=>{



    const res = await axios.patch(`https://tutor-master-gules.vercel.app/profile/reject/api/${id}`)

    console.log(res.data)


    if(res.data.message=="rejected"){

      toast({
        description: "Rejected."
      })

      refetch()


    }else{


      toast({
        description: "Something Wrong.",
        variant:"destructive"
      })
    }




  }











    return (
        <div data-aos="zoom-in" className="w-11/12 mx-auto pt-28">
            <div className="text-center">

                <h1 className="text-3xl font-bold">My Profile</h1>
            </div>


            <div className="flex flex-col lg:flex-row  justify-center items-stretch mt-10">
                <div className="w-full lg:w-4/12 shadow-sm shadow-gray-600 p-5 space-y-5 text-center bg-gray-200">

                {isLoading?<div className=" size-70 rounded-full bg-slate-200 text-center">Loading</div>:<Image className="size-70 rounded-full mx-auto" width={70} height={70} alt="image" src={person?.image}/>} 

                <h1>ID: <span>{isLoading?"loading":person?._id}</span></h1>
                <h1>Name: <span>{isLoading?"loading":person?.name}</span></h1>
                <h1>Email: <span>{isLoading?"loading":person?.email}</span></h1>
                <h1>Role: <span>{isLoading?"loading":person?.role}</span></h1>
                


                </div>

                <div className="w-full lg:w=8/12 bg-gray-100">
                <Table>
  <TableCaption>A list of your Request.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Phone</TableHead>
      <TableHead>Location</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>{
    
      list?.map((item,index)=>  <TableRow key={index}>
     <TableCell>{item?.name}</TableCell>
     <TableCell>{item?.phone}</TableCell>
     <TableCell>{item?.location}</TableCell>
     <TableCell>{item?.status}</TableCell>
    {item?.status=="pending" &&  <TableCell><div className="flex gap-4"><button onClick={()=>handleAccept(item._id)} ><FaCheck className="text-green-600 text-lg" /></button><button  onClick={()=>handleReject(item._id)} ><ImCross  className="text-red-600 text-lg"/></button></div></TableCell>}
   </TableRow>)
    
    
    }
  </TableBody>
</Table>


                </div>
            </div>
        </div>
    );
};

export default page;