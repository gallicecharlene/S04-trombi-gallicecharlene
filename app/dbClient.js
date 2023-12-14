const { Client } = require('pg');

/// connexion à ma bdd
// le client me permet d'envoyer des requêtes
// le format de la chaine de connexion est le suivant :
// postgresql://utilisateur:password@server/bdd
const client = new Client('postgresql://trombi:trombi@localhost/trombi');

client.connect((error) => {
  if (error) {
    console.error('Une erreur a lieu à la connexion avec notre BDD : ', error.message);
  } else {
    console.log('Connection à la BDD réussie !');
  }
});

// le client est le tunnel d'accès à la BDD
module.exports = client;
