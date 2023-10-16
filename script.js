'use strict';

console.log('This is my log');
alert('There is valuable information here')

const usersName = prompt('Who are you?')
console.log('usersName');

document.write('Hey ' + usersName + ' Here is info you did not know you needed until now')

const animal = prompt('Do you like cats?')
 console.log('animal');

if (animal == "yes"){
     document.write(' Welcome Cat Lover!');
} 
else if (animal== "no"){
         document.write(' Welcome Dog Drooler.');
} else {
    document.write(' You made it!');
}