import jsonfile from 'jsonfile'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url'

class Database {
    constructor() {
        const dir = dirname(fileURLToPath(import.meta.url));
        this.file = join(dir, 'db.json');   
        this.options = { spaces: 2 };
    }

    async openDb() {
        return await jsonfile.readFile(this.file);
    }

    async saveDb(db) {
        return await jsonfile.writeFile(this.file, db, this.options);
    }

    async create(collection, entity) {
        const db = await this.openDb();
        if (!db[collection]) db[collection] = [];

        db[collection].push(entity);
        return await this.saveDb(db);
    }

    async get(collection, filter) {
        const db = await this.openDb();
        if (!db[collection]) return [];

        return db[collection];
    }
}

export default Database;