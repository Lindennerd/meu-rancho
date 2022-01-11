import { Low, JSONFile } from 'lowdb';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url'

class Database {
    constructor() {
        const dir = dirname(fileURLToPath(import.meta.url));
        const file = join(dir, 'db.json');
        const adapter = new JSONFile(file);
        this.db = new Low(adapter);
    
        db.read();
    
        db.data ||= {};
    }

    async create(entity) {
        var collection = entity.constructor.name;
        if (!db.data[collection]) db.data[collection] = [];

        db.data[collection].push(entity);
        return await db.write();
    }

    async get(entityName, filter) {
        return await db.data
        .get(entityName)
        .find(filter || {})
        .value();
    }
}

export default Database;