function findMatching(drivers, string) {
    const driverMatch = drivers.filter(drivers => drivers.toUpperCase() === string.toUpperCase());
    return !!driverMatch ? driverMatch : undefined;
}

function fuzzyMatch(drivers, string) {
    const driverMatch = drivers.filter(drivers => drivers.substring(0, 2) === string);
    return !!driverMatch ? driverMatch : undefined;
}

function matchName(drivers, string) {
    const driverMatch = drivers.filter(drivers => drivers.name === string);
    return !!driverMatch ? driverMatch : undefined;
}