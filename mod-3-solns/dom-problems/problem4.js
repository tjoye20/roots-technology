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
    var myDrinks= document.getElementById("drinks")                       //create a variable where it will find our select element with the corresponding ID;
    var displayText = "Number of items in this dropdown menu is : ";      //create a variable that outputs a string;
    var itemList = document.getElementById("drinks").length;              //create a variable that displays the number of items inside our select element;
  for (var i=0; i<myDrinks.length;i++)                                    //write a "for" loop to display the items inside the list as the list grow;
    {
      displayText = displayText + "\n " + myDrinks.options[i].text;       //set how we want to display the output;
    }
  // document.getElementById("p1").innerHTML = displayText;               //write the output in a new P element;
  alert(displayText);
  }