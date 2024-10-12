import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async(request)=>{

    const newRequest = await request.json()


    try{

        const db = await connectDB()

        const requestCollection= db.collection("request")


        const res = await requestCollection.insertOne(newRequest)

        return NextResponse.json({message:"Requested"})

    }catch(error){

        return NextResponse.json({message:"Something Wrong"})

    }






}