const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://user:qwerty123@market-tracker-8lxjk.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "QnA";

async function sendMessage(data) {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    const col = db.collection("messages");

    const p = await col.insertOne(data);

    const myDoc = await col.findOne();

    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

export default sendMessage;
