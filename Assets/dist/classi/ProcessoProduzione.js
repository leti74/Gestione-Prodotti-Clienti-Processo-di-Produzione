class ProcessoProduzione {
    constructor(nomeProcesso, descrizione, prodottiInProduzione) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }
    aggiungiProdotto(prodotto) {
        this.prodottiInProduzione.push(prodotto);
        console.log(`${this.nomeProcesso} è stato aggiunto per produrre l'articolo  ${prodotto.tipo}: ${prodotto.id}`);
        console.log(this.prodottiInProduzione);
    }
}
export { ProcessoProduzione };
