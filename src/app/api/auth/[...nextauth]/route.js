import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
   session:{
    strategy:"jwt",
    maxAge: 30*24*60*60,
   },
   providers:[
    CredentialsProvider({
        credentials:{
            email:{},
            password:{}
        },

        async authorize(credentials){
           const {email,password}=credentials

           if(!email || !password){
            return null
           }

           const db = await connectDB()
           const currentUser = await db.collection("user").findOne({email:email})

           if(!currentUser){
            return null
           }

           if(currentUser.password!==password){
            return null
           }

           return currentUser


        }

    }),
    
   ],
   pages:{
    signIn:"/login"
   },
   secret: process.env.NEXTAUTH_SECRET, // Ensure this is in your .env file
   jwt: {
     secret: process.env.NEXTAUTH_SECRET, // This needs to match the secret used for signing JWTs
   },
})


export {handler as GET,handler as POST}