const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!Sagnol how are you. So you learn how to code with git'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
