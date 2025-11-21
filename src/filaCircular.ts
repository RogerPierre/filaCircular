export class filaCircular {
    capacidade: number; 
    fila: number[];
    frente: number
    tras: number;
    tamanho: number;

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.fila = [];
        this.frente = 0;
        this.tras = -1;
        this.tamanho = 0;
    }
    

}