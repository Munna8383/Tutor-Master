import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async(request,{params})=>{

    console.log(params.email)

    

    try{

        const db = await connectDB()


        const query = {email:params.email}

                


        const res = await db.collection("user").findOne(query)

        return NextResponse.json(res)

    }catch(error){

        return NextResponse.json({message:"Something Wrong"})

    }






}