const express = require('express');
const app = express();

var port = process.env.PORT || 3001;
app.get('/', (req, res) => res.send('Hello Azure'));

app.listen(port, ()=> console.log('server is running on port' + port));