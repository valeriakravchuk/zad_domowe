const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.set('view engine', 'ejs');

app.use('/scripts', express.static(__dirname + '/public/scripts'));
app.use('/styles', express.static(__dirname + '/public/styles'));
app.use(express.static('views'));

const homeRoutes = require("./routes/home");
const taskRoutes = require("./routes/task");

app.use('/',homeRoutes);
app.use('/task', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});


