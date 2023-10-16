'use strict';

console.log('This is my log');
alert('There is valuable information here')

function NameIs(){
const usersName = prompt('Who are you?')

return usersName;
}

let HiIAm = NameIs();

console.log('HiIAm');

function greeting(){
    document.write('Hey ' + HiIAm + ' Here is info you didnt know you needed until now');
}

function catLoverOrNot() {
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
}