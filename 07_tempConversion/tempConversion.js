const convertToCelsius = function (fahrenheitTemperature) {
    if (typeof fahrenheitTemperature !== "number") {
        return "Error";
    }
    const celsiusTemperature = ((fahrenheitTemperature - 32) * 5) / 9;
    if (celsiusTemperature % 1 !== 0) {
        return parseFloat(celsiusTemperature.toFixed(1));
    }
    return celsiusTemperature;
};

const convertToFahrenheit = function (celsiusTemperature) {
    if (typeof celsiusTemperature !== "number") {
        return "Error";
    }
    const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;

    if (fahrenheitTemperature % 1 !== 0) {
        return parseFloat(fahrenheitTemperature.toFixed(1));
    }
    return fahrenheitTemperature;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
