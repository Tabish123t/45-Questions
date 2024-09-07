// CITIES

function describe_city(city:string, country:string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// CALLING WITH FUNCTION CITY NAMES

describe_city("Lahore");

describe_city("Sialkot");

// CALLING FUNCTION WITHOUT DEFAULT VALUE OF COUNTRY

describe_city("Dubai", "UAE");