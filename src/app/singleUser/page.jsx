"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

const useRole = () => {

    const session = useSession()
    const {status}= useSession()

    const {data:person,isLoading}=useQuery({
        queryKey:["role",session?.data?.user?.email],
        enabled: status !=="loading" ,
        queryFn:async()=>{
            const res = await axios.get(`https://tutor-master-gules.vercel.app/singleUser/${session?.data?.user?.email}`)

            return res.data
        }
    })
    
    return [person,isLoading]
};

export default useRole;