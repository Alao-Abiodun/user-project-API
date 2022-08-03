const { Router } = require('express');

const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/users', controllers.createUser);
router.get('/users', controllers.fetchAllUsers);
router.get('/users/:id', controllers.fetchAUser);
router.put('/users/:id', controllers.changeAUser);

module.exports = router
