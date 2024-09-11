interface Alumno
{
    nombre: string;
    edad: number;
    email: string;
    calificacion?:number; //si se pone el signo de interrogacion es opcional
}

const Alumno:Alumno = 
{
    nombre: 'Ivan',
    edad: 23,
    email: 'ivan180101@gmail.com'
}

console.table(Alumno);

let mascotas = ['perro', 'gato', 'perico'];
mascotas[1] = 'Nuevo gato';
mascotas.push('leon');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('hola');
console.log(tem);
