const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://dbuser:dbpassword@cluster0.nh1yk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

console.log("Database Connecting...");

(async () => {
  try {
    await client.connect();
    console.log("Database Connected");

    const collection = client.db("test").collection("users");
    const documents = await collection.find().toArray();
    console.log(documents);

    // await collection.insertOne({
    //   username: "Adnan",
    //   email: "adnan@gmail.com",
    //   password: "ytrewq",
    // });
    await collection.insertMany([
      {
        username: "Daniyal 1",
        email: "daniyal1@gmail.com",
        password: "ytrewq",
      },
      {
        username: "daniyal 2",
        email: "daniyal2@gmail.com",
        password: "ytrewq",
      },
    ]);

    client.close();
  } catch (error) {
    console.log("ERROR: ", error);
  }
})();
