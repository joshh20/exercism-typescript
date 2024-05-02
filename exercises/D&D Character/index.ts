export class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }

    public static generateAbilityScore(): number {
        let dice: number[] = [];
        for (let i = 0; i < 4; i++) {
            const number = Math.floor(Math.random() * 6 + 1);
            dice.push(number);
        }
        dice.sort((a, b) => b - a);
        return dice.reduce((total, number, index) => {
            if (index <= 2) return total + number;
            return total;
        }, 0);
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2);
    }
}

// const char1 = new DnDCharacter();
// console.log(char1);
