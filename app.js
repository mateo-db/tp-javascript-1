//actividad 1
const nombre = 'Cabezas Mateo';
let edad, carrera, estoyCursando;
edad = 23;
carrera = 'Tecnicatura Superior en Desarrrollo de Software Multiplataforma'
estoyCursando = 'si'


console.log(`Soy ${nombre}, tengo ${edad} de edad. Estoy cursando la carrera de ${carrera}? La respuesta es ${estoyCursando}.`)

//actividad 2
const nota = 8;
if (nota >= 6) {
    console.log("Aprobado")
} else {
    console.log("Desaprobado")
}

//actividad 3
edad = 15;
if (edad < 13) {
    console.log('Niño');
} else if (edad >= 13 && edad <= 17) {
    console.log('Adolescente');
} else {
    console.log('Adulto');
}

//actividad 4
const numero = 4
for (let i = 1; i<=10; i++) {
    console.log(`${i*numero}`)
}

//actividad 5
let acc = 0

for (let i = 1; i<=100; i++) {
    console.log(`${acc=acc+i}`)
}

//actividad 6
for (let i = 1; i<=20; i++) {
    if (i%2 === 0) {
        console.log(`El numero ${i} es par!`)
    } else {
        console.log(`El numero ${i} es impar.`)
    }
}

//actividad 7
const alumno = {
    nombre: 'Agostina',
    apellido: 'Gonzalez',
    nota: 10
}

console.log(`
    Apellido: ${alumno.apellido}
    Nombre: ${alumno.nombre}
    Nota: ${alumno.nota}
    Estado: ${nota >= 6 ? 'Está aprobado!' : 'Está desaprobado'}
`)