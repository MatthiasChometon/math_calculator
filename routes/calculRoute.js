
import { Router } from 'express';
const router = new Router();

import {
    multiply
} from '../controllers/calculController'

router.route('/:multiplicand')
.get(multiply)

export default router;