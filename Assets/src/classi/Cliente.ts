import { ICliente } from "../interfacce/ICliente.js";
import { IProdotto, Stato } from "../interfacce/IProdotto.js";

class Cliente implements ICliente {

    nome: string;
    cognome: string;
    email: string;
    metodoDiPagamento: string;

    constructor(
       nome: string,
       cognome: string,
       email: string,
       metodoDiPagamento: string,
    ) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
       }

       ordinaProdotto(prodotto: IProdotto): void {
           if (prodotto.stato == Stato.DISPONIBILE){
                prodotto.stato = Stato.ESAURITO
                console.log(`il prodotto  ${prodotto.tipo}: ${prodotto.id}, è stato ordinato da ${this.nome}`)
            }
           else {
            console.log(`il prodotto: ${prodotto.tipo} ${prodotto.id} non è disponibile`);
           }
       }
}
export { Cliente }
