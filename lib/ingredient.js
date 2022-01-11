import Database from '../database/db.js';

class Ingredient {
    constructor() {
        this.db = new Database();
    }

    async save(product) {
        try {
            return await this.db.create('products', product);
        } catch (error) {
            return Promise.reject(error);            
        }
    }

    async get() {
        const products = await this.db.get('products');
        return products.filter(ing => ing.category !== 'Limpeza'
                && ing.category !== 'Higiene Pessoal'
                && ing.category !== 'Pet')
    }
}

export default Ingredient;