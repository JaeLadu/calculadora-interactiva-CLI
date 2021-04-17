import { QuestionController } from "./preguntas";

function main() {
   console.log("Hola! Bienvenid@ a la calculadora \n Que operación querés realizar?");
   var iniciar = new QuestionController();
   iniciar.ask();
}
main();
