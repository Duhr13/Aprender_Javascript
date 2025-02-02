const fs = require('fs');

const data = fs.readFileSync('README.md', 'utf-8');

const wordCount = data.split(' ');

//Primer método para contar cuántas veces aparece la palabra 'react' en el archivo README.md
const contadorReact = data.match(/react/gi).length;

//Segundo método para contar cuántas veces aparece la palabra 'react' en el archivo README.md
const reactWordCount = data.split('react').length;

//Tercer método para contar cuántas veces aparece la palabra 'react' en el archivo README.md
const contadorReact2 = wordCount.filter(word => word.toLowerCase().includes('react')).length;

console.log('Palabras: ', wordCount.length);
console.log('Palabras React: ', contadorReact);
console.log('Palabras React: ', reactWordCount);
console.log('Palabras React: ', contadorReact2);