import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async(request,{params})=>{

    console.log(params.email)

    

    try{

        const db = await connectDB()


        const query = {teacherEmail:params.email}

                


        const res = await db.collection("request").find(query).toArray()

        return NextResponse.json(res)

    }catch(error){

        return NextResponse.json({message:"Something Wrong"})

    }






}