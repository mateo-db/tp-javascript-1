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

//actividad 8
const notas = [6, 4, 5, 8, 7];
let accNotas = 0
let promedioNotas

for (let i = 0; i<notas.length; i++) {
    console.log(`${accNotas = accNotas+notas[i]}`)

}

promedioNotas = accNotas/notas.length

console.log(`
    Promedio del alumno: ${promedioNotas}
    Estado: ${promedioNotas >= 6 ? 'Aprobó!' : 'No aprobó!'}
`)

//actividad 9
const nombreAlumno = 'Filemón'
const arrayNotas = [6, 9, 9, 8, 7]
let promedioNotF
let accNotF = 0
let evaluacionPromedio

for (let i = 0; i<arrayNotas.length; i++) {
    accNotF = accNotF+arrayNotas[i]
}

promedioNotF = accNotF/arrayNotas.length

if (promedioNotF>=7) {
    evaluacionPromedio = 'Muy bueno!'
} else if (promedioNotF>=6) {
    evaluacionPromedio = 'Bueno'
} else {
    evaluacionPromedio = 'Desaprobado'
}

console.log(`
    Nombre del alumno: ${nombreAlumno}
    Promedio: ${promedioNotF}
    Evaluación de Promedio: ${evaluacionPromedio}
`)
