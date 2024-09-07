// CITIES
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// CALLING WITH FUNCTION CITY NAMES
describe_city("Lahore");
describe_city("Sialkot");
// CALLING FUNCTION WITHOUT DEFAULT VALUE OF COUNTRY
describe_city("Dubai", "UAE");
