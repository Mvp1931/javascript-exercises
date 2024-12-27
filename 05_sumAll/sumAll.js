const sumAll = function (...elements) {
    let sum = 0;

    if (typeof elements[0] !== "number" || typeof elements[1] !== "number") {
        return "ERROR";
    } else if (elements[0] < 0 || elements[1] < 0) {
        return "ERROR";
    } else if (elements[0] % 1 !== 0 || elements[1] % 1 !== 0) {
        return "ERROR";
    } else {
        if (elements[0] > elements[1]) {
            let temp = elements[0];
            elements[0] = elements[1];
            elements[1] = temp;
        }

        for (let i = elements[0]; i <= elements[1]; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
