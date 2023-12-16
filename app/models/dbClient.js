// Importer le module Client du package pg (PostgreSQL)
const { Client } = require('pg');

// Créer une instance de Client en utilisant l'URL de connexion à la base de données
// depuis les variables d'environnement
const client = new Client(process.env.PG_URL);

// Se connecter à la base de données
client.connect((error) => {
  if (error) {
    // Gérer les erreurs de connexion et afficher un message d'erreur
    console.error('Une erreur a lieu à la connexion avec notre BDD : ', error.message);
  } else {
    // Afficher un message de succès si la connexion est établie avec succès
    console.log('Connection à la BDD réussie !');
  }
});

// Exporter l'instance du client pour qu'elle puisse être utilisée dans d'autres modules
module.exports = client;
