import { AppconfigData } from './appconfig.data.js';
import { Config } from '../config.js';

export class Appconfig extends Config<AppconfigData> {
    constructor() {
        super('../../appconfig.yml', {
            port: 8080,
            client: './apps/client/dist/client'
        });
    }
}
