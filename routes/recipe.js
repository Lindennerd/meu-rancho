import Recipe from '../lib/recipe.js';
import { Router } from 'express';

class RecipeRouter {
  constructor() {
    this.recipe = new Recipe();
    this.router = Router();

    this.router.get('/', (req, res) => res.render('recipe'));
    this.router.get('/list', this.listRecipes.bind(this));
    this.router.post('/', this.save.bind(this));
  }

  async listRecipes(req, res) {
    const recipes = await this.recipe.get();
    res.send(recipes);
  }

  async save(req, res) {
    this.recipe.save('recipes', req.body);
    res.send({ status: 'Ok' });
  }

}

export default RecipeRouter;
