import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://srikanthchowdary342:5eAAFGtLNGJ1SM5O@cluster0.4s6prwt.mongodb.net/auth-demo?retryWrites=true&w=majority`
  );
  return client;
};
