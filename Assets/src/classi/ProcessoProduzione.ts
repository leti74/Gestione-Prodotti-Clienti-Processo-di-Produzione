import { IProdotto } from "../interfacce/IProdotto.js";
import { IProcessoProduzione } from "../interfacce/IProcessoProduzione.js";

class ProcessoProduzione implements IProcessoProduzione {

    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[]

    constructor(
        nomeProcesso: string,
        descrizione: string,
        prodottiInProduzione: IProdotto[],
    ) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }

    aggiungiProdotto(prodotto: IProdotto): void {
        this.prodottiInProduzione.push(prodotto);
       
        console.log(`${this.nomeProcesso} è stato aggiunto per produrre l'articolo  ${prodotto.tipo}: ${prodotto.id}`);
        console.log(this.prodottiInProduzione)
    }
}
export { ProcessoProduzione }