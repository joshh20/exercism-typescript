function age(planet: string, seconds: number): number {
    const planets = [
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune",
    ];
    const orbitalPeriodAsEarthYears = [
        0.2408467, 0.61519726, 1.0, 1.8808158, 11.862615, 29.447498, 84.016846,
        164.79132,
    ];

    const chosenPeriod = orbitalPeriodAsEarthYears[planets.indexOf(planet)];

    return Number((seconds / (chosenPeriod * 31557600)).toFixed(2));
}
