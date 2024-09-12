class Persona3
{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string, edad:number)
    {
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir()
    {
        console.log(`Hola, mi nombre es: ${this.nombre} y tengo: ${this.edad}`)
    }
}

class Empleado extends Persona3
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
