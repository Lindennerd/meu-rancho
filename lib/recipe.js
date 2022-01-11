import Database from '../database/db.js';

class Recipe {
    constructor() {
        this.db = new Database();
    }

    async get() {
        return await this.db.get('recipes');
    }

    async save(recipe) {
        return await this.db.create('recipes', recipe);
    }
}

export default Recipe;