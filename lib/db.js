import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.USERNAME_DB}:${process.env.PASSWORD_DB}@${process.env.CLUSTERNAME}.nmhiv.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
  );

  return client;
}
