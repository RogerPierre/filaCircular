import { FilaCircular } from "./filaCircular";
export class Ui{
//     Adicionar um novo elemento ao final da fila.
// Remover e retornar o primeiro elemento da fila (o elemento mais antigo).
// Retornar o elemento que está no início da fila .
// Verificar se a fila está vazia.
// Verificar se a fila está cheia.
// Exibir a quantidade de elementos da fila.
// Exibir os elementos da fila.
// Retornar a capacidade máxima da fila.
// Exibir quantos elementos ainda podem ser inseridos na fila.
    startloop(lista:FilaCircular){
        while(true){
            let reposta : number = Number(prompt(`Lista: ${lista.exibirFila()} \n add(1)\nremove(2)\nfront(3)\nempty?(4)\nfull?(5)\nnumElements(6)\nelements(7)\ncapacite(8)\nFreeLoots(0)`))
            switch(reposta){
                case 0:
                    alert(lista.retornarQuantosEspacosFaltam())
                    break
                case 1:
                    alert(lista.adicionarElemento(Number(prompt("qual Elemento deseja adicionar."))))
                    break
                case 2:
                    alert(lista.removerElemento())
                    break
                case 3:
                    alert(lista.retornarElementoInicial())
                    break
                case 4:
                    alert(lista.verificarSeVazia())
                    break
                case 5:
                    alert(lista.verificarSeCheia())
                    break
                case 6:
                    alert(lista.mostrarTamanho())
                    break
                case 7:
                    alert(lista.exibirFila())
                    break
                case 8:
                    alert(lista.mostrarCapacidade())
                    break
                case reposta:
                    alert("Responda algo valido.")
                    break
                
            }
        }
    }
}