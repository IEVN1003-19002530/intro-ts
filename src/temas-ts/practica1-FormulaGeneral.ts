//Hacer que el programa haga todo el proceso de la formula general xd

class FormulaGeneral
{
  private a: number;
  private b: number;
  private c: number;
  private cuadratica: number;
  private raiz0: number;
  private raiz1: number;
  private raiz2: number;
    
  constructor(a: number, b: number, c: number)
  {
    this.a = a;
    this.b = b;
    this.c = c;
    this.cuadratica = 0;
    this.raiz0 = 0;
    this.raiz1 = 0;
    this.raiz2 = 0;
  }
  
  Cuadratico() 
  {
    this.cuadratica = (this.b * this.b) - (4 * this.a * this.c);
    console.log(`El discriminante cuadratico es de: ${this.cuadratica}`);
  }
  
  Raices()
  {
    this.Cuadratico();
    if (this.cuadratica > 0)
    {
      this.raiz1 = (-this.b + Math.sqrt(this.cuadratica)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(this.cuadratica)) / (2 * this.a);
      console.log(`Raíz x1 = ${this.raiz1}, Raiz x2 = ${this.raiz2}`);
    } 
    else if (this.cuadratica === 0)
    {
      this.raiz0 = -this.b / (2 * this.a);
      console.log(`Raíz x = ${this.raiz0}`);
    }
  }
}
  
const ecuacion = new FormulaGeneral(-20, 7, 3);
ecuacion.Raices();