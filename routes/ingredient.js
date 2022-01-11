import Ingredient from '../lib/ingredient.js';
import { Router } from 'express';

class IngredientRouter {
  constructor() {
    this.ingredient = new Ingredient();
    this.router = Router();

    this.router.get('/', this.ingredientIndex.bind(this));
    this.router.get('/list', this.listIngredients.bind(this));
    this.router.post('/', this.save.bind(this));
  }

  async ingredientIndex(req, res, next) {
    res.render('ingredient');
  }

  async listIngredients(req, res, next) {
    const ingredients = await this.ingredient.get();
    res.send(ingredients);
  }

  async save(req, res, next) {
    const result = await this.ingredient.save(req.body);
    res.send({ status: 'ok' });
  }
}

export default IngredientRouter;