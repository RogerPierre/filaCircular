# 📌 Fila Circular em TypeScript

Este repositório apresenta a implementação de uma **classe de Fila Circular (FilaCircular)** desenvolvida em TypeScript por Roger Pierre da turma
de Analise e Desenvolvimento de Sistemas(ADS) da intituição federal do piaui(IFPI) no ano de 2025 como atividade prática na disciplina de 
Estrutura de Dados I.  
O objetivo é demonstrar o uso de estruturas de dados, controle de capacidade e manipulação de elementos seguindo o modelo FIFO.

---

## 🧠 Resumo da Atividade

A atividade consiste em implementar uma fila circular capaz de:

- Armazenar elementos até um limite definido (capacidade);
- Inserir elementos no final da fila;
- Remover elementos do início da fila;
- Verificar condições como fila cheia ou vazia;
- Informar tamanho, capacidade, primeiro elemento e espaços restantes;
- Utilizar ponteiros lógicos (`frente`, `tras`) para simular comportamento circular.

---

## 🧩 Principais Conceitos Utilizados

### ✔️ Programação Orientada a Objetos (POO)
- Uso da classe `FilaCircular`;
- Atributos privados para garantir encapsulamento;
- Métodos organizados para manejo completo da estrutura.

### ✔️ Estrutura de Dados — Fila (FIFO)
- Inserção no final (`push`);
- Remoção no início (`shift`);
- Acesso ao primeiro elemento da fila.

### ✔️ Simulação de Fila Circular
- Controle manual de índices;
- Tamanho sempre atualizado;
- Cálculo de espaços restantes.

### ✔️ Lógica de Verificação
- Métodos para verificar se está cheia ou vazia;
- Retornos descritivos para o usuário.

---

## 📂 Estrutura da Classe

A classe implementa os seguintes métodos principais:

| Método | Descrição |
|--------|-----------|
| `verificarSeCheia()` | Verifica se a fila atingiu a capacidade máxima. |
| `verificarSeVazia()` | Indica se a fila está sem elementos. |
| `mostrarTamanho()` | Retorna a quantidade atual de elementos. |
| `mostrarCapacidade()` | Retorna a capacidade total da fila. |
| `RetornarPrimeiroElemento()` | Obtém o primeiro elemento sem removê-lo. |
| `adicionarElemento()` | Insere um novo elemento no fim da fila. |
| `removerElemento()` | Remove o primeiro elemento (mais antigo). |
| `exibirFila()` | Mostra os elementos armazenados. |
| `retornarQuantosEspacosFaltam()` | Informa quanto espaço ainda está disponível. |

---

## ▶️ Como Executar

```bash
# 1. Instale o TypeScript (se ainda não tiver)
npm install typescript parcel --save-dev

# 2. Compile com o parcel
npm start

# 3. no navegador pesquisar o URL: http://localhost:1234
