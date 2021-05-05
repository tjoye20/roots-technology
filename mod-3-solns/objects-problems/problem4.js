//Problem 4: Create an object, then write a JavaScript function that checks whether an object contains the specified key.


//object
var car = {
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

var person = {
    firstName : 'John',
    lastName : 'Smith',
    age : 36,
    eyeColor : 'blue',
    occupation : 'teacher',
    teachingSubject : 'Chemistry',
    hobbies :['reading', 'writing', 'experiment'],
    famousSaying : function() {
        console.log ('try harder!');
    }

};

//code starts here

console.log(car.hasOwnProperty('wheelSize'));              //output true;

//writing a fucntion that can check whether an object contains the specified key

function checkItem(obj, item) {                            //create a function that accepts two parameter object(obj) and an item name;
    return obj.hasOwnProperty(item)                        //using .hasOwnProperty() to search through the object that we input;
};

console.log(checkItem(car, "wheelSize")); 