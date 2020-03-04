const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const cors = require('cors');

const app = express();

// allow cross origin requests
app.use(cors());

// connect to the mongoDB database
mongoose.connect('mongodb+srv://sunil123:sunil123@devconnector-2kbpj.mongodb.net/graphql_test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to the database');
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('server started on Port 4000');
});