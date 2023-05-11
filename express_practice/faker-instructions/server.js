const express = require("express");
const {faker} = require('@faker-js/faker'); //import faker library so we can use it to generate fake random data
const app = express();
const port = 8000;

// NEED THIS TO HANDLE POST REQUESTS. HAVE THESE TWO LINES BEFORE THE ROUTES!!!!
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get("/api/hello", (req, res)=>{
//     res.json({message: "Hello route is working"});
// })


class User{
    constructor(){
        this._id = faker.random.numeric(2),
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.phoneNumber = faker.phone.number,
        this.email = faker.internet.email(),
        this.password = faker.internet.password
    };
}

class Company{
    constructor(){
        this._id = faker.random.numeric(5),
        this.name = faker.company.name(),
        this.address = [
            {street : faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()}
        ]
    };
}

app.get("/api/users", (req, res)=>{
    // create a user
    let newUser = new User();
    // respond with json with info about the user
    res.json(newUser)
})

app.get("/api/company", (req, res)=>{
    // create a user
    let newCompany = new Company();
    // respond with json with info about the user
    res.json(newCompany)
})

// THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));