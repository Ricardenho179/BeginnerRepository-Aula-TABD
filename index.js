let express = require('express')

let app = express();

let port = process.env.PORT || 8080; 

app.get('/', (req,res) => res.send('Hello World with Express'))

app.listen(port, function() {
    console.log("RUning RestHub on port " + port);

});