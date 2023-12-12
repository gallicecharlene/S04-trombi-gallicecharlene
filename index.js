require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const app = express();

// Si on m'a fournis en variable d'environnement un port, je l'utilise, sinon j'utilise le port 3000
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

app.use(router);

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
