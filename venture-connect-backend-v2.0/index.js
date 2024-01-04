const http = require('http');
const dbConnection = require('./database_connect');


// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Write the response content
    res.write('<h1>Hello, Node.js HTTP Server!</h1>');
    res.end();
});

// Specify the port to listen on
const port = 3001;

// Start the server
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});

async function insertData() {
    try {
      await dbConnection.connect();
      
      // Get the MongoDB client
      const client = dbConnection.getClient();

      /*Sample insertion example*/
      
    //   client.db('VentureConnect').collection("UserProfile").insertOne({id:1,name:"arjun"}).then(function(res){
    //     if(res){
    //         console.log("successfully inserted");
    //     }
    //   });
      
    } 
    finally {
       //await dbConnection.close();
    }
  }
  
  // Call the function
  insertData().catch(console.error);