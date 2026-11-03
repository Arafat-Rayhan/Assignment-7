
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoUrl = process.env.BETTER_AUTH_DB_URL;
const mongoClient = mongoUrl ? new MongoClient(mongoUrl) : null;

const socialProviders = {
  ...(process.env.BETTER_AUTH_GOOLE_ID && process.env.BETTER_AUTH_GOOLE_SECRETE
    ? {
        google: {
          clientId: process.env.BETTER_AUTH_GOOLE_ID,
          clientSecret: process.env.BETTER_AUTH_GOOLE_SECRETE,
        },
      }
    : {}),
  ...(process.env.BETTER_GIT_ID && process.env.BETTER_GIT_SECRET
    ? {
        github: {
          clientId: process.env.BETTER_GIT_ID,
          clientSecret: process.env.BETTER_GIT_SECRET,
        },
      }
    : {}),
};

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["github", "google"],
    },
  },
  ...(Object.keys(socialProviders).length > 0 ? { socialProviders } : {}),
  ...(mongoClient
    ? {
        database: mongodbAdapter(mongoClient.db(), {
          client: mongoClient,
        }),
      }
    : {}),
});


