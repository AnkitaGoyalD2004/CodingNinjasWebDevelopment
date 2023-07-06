var heading = document.getElementById('one');
heading.style.color = 'purple';
heading.style.backgroundColor='yellow';

var headings = document.getElementsByTagName('h1');
heading[1].innerText = "Second Heading";
heading[0].innerText = "First Heading";

var para = document.getElementsByClassName('para');
para[0].style.color = 'red';
para[0].style.backgroundColor = 'cyan';

var secHeading = document.querySelector('#Two');
secHeading.style.backgroundColor = 'gray';



