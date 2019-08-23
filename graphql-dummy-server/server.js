const express = require('express');
const jsonGraphqlExpress = require('json-graphql-server').default;

const data = require('./db.js');

const PORT = 4000;
const app = express();

app.use('/graphql', jsonGraphqlExpress(data));

app.listen(PORT, () => {
  console.log(`GraphQL Server running on port ${PORT}`);
});