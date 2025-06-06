enum Stato {
    DISPONIBILE = 'disponibile',
    ESAURITO = 'esaurito'
}

interface IProdotto {
    tipo : string,
    id: number,
    taglia: string,
    colore: string,
    stato: Stato,

    assegnaCliente(cliente: ICliente): void;
}

interface ICliente {
    nome: string,
    cognome: string,
    email: string,
    metodoDiPagamento: string,

    ordinaProdotto(prodotto: IProdotto) : void;
}

interface IProcessoProduzione {
    nomeProcesso: string,
    descrizione: string,
    prodottiInProduzione: IProdotto[]

    aggiungiProdotto(prodotto: IProdotto) : void
}


// Creazioni classi:


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


// Creazione oggetti:


const prodotto1 = new Prodotto ('bikini', 34567, 'S', 'nero', Stato.DISPONIBILE);
const prodotto2 = new Prodotto ('telo', 12345, 'M', 'blu', Stato.DISPONIBILE);
const prodotto3 = new Prodotto ('slip', 45879, 'L', 'verde', Stato.ESAURITO);
const prodotto4 = new Prodotto ('top', 25794, 'S', 'viola', Stato.DISPONIBILE);

const cliente1 = new Cliente ('Giogia', 'Rossi', 'evevw@wev23owen', 'Bonifico');
const cliente2 = new Cliente ('Paolo', 'Verdi', 'evevw@wd3uwen', 'Carta di credito');
const cliente3 = new Cliente ('Luca', 'Neri', 'evevw@wevu3rcjoen', 'Bonifico');
const cliente4 = new Cliente ('Maria', 'Rossi', 'evevw@wev3rcnuwen', 'Bonifico');

const processoArticoliSportivi = new ProcessoProduzione ('produzione di articoli sportivi', 'sportivo', [prodotto1, prodotto2, prodotto3] )


// test

prodotto1.assegnaCliente(cliente1);
cliente2.ordinaProdotto(prodotto1);
cliente3.ordinaProdotto(prodotto2);
processoArticoliSportivi.aggiungiProdotto(prodotto4)