import Database from '../database/db.js';

class Category {
    
    constructor() {
        this.db = new Database();
    }

    async get() {
        return await this.db.get('Category');
    }    
}

export default Category;