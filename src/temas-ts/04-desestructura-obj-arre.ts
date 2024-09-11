interface Reproductor
{
    volumen:number;
    segundo: number;
    cancion:string;
    detalles: Detalles;
}

interface Detalles
{
    autor: string;
    year: number;
}

const reproductor:Reproductor =
{
    volumen: 50,
    segundo: 10,
    cancion:"A Pearl",
    detalles:
        {
            autor: "Mitski",
            year: 2023
        }
}

/*console.log('El volumen actual es: ${reproductor.volumen}');
console.log('Los segundos son: ${reproductor.segundo}');
console.log('Los cancion es: ${reproductor.cancion}');
console.log('El cantante es: ${reproductor.detalles.autor}');
console.log('El año es: ${reproductor.detalles.year}'); */

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`Los cancion es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El año es: ${year}`);

const mha:string[]=['Deku', 'Bakugo', 'Todoroki', 'Uraraka'];
console.log(`Personaje 1 ${mha[0]}`);
console.log(`Personaje 2 ${mha[1]}`);
console.log(`Personaje 3 ${mha[2]}`);
console.log(`Personaje 4 ${mha[3]}`);

const[a,,b] = mha;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 2 ${b}`);

//las comillas alreves se colocan con: ALT + 96