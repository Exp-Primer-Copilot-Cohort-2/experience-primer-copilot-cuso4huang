// Create web server
// 1. Load the express module
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Define a route
app.get('/comments', (req, res) => {
  res.send('Comments');
});
// 4. Start the server
app.listen(3000, () => {
  console.log('Server started');
});

// 5. Test the server
// Visit http://localhost:3000/comments in your browser
// You should see the text "Comments"