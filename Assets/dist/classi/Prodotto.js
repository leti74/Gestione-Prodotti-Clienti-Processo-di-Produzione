import { Stato } from "../interfacce/IProdotto.js";
class Prodotto {
    constructor(tipo, id, taglia, colore, stato) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;
    }
    ;
    assegnaCliente(cliente) {
        if (this.stato == Stato.DISPONIBILE) {
            this.stato = Stato.ESAURITO;
            console.log(`${this.tipo}: ${this.id}, assegnato a ${cliente.nome}`);
        }
        else {
            console.log(`il prodotto  ${this.tipo}: ${this.id}, è stato ordinato da ${cliente.nome}`);
        }
    }
}
export { Prodotto };
