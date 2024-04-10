const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Ensure your Three.js files are in a 'public' directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Adjust if your HTML file is named differently
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
