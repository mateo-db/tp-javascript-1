console.log('hola mundo')


const nombre = 'Cabezas Mateo';
let edad, carrera, estoyCursando;
edad = 23;
carrera = 'Tecnicatura Superior en Desarrrollo de Software Multiplataforma'
estoyCursando = 'si'


console.log(`Soy ${nombre}, tengo ${edad} de edad. Estoy cursando la carrera de ${carrera}? La respuesta es ${estoyCursando}.`)

const nota = 8;
if (nota >= 6) {
    console.log("Aprobado")
} else {
    console.log("Desaprobado")
}

edad = 15;
if (edad < 13) {
    console.log('Niño');
} else if (edad >= 13 && edad <= 17) {
    console.log('Adolescente');
} else {
    console.log('Adulto');
}

const numero = 4
for (let i = 1; i<=10; i++) {
    console.log(`${i*numero}`)
}

let acc = 0

for (let i = 1; i<=100; i++) {
    console.log(`${acc=acc+i}`)
}