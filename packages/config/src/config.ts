import { access, readFile, rm, writeFile } from 'fs/promises';
import { basename, resolve } from 'path';
import { parse, stringify } from 'yaml';

export abstract class Config<T extends Record<string, any> | any[]> {
    #defaultData: T;
    #path: string;
    get path(): string {
        return this.#path;
    }

    get filename(): string{
        return basename(this.#path);
    }

    constructor(path: string, defaultData: T) {
        this.#path = resolve(path);
        this.#defaultData = defaultData;
    }

    async exists(): Promise<boolean> {
        try {
            await access(this.#path);
            return true;
        } catch {
            return false;
        }
    }

    async kill(): Promise<void> {
        if (await this.exists()) {
            await rm(this.#path);
        }
    }

    async generate(): Promise<T> {
        const clone = structuredClone(this.#defaultData);
        await this.save(clone);
        return clone;
    }

    async load(): Promise<T> {
        if (!await this.exists()) {
            throw new Error(`The file "${this.filename}" doesn't exists`);
        }

        const text = await readFile(this.#path, 'utf-8');
        return parse(text);
    }

    save(data: T): Promise<void> {
        const text = stringify(data);
        return writeFile(this.#path, text, 'utf-8');
    }
}