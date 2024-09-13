/*volumen area de circulo, rectangulo, cilindro, imprimir el area de la figura y despues el volumen de la 
figurarectangulo = caja, pentagono = caja pentagonal, circulo = cilindrohacer las formulas de area, luego 
heredarlas a volumen*/

export class Area 
{
    protected base: number;
    protected altura: number;
    protected perimetro: number;
    protected apotema: number;
    protected radio: number;
    protected area: number;

    constructor(base: number, altura: number, perimetro: number, apotema: number, radio: number)
    {
        this.base = base;
        this.altura = altura;
        this.perimetro = perimetro;
        this.apotema = apotema;
        this.radio = radio;
        this.area = 3.1416 * (radio ** 2);
    }

    imprimir()
    {
        console.log(`El área del rectángulo es: ${this.base * this.altura}`);
    }

    imprimir1()
    {
        const areaPentagono = 0.5 * this.perimetro * this.apotema;
        console.log(`El área del pentágono es: ${areaPentagono}`);
    }

    imprimir2()
    {
        console.log(`El área del círculo es: ${this.area}`);
    }
}

const area1 = new Area(15, 10, 0, 0, 0);
area1.imprimir();

const area2 = new Area(0, 0, 7, 7, 0);
area2.imprimir1();

const area3 = new Area(0, 0, 0, 0, 15);
area3.imprimir2();