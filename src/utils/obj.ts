export function keysOf<T extends object>(obj: T): Array<keyof T> {
    return Object.keys(obj) as Array<keyof T>;
}

export function valuesOf<U>(obj: { [k: string]: U }): Exclude<U[], undefined> {
    return keysOf(obj).map(objKey => obj[objKey]);
}
    