import { Router } from 'express';
import Category from '../lib/category.js';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const category = new Category();
    const categories = category.get();

    res.send(categories);
});

export default router;