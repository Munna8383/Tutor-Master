import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async(request)=>{

    const newUser = await request.json()

    try{

        const db = await connectDB()

        const userCollection= db.collection("user")

        const exist = await userCollection.findOne({email:newUser.email})

        if(exist){
            return Response.json({message:"user exist"})
        }

        const res = await userCollection.insertOne(newUser)

        return NextResponse.json({message:"user Created"})

    }catch(error){

        return NextResponse.json({message:"Something Wrong"})

    }






}