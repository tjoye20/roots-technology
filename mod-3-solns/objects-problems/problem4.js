//Problem 4: Create an object, then write a JavaScript function that checks whether an object contains the specified key.


//object
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


//writing a fucntion that can check whether an object contains the specified key

function checkItem(obj, item) {
    return obj.hasOwnProperty(item);
};

console.log(checkItem(car, "wheelSize")); 