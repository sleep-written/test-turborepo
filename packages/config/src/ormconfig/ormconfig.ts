import { OrmconfigData } from './ormconfig.data.js';
import { Config } from '../config.js';

export class Ormconfig extends Config<OrmconfigData> {
    constructor() {
        super('../../ormconfig.yml', {
            host: '127.0.0.1',
            port: 1433,
            username: 'admin',
            password: 'admin',
            database: 'test DB'
        });
    }
}
