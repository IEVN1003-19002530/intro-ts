function sumar()
{
    let suma = 0;
    for(let i = 0; i < 10; i++)
    {
        suma += i;
    }
    console.log(suma);
}
sumar();

function resta(a:number, b:number):number
{
    return a - b;
}
console.log(resta(10, 5));

interface mascotas
{
    nombre: string,
    edad: number,
    raza: string
    mostrarEdad:()=>void;
}

let perro: mascotas =
{
    nombre: 'Chucha',
    edad: 12,
    raza: 'Chihuahua',
    mostrarEdad()
    {
        console.log('La edad es ${this.edad}')
    }
}

console.log(perro.edad);

function calcular(mascota:mascotas, x:number): void
{
    mascota.edad+=x;
    console.log(mascota);
}

calcular(perro, 4)
