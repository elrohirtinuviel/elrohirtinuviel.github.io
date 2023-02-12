const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/home/resume.html'));
  
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});