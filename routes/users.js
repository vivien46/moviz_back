var express = require('express');
var router = express.Router();

let users = [
  {id: 1, username: 'Alice Smith', email: 'alice.smit@domaine.com'},
  {id: 2, username: 'Bob Johnson', email:'bob.johnson@domaine.com'}
  ];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({message: 'Liste des utilisateurs', users});
});

router.get('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (user) {
  res.json({message: 'Utilisateur avec l\'id ' + req.params.id});
} else {
  res.status(404).json({ message: `Utilisateur avec ID ${userId} non trouvé` });
}
});

router.post('/', function(req, res, next) {
  const { username, email } = req.body;
  res.json({message: 'Utilisateur ' + username + ' avec l\'email ' + email + ' créé'});
});

module.exports = router;