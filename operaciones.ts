class Operacion {
   operandos: number[];

   constructor(input: number[]) {
      this.operandos = input.filter((i) => !isNaN(i));
   }

   sumar(arr = this.operandos, n = this.operandos.length): number {
      return n <= 0 ? 0 : this.sumar(arr, n - 1) + arr[n - 1];
   }
   restar(arr = this.operandos, n = this.operandos.length): number {
      return n <= 1 ? arr[0] : this.restar(arr, n - 1) - arr[n - 1];
   }
   multiplicar(arr = this.operandos, n = this.operandos.length): number {
      return n <= 0 ? 1 : this.multiplicar(arr, n - 1) * arr[n - 1];
   }
   dividir(arr = this.operandos, n = this.operandos.length): number {
      return n <= 1 ? arr[0] : this.dividir(arr, n - 1) / arr[n - 1];
   }
}

class OperationController {
   operation: Operacion;
   result: number;

   constructor(input: string) {
      input.includes("+")
         ? ((this.operation = new Operacion(input.split("+").map((e) => parseInt(e)))),
           (this.result = this.operation.sumar()))
         : input.includes("-")
         ? ((this.operation = new Operacion(input.split("-").map((e) => parseInt(e)))),
           (this.result = this.operation.restar()))
         : input.includes("*")
         ? ((this.operation = new Operacion(input.split("*").map((e) => parseInt(e)))),
           (this.result = this.operation.multiplicar()))
         : ((this.operation = new Operacion(input.split("/").map((e) => parseInt(e)))),
           (this.result = this.operation.dividir()));
   }
}

export { OperationController, Operacion };
