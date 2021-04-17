import { QuestionCollection, prompt } from "inquirer";
import { OperationController } from "./operaciones";

class QuestionController {
   constructor() {}
   history: Array<string[]> = [];
   lastResult?: number;
   question: QuestionCollection = [
      {
         type: "input",
         name: "input",
         message: ":",
         validate: (value) => {
            var valid =
               value.includes("+") ||
               value.includes("-") ||
               value.includes("*") ||
               value.includes("/") ||
               value.includes("h") ||
               value.includes("r") ||
               value.includes("f");
            return (
               valid ||
               "Solo podés sumar(+), restar(-), multiplicar(*), dividir(/), historial(h), reiniciar(r) o finalizar(f)"
            );
         },
      },
   ];

   ask() {
      prompt(this.question).then((answers) => {
         switch (answers.input) {
            case "f":
               console.log("Calculadora finalizada");
               break;
            case "r":
               this.history.push(["clear"]);
               delete this.lastResult;
               this.ask();
               break;
            case "h":
               console.table(this.history);
               this.ask();
               break;
            default:
               if (this.lastResult) {
                  var controler = new OperationController(this.lastResult + answers.input);
               } else {
                  var controler = new OperationController(answers.input);
               }
               this.history.push([answers.input, controler.result]);
               this.lastResult = controler.result;
               console.log("El resultado es: " + controler.result + "\n A continuación?");
               this.ask();
               break;
         }
      });
   }
}

export { QuestionController };
