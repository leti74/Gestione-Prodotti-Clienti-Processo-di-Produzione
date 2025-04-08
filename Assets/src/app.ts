enum Stato {
    DISPONIBILE = 'disponibile',
    ESAURITO = 'esaurito'
}

interface IProdotto {
    tipo : string,
    id: number,
    taglia: string,
    colore: string,
    stato: string,

    assegnaCliente(cliente: Cliente): void;
}

interface ICliente {
    nome: string,
    cognome: string,
    email: string,
    metodoDiPagamento: string,

    ordinaProdotto(prodotto: Prodotto) : void;
}

interface IProcessoProduzione {
    nomeProcesso: string,
    descrizione: string,
    prodottiInProduzione: IProdotto[],

    aggiungiProdotto(prodotto: Prodotto) : void
}


// Creazioni classi:


class Prodotto implements IProdotto {
    
    tipo : string;
    id: number;
    taglia: string;
    colore: string;
    stato: string;

    constructor (
        tipo : string,
        id: number,
        taglia: string,
        colore: string,
        stato: string,
    ) {
        this.tipo = tipo;
        this.id = id;
        this.taglia = taglia;
        this.colore = colore;
        this.stato = stato;};

    assegnaCliente(cliente: Cliente): void {
        console.log(`${this.tipo} assegnato a ${cliente.nome}`)
    }
}     

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

       ordinaProdotto(prodotto: Prodotto): void {
           if (prodotto.stato == Stato.DISPONIBILE)
            {console.log(`il prodotto  ${prodotto.id} è stato ordinato`)}
           else {
            console.log('prodotto non disponibile');
           }
       }
}

class ProcessoProduzione implements IProcessoProduzione {

    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];

    constructor(
        nomeProcesso: string,
        descrizione: string,
        prodottiInProduzione: IProdotto[],
    ) {
        this.nomeProcesso = nomeProcesso;
        this.descrizione = descrizione;
        this.prodottiInProduzione = prodottiInProduzione;
    }

    aggiungiProdotto(prodotto: Prodotto): void {
        console.log (`${this.nomeProcesso} è stato aggiunto per produrre ${prodotto.tipo}`)
    }
}


// Creazione instanze:

const prodotto1 = new Prodotto ('bikini', 34567, 'S', 'nero', 'disponibile');
const prodotto2 = new Prodotto ('telo', 12345, 'M', 'blu', 'disponibile');
const prodotto3 = new Prodotto ('slip', 45879, 'L', 'verde', 'esaurito');
const prodotto4 = new Prodotto ('top', 25794, 'S', 'viola', 'disponibile');

const cliente1 = new Cliente ('Giogia', 'Rossi', 'evevw@wevuwen', 'Bonifico');
const cliente2 = new Cliente ('Paolo', 'Verdi', 'evevw@wevuwen', 'Carta di credito');
const cliente3 = new Cliente ('Luca', 'Neri', 'evevw@wevuwen', 'Bonifico');
const cliente4 = new Cliente ('Maria', 'Rossi', 'evevw@wevuwen', 'Bonifico');

const processo1 = new ProcessoProduzione ('produzione bikini', 'sportivo', [prodotto1, prodotto2, prodotto3] )


// test

prodotto1.assegnaCliente(cliente1);
cliente2.ordinaProdotto(prodotto3);
processo1.aggiungiProdotto(prodotto2)