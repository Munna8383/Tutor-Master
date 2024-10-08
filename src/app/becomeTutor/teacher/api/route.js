import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async()=>{


    try{

        const db = await connectDB()

        const teacherCollection= db.collection("teacher")

        const result = await teacherCollection.find().toArray()

        return NextResponse.json({result})


      

    }catch(error){

        return NextResponse.json({message:"Something Wrong"})

    }



}