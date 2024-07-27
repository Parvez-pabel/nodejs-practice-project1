const express = require('express');
const cors = require('cors');
const bodyParser  = require('body-parser');
const app = express();



app.use(cors());
app.use(bodyParser.json());


const users = ["Parvez", "Alom", "Samia", "Sadia", "Rohit", "Tuku", "Abid"]; 

app.get('/users/:id', function (req, res) {
  const id = req.params.id; // params find that is there any parameter which is from website url 
  const name = users[id];
  res.send({id, name});
})
//post API
app.post('/addUser', (req, res) =>{
  res.send(req.body);
})

app.listen(3000, () =>{
  console.log("hello i m from port");
})