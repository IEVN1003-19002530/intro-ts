import { Area } from './practica2 - FigurasArea';

class Volumen extends Area
{
    private Largo: number;
    private BasePenta: number;
    private BaseCili: number; 

    constructor(base: number, altura: number, perimetro: number, apotema: number, radio: number)
    {
        super(base, altura, perimetro, apotema, radio);
        this.Largo = 25;
        this.BasePenta = 0; 
        this.BaseCili = 0;
    }

    PrismaRectangular()
    {
        this.BasePenta = this.base * this.altura * this.Largo;
        console.log(`El volumen del prisma rectangular es: ${this.BasePenta}`);
    }

    PrismaPentagonal()
    {
        this.BasePenta = 0.5 * this.perimetro * this.apotema * this.altura;
        console.log(`El volumen del prisma pentagonal es: ${this.BasePenta}`);
    }

    Cilindro()
    {
        this.BaseCili = 3.1416 * (this.radio ** 2) * this.altura;
        console.log(`El volumen del cilindro es: ${this.BaseCili}`);
    }
}

new Volumen(4, 8, 0, 0, 0).PrismaRectangular();

new Volumen(0, 7, 20, 10, 0).PrismaPentagonal();

new Volumen(0, 4, 0, 0, 4).Cilindro();