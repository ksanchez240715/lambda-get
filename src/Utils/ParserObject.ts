export function MapKeys<T extends object>(obj: T, map: Record<string, string>): Record<string, any> {
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = map[key] || key;
        acc[newKey] = (obj as any)[key];
        return acc;
    }, {} as Record<string, any>);
}
