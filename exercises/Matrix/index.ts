export class Matrix {
    #array2D: number[][];

    constructor(input: string) {
        this.#array2D = input
            .split("\n")
            .map((row) => row.split(" ").map(Number));
    }

    get rows(): number[][] {
        return this.#array2D;
    }

    get columns(): number[][] {
        return this.#array2D[0].map((_, colIndex) =>
            this.#array2D.map((row) => row[colIndex])
        );
    }
}
