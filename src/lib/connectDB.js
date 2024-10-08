import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB= async()=>{
    if(db) return db
    

    try{

        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.akl91ab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      db=client.db("TutorMaster")

      return db;

    }catch(error){

    }
}