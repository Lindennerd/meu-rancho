import Database from '../database/db.js';

class Recipe {
    constructor() {
        this.db = new Database();
    }

    async get() {
        return this.db.get('recipes');
    }
}

export default Recipe;