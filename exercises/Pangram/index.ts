export function isPangram(text: string): boolean {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const textArray: string[] = [...text.toLowerCase()];
    for (const letter of alphabet) {
        if (!textArray.includes(letter)) return false;
    }
    return true;
}
