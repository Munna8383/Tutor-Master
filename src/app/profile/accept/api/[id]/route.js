import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server";

export const PATCH = async(request,{params})=>{


    

    try{

        const db = await connectDB()


        const query = { _id: new ObjectId(params.id) };
        const updateDoc = { $set: { status: "accepted" } };
    
        const res = await db.collection("request").updateOne(query, updateDoc);

        return NextResponse.json({message:"accepted"})

    }catch(error){

        return NextResponse.json({message:"Something Wrong"})

    }






}