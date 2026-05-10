
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("booknest");

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  },
  database: mongodbAdapter(db, {
    client,
  }),
  
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID , 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
    }, 
  },
});

// Ensure connection is established
if (!globalThis.__mongoConnected) {
  globalThis.__mongoConnected = client.connect().then(() => {
    console.log("MongoDB connected via auth.js");
  }).catch((err) => {
    console.error("Failed to connect MongoDB:", err);
  });
}


