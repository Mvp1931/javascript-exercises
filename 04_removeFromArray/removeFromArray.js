const removeFromArray = function (arrayList, ...elementsToRemove) {
    let newArray = [...arrayList];
    elementsToRemove.forEach((element) => {
        newArray = newArray.filter((item) => item !== element);
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
