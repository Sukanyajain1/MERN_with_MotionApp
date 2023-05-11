const mongoose = require("mongoose"); //importing mongoose



// mongoose connection here
mongoose.connect("mongodb+srv://root:root@clustermay.nvakqpq.mongodb.net/quotes_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("Established a connection to the database"))
    .catch( err=>console.log("Something went wrong when connecting to the database", err));
