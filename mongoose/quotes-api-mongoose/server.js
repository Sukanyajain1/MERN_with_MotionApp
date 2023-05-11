const express = require("express"); //importing express

const app = express(); //create our app variable which is an instance of express
const port = 8000; //declaring a port ofr the backend api to run in (localhost:8000)

// NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!!!
app.use (express.json());
app.use(express.urlencoded({extended:true}));


require("./server/config/mongoose.config");


// routes here- MAKE SURE ROUTES IMPORT IS BELOW ALL THE APP.USE COMMANDS ABOVE
require("./server/routes/quote.routes")(app); //we need to pass through the app variable so that we can connect the server to the app/express



app.listen(port, ()=>console.log(`Listening on port: ${port}`));