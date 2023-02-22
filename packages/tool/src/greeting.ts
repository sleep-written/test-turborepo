export function greeting(consoleInject?: { log(...args: string[]): void; }): void {
    const message = 'Hi!';
    if (consoleInject) {
        consoleInject.log(message);
    } else {
        console.log(message);
    }
}