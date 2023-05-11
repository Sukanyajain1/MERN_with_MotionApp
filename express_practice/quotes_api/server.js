// this file is going to represent an api server
const express = require("express"); //import express so we can use express features
const app = express(); //create our app variable which is an instance of express
const port = 8000;



// NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!!!
app.use(express.json()); // lets our app convert form info into json
app.use(express.urlencoded({extended:true})); //lets out app parse form information

// our fake data here
let quotes = [
    {content: "It is not the mountains ahead that will wear you out, it is the pebble in your shoe", author: "Muhammad Ali"},
    {content: "A wise man once said nothing at all", author: "Wes"},
    {content: "Comparison is a thief of joy", author: "Theodore Roosevelt"},
    {content: "Fall down 7 times stand up 8", author: "Japanese Proverb"},
    {content: "You Attract what you vibrate", author: "Fritz"},
    {content: "Wherever you go, there you are", author: "Eckhart Tolle"},
    {content: "Success is the ability to go from one failure to the next, with no loss of enthusiasm", author: "Winston Churchill"},
]
// create our api endpoints here: eg-> http://localhost:8000/api/hello

/*
Remeber in PYTHON we do:
@app.route("/api/hello")
def sayHello():
    return "Wazaaaa"


where the app.route is the routing annotation for the path
*/


app.get("/api/hello", (req, res)=> {
    res.json({msg: "Wazzaaaap World!"})
});

// get all quotes endpoint
app.get("/api/quotes", (req, res)=> {
    res.json({count: quotes.length, results: quotes})
});

// get one quote based on list index number
app.get("/api/quotes/:idx", (req, res)=> {
    res.json({results: quotes[req.params.idx]})
});

// create a new quote
app.post("/api/quotes", (req, res)=> {
    console.log("req.body is this -> ", req.body); //req.doby is the form information that was submitted (the new quote object)
    quotes.push(req.body)
    res.json({count: quotes.length, results: quotes})
});

// update a quote
app.put("/api/quotes/:idx", (req, res)=>{
    quotes[req.params.idx] = req.body;  //new info here
    // update the quote array at specific index with the information from the form (form info is req.body)
    res.json({count: quotes.length, results: quotes})
})

app.delete("/api/quotes/:idx", (req, res)=>{
    // we can get this `id` variable from req.params
    const idx = req.params.idx;
    
    quotes.splice(idx,1); //splice removes a value at a specified index

    res.json({count: quotes.length, results: quotes})
})






// THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=> console.log(`Listening on port ${port}`));