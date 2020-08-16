console.log('works')
var titleHeader = 'Bolton Builder';
// current making UL with 3* li
// need to make a variable for each element to make a ul with 3* li a variable for each ***template literals***
var ul = '<ul></ul>';
var li = '<li></li>';
var about = 'About';
var home = 'Home';
var prices = 'Prices'
document.querySelector('.title>h1').innerHTML = titleHeader;
document.querySelector('.list').innerHTML = '<ul><li>Home</li><li>about</li><li>Prices</li></ul>';
