"use strict";
var Stato;
(function (Stato) {
    Stato["DISPONIBILE"] = "disponibile";
    Stato["ESAURITO"] = "esaurito";
})(Stato || (Stato = {}));
// Creazioni classi:
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
        console.log(`${this.tipo} assegnato a ${cliente.nome}`);
    }
}
class Cliente {
    constructor(nome, cognome, email, metodoDiPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoDiPagamento = metodoDiPagamento;
    }
    ordinaProdotto(prodotto) {
        if (prodotto.stato == Stato.DISPONIBILE) {
            console.log(`il prodotto  ${prodotto.id} è stato ordinato`);
        }
        else {
            console.log('prodotto non disponibile');
        }
    }
}
class ProcessoProduzione {
    constructor(nomeProcesso, descrizione, prodottiInProduzione) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }
    aggiungiProdotto(prodotto) {
        console.log(`${this.nomeProcesso} è stato aggiunto per produrre ${prodotto.tipo}`);
    }
}
// Creazione instanze:
const prodotto1 = new Prodotto('bikini', 34567, 'S', 'nero', 'disponibile');
const prodotto2 = new Prodotto('telo', 12345, 'M', 'blu', 'disponibile');
const prodotto3 = new Prodotto('slip', 45879, 'L', 'verde', 'esaurito');
const prodotto4 = new Prodotto('top', 25794, 'S', 'viola', 'disponibile');
const cliente1 = new Cliente('Giogia', 'Rossi', 'evevw@wevuwen', 'Bonifico');
const cliente2 = new Cliente('Paolo', 'Verdi', 'evevw@wevuwen', 'Carta di credito');
const cliente3 = new Cliente('Luca', 'Neri', 'evevw@wevuwen', 'Bonifico');
const cliente4 = new Cliente('Maria', 'Rossi', 'evevw@wevuwen', 'Bonifico');
const processo1 = new ProcessoProduzione('produzione bikini', 'sportivo', [prodotto1, prodotto2, prodotto3]);
// test
prodotto1.assegnaCliente(cliente1);
cliente2.ordinaProdotto(prodotto3);
processo1.aggiungiProdotto(prodotto2);
