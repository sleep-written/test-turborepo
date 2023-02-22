import { Scheduler } from '@bleed-believer/scheduler';
import npmlog from 'npmlog';

import { Task01 } from './task-01.js';

const scheduler = new Scheduler([Task01]);

try {
    await scheduler.run(() => {
        npmlog.info('daemon', 'The daemon is ready');
    });
} catch {
    npmlog.error('daemon', 'Configuration file not found, creating a new one...');
    await scheduler.createConfig();
}