let auto = {marca: 'Ford', modelo: 'Focus'};

function prototipo() {
    let auto1 = Object.create(auto); 
    console.log(auto1.__proto__);
}