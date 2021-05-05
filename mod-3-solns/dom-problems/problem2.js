/*
Problem 2: Create a P element with a link inside. 
Then, write a JavaScript function to get the HREF attribute of the link.

*/

//something like

// <a id='link' href="http://www.google.com">Click the button below to see where you are going.</a>

function getLink(){
    let showLink = document.getElementById('link').getAttribute('href');
    document.getElementById('p1').innerHTML = showLink;
} 