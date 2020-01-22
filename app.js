const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('We are live on port 8000');
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running or port ${port}`);
});
