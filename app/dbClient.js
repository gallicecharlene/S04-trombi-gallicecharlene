// eslint-disable-next-line import/no-extraneous-dependencies
const { Client } = require('pg');

/// connexion à ma bdd
// le client me permet d'envoyer des requêtes
// le format de la chaine de connexion est le suivant :
// postgresql://utilisateur:password@server/bdd
const client = new Client('postgresql://etudiant:js4life@pg.oclock.lan/trombi');

client.connect();

// le client est le tunnel d'accès à la BDD
module.exports = client;
