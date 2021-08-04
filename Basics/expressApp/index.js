const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hello world");
})
app.get('/about', (req, res) =>{
    res.send("Hello world from About page");
})
app.get('/api', (req, res) =>{
    res.send([
        {
        id: 1,
        name: "Ashis Bhowmik",
        mail: "ashis@ashis.com"
    },
    {
        id: 1,
        name: "Matta Biswas",
        mail: "matta@matta.com"
    },
    ]
    
    );
})
app.listen(port, ()=>{
     console.log(`listening at http://localhost:${port}`);
})