
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";




const client = new MongoClient(process.env.BETTER_AUTH_DB_URL!);
const db = client.db();


console.log('auth is here');
export const auth = betterAuth({
     emailAndPassword: { 
    enabled: true, 
  }, 
  account: {
  accountLinking: {
    enabled: true,
    trustedProviders: ["github", "google"] 
  }
},  

      socialProviders: {
        google: { 
            clientId: process.env.BETTER_AUTH_GOGOOL_ID as string, 
            clientSecret: process.env.BETTER_AUTH_GOGOOL_SECRETE as string, 
        }, 
        github: { 
            clientId: process.env.BETTER_GIT_ID as string, 
            clientSecret: process.env.BETTER_GIT_SECRET as string, 
        }, 
    },


  database: mongodbAdapter(db, {
    client,
  }),
});


