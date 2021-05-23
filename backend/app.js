const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { graphqlHTTP } = require('express-graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require('cors')

//MongoDB Conenction
mongoose.connect('mongodb+srv://MONGO_USERNAME:PASWWORD@cluster0.yye7q.mongodb.net/moviemaker?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected Succesfully !"))
    .catch((err) => console.log("Error", err))

app.use(cors())

//Setting GraphQL
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
    rootValue: resolvers
}))

//Render response on browser (express)
app.get('/', (req, res) => {
    res.send('Hello from backend app.js')
})
//Express running on which port
app.listen(4000, () => {
    console.log("Server started on pOrt 4000")
})



/*
This file initializes express and connect to MongoDB database and Integrate GraphQL.
1.initialize express and define port
2.Connect MongODB
3.Initialize graphqlHTTP
4.Setting GraphQL
5.Define Schema i.e const schema
6.Define resolvers i.e rootValue
*/
