const client = require('./dbClient');

const datamapper = {
  async findAllPromo() {
    let promos;

    try {
      promos = await client.query('SELECT * FROM "promo" ORDER BY name;');
    } catch (error) {
      console.error(error);
    }
    return promos?.rows;
  },

  async findPromoById(promoId) {
    let promoByid;

    try {
      promoByid = await client.query(`SELECT * FROM "promo" WHERE id = ${promoId};`);
    } catch (error) {
      console.error(error);
    }
    return promoByid?.rows[0];
  },

  async findStudentsByPromoId(studentId) {
    let studentsById;

    try {
      studentsById = await client.query(`SELECT * FROM "student" WHERE promo_id = ${studentId};`);
    } catch (error) {
      console.error(error);
    }
    return studentsById?.rows;
  },

  async findStudentById(studentId) {
    let studentByid;

    try {
      studentByid = await client.query(`SELECT * FROM "student" WHERE id = ${studentId};`);
    } catch (error) {
      console.error(error);
    }
    return studentByid?.rows[0];
  },
};

module.exports = datamapper;
