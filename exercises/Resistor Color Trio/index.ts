export const colorArray = [
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

export function decodedResistorValue(colors: string[]): any {
    let resistance =
        10 * colorArray.indexOf(colors[0]) + colorArray.indexOf(colors[1]);
    let multiplier = 10 ** colorArray.indexOf(colors[2]);

    let resistanceValue = resistance * multiplier;

    let unit = "ohms"; // Default unit
    if (resistanceValue >= 1e9) {
        // Gigaohms
        resistanceValue /= 1e9;
        unit = "gigaohms";
    } else if (resistanceValue >= 1e6) {
        // Megaohms
        resistanceValue /= 1e6;
        unit = "megaohms";
    } else if (resistanceValue >= 1e3) {
        // Kiloohms
        resistanceValue /= 1e3;
        unit = "kiloohms";
    }

    return resistanceValue + " " + unit;
}
