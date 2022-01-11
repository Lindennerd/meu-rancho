import Database from '../database/db.js';

class Category {
    
    constructor() {
        this.db = new Database();
    }

    async get() {
        const products = await this.db.get('products');
        return products
            .map(p => p.category)
            .filter((v, i, a) => a.indexOf(v) === i); //distinct
    }    
}

export default Category;