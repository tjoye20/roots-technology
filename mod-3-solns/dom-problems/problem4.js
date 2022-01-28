/*
Problem 4: Create an HTML page with a dropdown list with three items in it, 
then write a JavaScript function that displays the number of items and displays the item in the list when someone selects something from the dropdown.


<p>Choose your drink</p>
    <select id="drinks" onchange="getOptions()">
        <option value="Coke">Coke</option>
        <option value="Pepsi">Pepsi</option>
        <option value="Mountain Dew">Mountain Dew</option>
        <option value="Water">Water</option>

    </select>
    <p id="p1"></p>

*/

function getOptions(){
    //grab the select element with the corresponding ID;
    const myDrinks= document.getElementById("drinks")

    //grab the number of items inside the select element;                      
    const numOfItems = document.getElementById("drinks").length;             
    console.log(numOfItems);

    //grab the selected dropdown option
    const selectedOption = myDrinks.options[myDrinks.selectedIndex].value;


    for (let i = 0; i < myDrinks.length; i++) {
        console.log(myDrinks.options[i].text);
    }
}