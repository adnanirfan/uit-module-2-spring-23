const express = require("express");
const cors = require("cors");
// const { client } = require("./db");
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

    // client.close();
  } catch (error) {
    console.log("ERROR: ", error);
  }
})();

const app = express();
const port = 3005;
const users = [];

app.use(express.json());
app.use(cors());

// GET POST PUT DELETE

app.get("/users", async (req, res) => {
  console.log("Log GET Request");
  const collection = client.db("test").collection("users");
  const documents = await collection.find().toArray();
  res.send(documents);
});

app.post("/users", async (req, res) => {
  try {
    console.log("Log POST Request");
    console.log("BODY:", req.body);
    //   users.push(req.body);
    const collection = client.db("test").collection("users");
    const x = await collection.insertOne(req.body);
    res.send(x);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log("Server is running on Port: ", port);
});
