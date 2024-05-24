export class Robot {
    #name: string = "";
    private static usedNames: Set<string> = new Set();

    constructor() {
        this.resetName();
    }

    public get name(): string {
        return this.#name;
    }

    public resetName(): void {
        let newName: string;
        do {
            newName = Robot.generateName();
        } while (Robot.usedNames.has(newName));
        this.#name = newName;
        Robot.usedNames.add(this.#name);
    }

    private static generateName(): string {
        let letters: string = "";
        for (let i = 0; i < 2; i++) {
            letters += String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }

        const numbers = Math.floor(100 + Math.random() * 900);
        return letters + numbers;
    }

    public static releaseNames(): void {
        Robot.usedNames.clear();
    }
}
