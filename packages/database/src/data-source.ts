import { DataSource } from 'typeorm';
import { Ormconfig } from 'config';

import { currentPath } from 'tool';

const ormconfig = await new Ormconfig().load();
export const dataSource = new DataSource({
    ...ormconfig,
    type: 'mssql',
    entities: [
        currentPath(import.meta, 'entities/*.entity{.js,.ts}')
    ],
    migrations: [
        currentPath(import.meta, 'migrations/*{.js,.ts}')
    ],
    options: {
        encrypt: false
    }
});