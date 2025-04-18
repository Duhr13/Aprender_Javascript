//const {emailTemplate} = require('./js-foundation/01-template.js');
//require('./js-foundation/02-destructuring.js');
const {getUserById} = require('./js-foundation/03-callbacks.js');

/* console.log(emailTemplate);

const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [ , , , batman] = characters;

console.log(batman); */

const id = 2;

getUserById(id, function (error, user){
    if(error) {
        throw new Error(error);
    }

    console.log(user);
});