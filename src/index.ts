import { FilaCircular } from "./filaCircular";
import { Ui } from "./ui";
let ui : Ui = new Ui()
let lista : FilaCircular = new FilaCircular(6);
ui.startloop(lista)