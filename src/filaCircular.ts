export class filaCircular {
    capacidade: number; 
    fila: number[];
    frente: number|null
    tras: number|null;
    tamanho: number;
    //*/ Método construtor para inicializar a fila circular
    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.fila = [];
        this.frente = null;
        this.tras = null;
        this.tamanho = 0;
    }
    verificarSeCheia(): boolean {
        return this.tamanho === this.capacidade;
    }
    verificarSeVazia(): boolean {
        return this.tamanho === 0;
    }
    modificarTamanho():void{
        this.tamanho=this.fila.length;
    }
    adicionarElemento(elemento: number): void {
        if (this.verificarSeCheia()) {
            console.log("A fila está cheia. Não é possível adicionar mais elementos.");
        }else{
            this.fila.push(elemento);
            this.frente=this.fila[this.tamanho-1];
            this.modificarTamanho()
            
        }
    }
    removerElemento(): number | null {
        if (this.verificarSeVazia()) {
            console.log("A fila está vazia. Não há elementos para remover.");
            return null;
        }else{
            let elementoDeTras=this.tras;

            return elementoDeTras;
            
        }
    }


}