const adminController = {

  addStudent(req, res) {
    res.render('students/addStudent');
  },

};

// Exporter le contrôleur pour qu'il puisse être utilisé dans d'autres modules
module.exports = adminController;
