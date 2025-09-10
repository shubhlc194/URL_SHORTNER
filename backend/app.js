const express = require('express');
const app = express();
app.get('/api/create', (req, res)=>{
    res.send("Create Short URL");
});

app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000");
});



// get-redirection
//post- create-short-url
