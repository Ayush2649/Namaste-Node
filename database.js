const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://ayushsahu1430_db_user:NhKKqKO4eAYsgUL4@namastenode.5fnie5c.mongodb.net/";
const client = new MongoClient(URI);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Virat",
    lastname: "Kohli",
    city: "London",
    phoneNumber: "9876543210",
  }

//   const insertResult = await collection.insertOne(data);
//     console.log("Inserted Document =>", insertResult);

//   const updateResult = await collection.updateOne(
//     { firstname: "Virat" },
//     { $set: { city: "Alibaug" } }
//   );
//   console.log("Updated Document =>", updateResult);

//     const deleteResult = await collection.deleteOne({ firstname: "Virat" });

//     const findAllDocuments = await collection.find({}).toArray();
//   console.log("Found Documents =>", findAllDocuments);

  const findDocuments = await collection.find({ firstname: "Virat" }).toArray();
  console.log("Found Documents =>", findDocuments);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
