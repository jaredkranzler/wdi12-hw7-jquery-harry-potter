// console.log("life is a garden, dig it");

// Title: jQuery Magic 
// Type: Homework
// Duration: "4:00+"
// Creator:Karolin Rafalski
// Competencies: create, append/remove elements in the DOM using jQuery, traverse the DOM, add/remove attributes 
// Prerequisites: JavaScript, HTML, CSS 

// Query for your div with the id of container 
// and set it to a variable named $container
// console.log $container
// Create an <h1> element and set it to a variable 
// called $h1 and console log it
// Add some text inside the h1 element. Example 
// text: 'Hogwarts' Why isn't your 

const $body = $('body');
const $container = $('#container');

$h1  = $('<h1>Hogwarts</h1>');
$container.append($h1);


$h2  = $('<h2>Harry Potter</h2>');
$container.append($h2);

$h3  = $('<h3>Gryffindor</h3>');
$container.append($h3);


$h4  = $('<h4>owl</h4>');
$h4.addClass('owl')
$container.append($h4);

$h42  = $('<h4>Wand</h4>');
$h42.addClass('wand')
$container.append($h42)


const $ul = $('<ul></ul>');
$container.append($ul);
const $li = $('<li>Trunk</li>');
$li.addClass('unl');
const $li1 = $('<li>butter beer</li>');
$li1.addClass('secret');
const $li2 = $('<li>invisible cloak</li>');
$li2.addClass('secret');
const $li3 = $('<li>magic map</li>');
$li3.addClass('secret');
const $li4 = $('<li>time turner</li>');
$li4.addClass('secret');
const $li5 = $('<li>').text('leash');
$li5.addClass('secret');
const $li6 = $('<li>Bertie botts every flavor bean</li>');
$li6.addClass('secret');
$ul.append($li, $li1, $li2, $li3, $li4, $li5, $li6)


$h5  = $('<h5>summer 2018</h5>');
$container.append($h5);


$table = $('<table></table>')
$container.append($table)
$thead  = $('<thead></thead>');
$table.append($thead);
$th1  = $('<th>Day</th>');
$thead.append($th1);
$th2  = $('<th>Class 1</th>');
$thead.append($th2);
$th3  = $('<th>Class 2</th>');
$thead.append($th3);

$tr1  = $('<tr></tr>');
$table.append($tr1);
$td1  = $('<td>Monday</td>');
$tr1.append($td1);
$td1  = $('<td>Herbology</td>');
$tr1.append($td1);
$td1  = $('<td>Divination</td>');
$tr1.append($td1);


$tr2  = $('<tr></tr>'); //tr is an empty element
$table.append($tr2);
$td2  = $('<td>Tuesday</td>'); //td fills in the row
$tr2.append($td2);
$td2  = $('<td>History of Magic</td>'); //td fills in the row
$tr2.append($td2);
$td2  = $('<td>Potions</td>');
$tr2.append($td2);

$tr3  = $('<tr></tr>');
$table.append($tr3);
$td3  = $('<td>Wednesday</td>');
$tr3.append($td3);
$td3  = $('<td>Transfiguration</td>');
$tr3.append($td3);
$td3  = $('<td>Defense Against the Dark Arts</td>');
$tr3.append($td3);

$tr4  = $('<tr></tr>');
$table.append($tr4);
$td4  = $('<td>Thursday</td>');
$tr4.append($td4);
$td4  = $('<td>Quidditch practice</td>');
$tr4.append($td4);
$td4  = $('<td>Potions</td>');
$tr4.append($td4);


$tr4  = $('<tr></tr>');
$table.append($tr4);
$td4  = $('<td>Friday</td>');
$tr4.append($td4);
$td4  = $('<td>Defense Against the Dark Arts</td>');
$tr4.append($td4);
$td4  = $('<td>History of Magic</td>');
$tr4.append($td4);


























