/*

REDACTED.

Problem 3: Create a basic HTML page with a table and two rows in it. 
Then, write a JavaScript function to add rows to a table.

    <table id="myTable">
        <tr>
            <td>roll 1 cell 1</td>
            <td>roll 1 cell 2</td>
        </tr>
        <tr>
            <td>roll 2 cell 1</td>
            <td>roll 2 cell 2</td>
        </tr>
    </table>

*/


function addCell() {
    const table = document.getElementById('myTable');                 //find and set a variable to our table inside HTML with the corresponding ID;
    const row = table.insertRow(0);                                   //create a variable where it creates an empty table row element and add it at the first position of the table;
    const cell1 = row.insertCell(0);                                  //create a variable where it adds a new row at the first position of our new tabele row element;
    const cell2 = row.insertCell(1);                                  //create a variable where it adds a new row at the second position of our new table row element;

    cell1.innerHTML = "New cell 1";                                 //add our new row element to the HTML using .innerHTML;
    cell2.innerHTML = "New cell 2";
}
