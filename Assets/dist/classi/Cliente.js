import { Stato } from "../interfacce/IProdotto.js";
class Cliente {
    constructor(nome, cognome, email, metodoDiPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }
    ordinaProdotto(prodotto) {
        if (prodotto.stato == Stato.DISPONIBILE) {
            prodotto.stato = Stato.ESAURITO;
            console.log(`il prodotto  ${prodotto.tipo}: ${prodotto.id}, è stato ordinato da ${this.nome}`);
        }
        else {
            console.log(`il prodotto: ${prodotto.tipo} ${prodotto.id} non è disponibile`);
        }
    }
}
export { Cliente };
