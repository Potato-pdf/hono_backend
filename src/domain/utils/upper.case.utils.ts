
export const toPascalCase = (name: string): string => {
    const words = name.toLowerCase().split(/\s+/);
    if (words.length === 0) return '';
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}