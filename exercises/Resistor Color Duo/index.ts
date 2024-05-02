const colorArray = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];

function decodedValue(colors: string[]): number {
    let resistance = "";
    for (let i = 0; i < colors.length; i++) {
        if (resistance.length === 2) return Number(resistance);
        if (colorArray.indexOf(colors[i]) > -1) {
            resistance += colorArray.indexOf(colors[i]);
        }
    }
    return Number(resistance);
}

console.log(decodedValue(["yellow", "blue"]));
