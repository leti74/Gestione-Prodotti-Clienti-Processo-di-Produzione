import { IProdotto } from "./IProdotto.js"

interface IProcessoProduzione {
    nomeProcesso: string,
    descrizione: string,
    prodottiInProduzione: IProdotto[]

    aggiungiProdotto(prodotto: IProdotto) : void
}

export { IProcessoProduzione}