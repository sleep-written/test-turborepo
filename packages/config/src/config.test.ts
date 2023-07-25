import test from 'ava';
import { Config } from './config.js';

interface DummyData {
    text: string;
    value: number;
}

class DummyConfig extends Config<DummyData> {
    constructor() {
        super('./config.dummy.yml', {
            text: 'hello world',
            value: 666
        });
    }
}

test.serial('Create a default file', async t => {
    const target = new DummyConfig();
    await target.generate();

    const data = await target.load();
    t.deepEqual(data,  {
        text: 'hello world',
        value: 666
    });
});

test.serial('Delete dummy file', async t => {
    const target = new DummyConfig();
    await target.kill();

    const exists = await target.exists();
    t.false(exists);
});
