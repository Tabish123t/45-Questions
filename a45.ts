// CARS

function createCar(manufacturer: string, modelName: string, ...options: Record<string, unknown>[]): Record<string, unknown> {
    const car = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...options),
    };
    return car;
}

// Example usage:
const myCar = createCar("Honda", "City", { color: "White" }, { hasSunroof: false });
console.log(myCar);
