//volumen area de circulo, rectangulo, cilindro, imprimir el area de la figura y despues el volumen de la figura
//rectangulo = caja, pentagono = caja pentagonal, circulo = cilindro

//hacer las formulas de area, luego heredarlas a volumen

export class Area1
{
    protected altura:number;
    protected base:number;
    protected radio:number;
    protected apotema:number;

    constructor(altura:number, base:number, apotema:number, radio:number)
    {
        this.base = base;
        this.altura = altura;
        this.radio = radio;
        this.apotema = apotema;

    }
    imprimir()
    {
        console.log(`El área del rectangulo es de: ${this.base * this.altura}`)
    }
}

const area1 = new Area1(5, 5);
area1.imprimir()



/*const area2 = new Area1(5)
console.log(`El area del pentagono es:`)

const area2 = new Area1(6);
area2.imprimir3() */

/*class Empleado extends Persona3
{
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number)
    {
        super(nombre, edad);
        this.sueldo = sueldo
    }
    imprimir(): void {
        console.log(`El sueldo de ${this.nombre} es de: ${this.sueldo}`)
    }
    pagarImpuesto()
    {
        if(this.sueldo>5000)        
            console.log(`${this.nombre} debe pagar impuestos ahora`)
        else
            console.log(`${this.nombre} no debe pagar impuestos`)
    }
}

const persona3 = new Persona3('Ivan', 23);
persona3.imprimir()

const Empleado1 = new Empleado('Esther', 20, 6000);
Empleado1.imprimir();
Empleado1.pagarImpuesto();
*/