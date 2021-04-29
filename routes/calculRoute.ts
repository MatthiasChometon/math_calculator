
const Router = require('express');
const router = new Router();

const {
    multiply
} = require('../controllers/calculController')

router.route('/:multiplicand')
.get(multiply)


module.exports = router;