const fetch = require('node-fetch');

fetch('https://894z4109q2.execute-api.ca-central-1.amazonaws.com/my-function')
  .then(res => res.json())
  .then(data => console.log(data));