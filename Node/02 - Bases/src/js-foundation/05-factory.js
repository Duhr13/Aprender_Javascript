

const BuildPerson = ({name, birthdate}) => {
    
    return {
        id: new Date().getTime(),
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }

}

const obj = {name: 'John', birthdate: '1985-10-21'};

const john = BuildPerson(obj);

console.log(john);