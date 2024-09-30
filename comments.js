//Creat web server
const express = require('express');
const app = express();
const port = 3000;

//Create a route
app.get('/comments', (req, res) => {
    res.json([
        {name: 'John', message: 'Hello'},
        {name: 'Tim', message: 'Hi'}
    ]);
});

//Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});