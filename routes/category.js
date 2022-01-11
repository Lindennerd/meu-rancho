import { Router } from 'express';
import Category from '../lib/category.js';

class CategoryRouter {
    constructor() {
        this.category = new Category();
        this.router = Router();

        this.router.get('/', this.getCategories.bind(this));
    }

    async getCategories(req, res, next) {
        const categories = await this.category.get();
        res.send(categories);
    }
}

export default CategoryRouter;