
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://arjunragavendaar:Arjunragav%40016@cluster0.fdjl4ia.mongodb.net/?retryWrites=true&w=majority";
/* Database Name: VentureConnect
   Collection name: UserProfile 
*/
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri);

async function connect() {
    await client.connect();
    console.log("Connected to MongoDB!");
  }
  
  async function close() {
    await client.close();
    console.log("Connection to MongoDB closed!");
  }
  
  function getClient() {
    return client;
  }
  
  module.exports = {
    connect,
    close,
    getClient,
  };
