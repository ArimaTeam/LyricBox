let express = require('express');
var path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/sw.js', (req, res) => res.sendFile('/sw.js'));
app.listen(3000);
