import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async(request)=>{

    const teacher = await request.json()

    try{

        const db = await connectDB()

        const teacherCollection= db.collection("teacher")

        const res = await teacherCollection.insertOne(teacher)

        const query = {email:teacher.email}

        const updateDoc = {
            $set:{
                role:"teacher"
            }
        }

        const result = await db.collection("user").updateOne(query,updateDoc)

        return NextResponse.json({res,result})


      

    }catch(error){

        return NextResponse.json({message:"Something Wrong"})

    }



}