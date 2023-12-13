// const students = require('../../data/students.json');
// const promos = require('../../data/promos.json');
const client = require('../dbClient');

const studentController = {

  async studentsList(req, res, next) {
    const id = parseInt(req.params.id, 10);

    const promoByid = await client.query(`SELECT * FROM "promo" WHERE id = ${id};`);
    const studentsPromoFound = await client.query(`SELECT * FROM "student" WHERE promo_id = ${id};`);

    if (studentsPromoFound.rows.length > 0 && promoByid.rows.length > 0) {
      res.render('students/studentsList', {
        students: studentsPromoFound.rows,
        promo: promoByid.rows[0],
      });
    } else {
      next();
    }
  },
};

module.exports = studentController;
