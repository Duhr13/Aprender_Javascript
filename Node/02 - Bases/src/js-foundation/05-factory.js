const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');

const BuildPerson = ({name, birthdate}) => {
    
    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }

}

const obj = {name: 'John', birthdate: '1985-10-21'};

const john = BuildPerson(obj);

console.log(john);