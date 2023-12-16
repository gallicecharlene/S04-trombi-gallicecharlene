// Charger la configuration des variables d'environnement depuis le fichier .env
require('dotenv').config();

// Importer le module Express
const express = require('express');

// Importer le module de routage défini dans votre application
const router = require('./app/router');

// Créer une instance d'Express
const app = express();

// Récupérer le port à partir des variables d'environnement
const { PORT } = process.env;

// Configurer le moteur de vue EJS et définir le répertoire des vues
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Utiliser le dossier 'public' pour les fichiers statiques (CSS, JavaScript, images, etc.)
app.use(express.static('public'));

// Utiliser le module de routage
app.use(router);

// Middleware pour gérer les erreurs 404 (page non trouvée)
app.use((req, res) => {
  res.status(404).render('404');
});

// Démarrer le serveur en écoutant sur le port spécifié dans les variables d'environnement
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
