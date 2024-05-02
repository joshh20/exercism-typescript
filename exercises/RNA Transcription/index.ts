function toRna(sequence: string): string {
    const dnaArray = ["G", "C", "T", "A"];
    const rnaArray = ["C", "G", "A", "U"];
    const sequenceArray = [...sequence];
    let rnaString = "";

    for (const nucleotide of sequenceArray) {
        if (!dnaArray.includes(nucleotide))
            throw new Error("Invalid input DNA.");
        rnaString += rnaArray[dnaArray.indexOf(nucleotide)];
    }

    return rnaString;
}
