/*
Problem 4: Create an HTML page with a dropdown list with three items in it, 
then write a JavaScript function that displays the number of items and displays the item in the list.


<p>Choose your drink</p>
    <select id="drinks">
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
        <option value="Mountain Dew">Mountain Dew</option>
        <option value="Water">Water</option>

    </select>
    <input type="button" onclick="getOptions()" value="Count and Output all items">
    <p id="p1"></p>

*/

function getOptions(){
    const myDrinks= document.getElementById("drinks")                       //create a variable where it will find our select element with the corresponding ID;
    const numOfItems = document.getElementById("drinks").length;             //create a variable that displays the number of items inside our select element;
    console.log(numOfItems);

    for (let i = 0; i < myDrinks.length; i++) {                                   //write a "for" loop to display the items inside the list;
        console.log(myDrinks.options[i].text);
    }
}