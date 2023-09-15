const express = require('express');
const path = require('path');
const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'));

// There are so many types of request 
// we use.get for fetching the data which was already present
// another is POST in this we send some that then changes will be occur in DB and then we get the response
// PUT
//Patch
// the important one is DELETE


app.get('/', function (req, res) {
  //   console.log(__dirname);
  // res.send('<h1>cool , it is running! or is it </h1>')
  return res.render('home' , {title: "My Contacts List"});
});

app.get('/practice' , function(req , res){
  return res.render('practice' , {
    title : "let us play with ejs"
  })
})

app.listen(port, function (err) {
  if (err) {
    console.log('Error in running the server :', err);
  }
  console.log('yupp! My express is running :', port);
});

