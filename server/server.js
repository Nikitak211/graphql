const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origin requests
app.use(cors())

const db = "mongodb+srv://PosterApp:A1s2f4g5*@poster-data.noemv.mongodb.net/gql-study"

mongoose.connect(db)
mongoose.connection.once('open', () => {
    console.log('connected to database')
})



app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));


const port = process.env.PORT || 8000
app.listen(port, () =>{
    console.log('listening on port: '+ port);
});