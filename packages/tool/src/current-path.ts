export function currentPath(
    importMeta: { url: string; },
    relativePath: string
): string {
    const { pathname } = new URL(relativePath, importMeta.url);
    return decodeURIComponent(pathname);
}