const removeFromArray = function (arrayList, elementToRemove) {
    let newArrayList = [...arrayList];
    arrayList.forEach((element) => {
        if (element === elementToRemove) {
            newArrayList.splice(newArrayList.indexOf(element), 1);
        }
    });
    return newArrayList;
};

// Do not edit below this line
module.exports = removeFromArray;
