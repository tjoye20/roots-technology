// Problem 1: Write a JavaScript program to delete a property from an object.

const car = {
    maker : 'BMW',
    year : 2021,
    model : 'X4 M40i',
    exteriorColor : 'red',
    wheelSize : '20"',
    interiorColor : 'Black',
    optionsAdded : {
        premiumPackage : true,
        sportsBreaks : true,
        spaceSaver : false,
        advanceGPS: true,
    }
};


function removeProperty (object , property) {
    delete object[property];
    return object;
}

console.log(removeProperty(car, 'optionsAdded'));