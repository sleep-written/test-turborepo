import { Task } from '@bleed-believer/scheduler';

export class Task01 extends Task {
    async launch(): Promise<void> {
        console.log('Loool');
    }
}