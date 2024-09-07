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