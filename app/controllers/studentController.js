const students = require('../../data/students.json');
const promos = require('../../data/promos.json');

const studentController = {

  studentsList(req, res, next) {
    const { id } = req.params;

    const studentsPromoFound = students.filter((student) => student.promo === parseInt(id, 10));
    const promoFound = promos.find((promo) => promo.id === Number(id));
    if (studentsPromoFound && promoFound) {
      res.render('students/studentsList', {
        students: studentsPromoFound,
        promo: promoFound,
      });
    } else {
      next();
    }
  },
};

module.exports = studentController;
