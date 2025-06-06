import { IProdotto, Stato } from "../interfacce/IProdotto.js";
import { ICliente } from "../interfacce/ICliente.js";

class Prodotto implements IProdotto {
    
    tipo : string;
    id: number;
    taglia: string;
    colore: string;
    stato: Stato;

    constructor (
        tipo : string,
        id: number,
        taglia: string,
        colore: string,
        stato: Stato,
    ) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;};

    assegnaCliente(cliente: ICliente): void {
        if (this.stato == Stato.DISPONIBILE) {
           this.stato = Stato.ESAURITO
           console.log(`${this.tipo}: ${this.id}, assegnato a ${cliente.nome}`)
        }
        else {
            console.log(`il prodotto  ${this.tipo}: ${this.id}, è stato ordinato da ${cliente.nome}`)
        }
       
    }
}     

export {Prodotto}