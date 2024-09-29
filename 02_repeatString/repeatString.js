const repeatString = function (name, interval) {
    let result = "";
    if (interval < 0) {
        return "ERROR";
    } else {
        while (interval > 0) {
            result += name;
            --interval;
        }
    }
    return result;
};
// Do not edit below this line
module.exports = repeatString;
