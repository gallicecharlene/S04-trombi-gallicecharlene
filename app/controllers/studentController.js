const datamapper = require('../models/datamapper');

const studentController = {

  async studentsList(req, res, next) {
    const id = Number(req.params.id);

    const promoByid = await datamapper.findPromoById(id);
    const studentsPromoFound = await datamapper.findStudentsByPromoId(id);

    if (studentsPromoFound && promoByid) {
      res.render('students/students', {
        students: studentsPromoFound,
        promoByid,
      });
    } else {
      next();
    }
  },

  async studentsDetail(req, res, next) {
    const promoId = Number(req.params.id);
    const studentId = Number(req.params.studentId);

    const promoByid = await datamapper.findPromoById(promoId);
    const studentByid = await datamapper.findStudentById(studentId);

    if (studentByid && promoByid) {
      res.render('students/student', {
        promoByid,
        studentByid,
      });
    } else {
      next();
    }
  },
};

module.exports = studentController;
