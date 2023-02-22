import test from 'ava';
import { greeting } from './greeting.js';

class ConsoleFake {
    #stdout: string = '';
    get stdout(): string {
        return this.#stdout;
    }

    log(...args: string[]): void {
        this.#stdout += args.reduce(
            (prev, curr) => prev ? `${prev} ${curr}` : curr,
            ''
        );
    }
}

test('Say hello', t => {
    const console = new ConsoleFake();

    greeting(console);
    t.is(console.stdout, 'Hi!');
});
