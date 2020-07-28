
express = require('express');
app = express();

app.use(express.static('public'));

app.get("/", function(req,res){
  console.log("Test");
  res.sendFile(__dirname + "/index.html");
})

app.listen(3000, function(){
  console.log("Server is at port 3000");
})
