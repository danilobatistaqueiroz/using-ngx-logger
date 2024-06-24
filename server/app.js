const express=require('express');
const app=express();
const port=5000;
const cors = require('cors');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());

app.post('/logger', jsonParser, (req, res) => {

  const data = req.body;
  console.log(data);

  if(!data)
  {
    return res.status(400).json({
      error: 'Data is required'
    });
  }

  const newPost = {
    "message":data.message, 
    "fileName":data.fileName, 
    "level":data.level, 
    "lineNumber":data.lineNumber, 
    "timestamp":data.timestamp
  };

  res.status(201).json(newPost);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});