// Importer le client de la base de données
const client = require('./dbClient');

// Objet contenant différentes méthodes pour interagir avec la base de données
const datamapper = {
  // Récupère toutes les promotions depuis la base de données
  async findAllPromo() {
    let promos;

    try {
      // Exécute une requête SQL pour récupérer toutes les promotions, trié par ordre alphabétique
      promos = await client.query('SELECT * FROM "promo" ORDER BY name;');
    } catch (error) {
      // Gérer l'erreur en affichant un message dans la console
      console.error(error);
    }
    // Retourne les résultats de la requête SQL, ou undefined si une erreur s'est produite
    return promos?.rows;
  },

  // Récupère une promotion par son ID depuis la base de données
  async findPromoById(promoId) {
    let promoById;

    try {
      // Exécute une requête SQL pour récupérer une promotion par son ID
      promoById = await client.query(`SELECT * FROM "promo" WHERE id = ${promoId};`);
    } catch (error) {
      // Gérer l'erreur en affichant un message dans la console
      console.error(error);
    }

    // Retourne la première ligne des résultats de la requête SQL,
    // ou undefined si une erreur s'est produite
    return promoById?.rows[0];
  },

  // Récupère tous les étudiants d'une promotion par l'ID de la promotion
  async findStudentsByPromoId(promoId) {
    let studentsById;

    try {
      // Exécute une requête SQL pour récupérer tous les étudiants d'une promotion
      // par l'ID de la promotion
      studentsById = await client.query(`SELECT * FROM "student" WHERE promo_id = ${promoId};`);
    } catch (error) {
      // Gérer l'erreur en affichant un message dans la console
      console.error(error);
    }

    // Retourne les résultats de la requête SQL, ou undefined si une erreur s'est produite
    return studentsById?.rows;
  },

  // Récupère un étudiant par son ID depuis la base de données
  async findStudentById(studentId) {
    let studentById;

    try {
      // Exécute une requête SQL pour récupérer un étudiant par son ID
      studentById = await client.query(`SELECT * FROM "student" WHERE id = ${studentId};`);
    } catch (error) {
      // Gérer l'erreur en affichant un message dans la console
      console.error(error);
    }

    // Retourne la première ligne des résultats de la requête SQL
    // ou undefined si une erreur s'est produite
    return studentById?.rows[0];
  },

  // Methode qui sert à inserer les données issus du paramètre (studentInfo) dans la BDD
  // plus précisément ds mon tableau 'student'
  async addStudent(studentInfo) {
    let student;

    try {
      student = await client.query(`INSERT INTO "student"
      (promo_id,first_name,last_name,github_username)
      VALUES ($1, $2, $3, $4);`, [studentInfo.promo, studentInfo.first_name, studentInfo.last_name, studentInfo.github_username]);
    } catch (error) {
      // Gérer l'erreur en affichant un message dans la console
      console.error(error);
    }
    return student;
  },

};

// Exporte l'objet datamapper pour qu'il puisse être utilisé dans d'autres modules
module.exports = datamapper;
