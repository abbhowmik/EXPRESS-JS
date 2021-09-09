const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

const staticPath = path.join(__dirname, '../public');

app.get('/', (req, res) => {
  res.send('Hello World! from the Home page');
})

app.use('/static',express.static(staticPath));


app.get('/about', (req, res) => {
  res.send('Hello World! from the About page side');
})

app.listen(port, () => {  
  console.log(`listening at http://localhost:${port}`); 
})