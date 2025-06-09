# Sistema di Gestione Prodotti, Clienti e Processo di Produzione

Questo progetto implementato in TypeScript consente di gestire lo stato dei prodotti, l'assegnazione ai clienti e l'integrazione con processi di produzione.

## Funzionalità

- Creazione e gestione di **prodotti** con proprietà come tipo, ID, taglia, colore e stato (disponibile o esaurito).
- Creazione e gestione di **clienti** con informazioni personali e metodo di pagamento.
- Ordinazione di prodotti da parte dei clienti con controllo di disponibilità.
- Creazione e gestione di **processi di produzione** con la possibilità di aggiungere prodotti.

## Installazione

Per utilizzare il progetto, bisogna seguire questi passaggi:

1. Assicurarsi di avere **Node.js** installato.
2. Installare TypeScript: npm i -g typescript.
3. Installare visual studio code.
4. Installare estensiomi: ESLint, Path intellisense, Prettier, Live Server.

## Configurazione

5. Creare una cartella con all'interno il file "app.ts"
6. Eseguire nel terminale di visual studio code il comando: tsc app.ts.

## Procedimento

### **Enum Stato**

Creiamo un enum che aiuta a evitare errori nell'assegnazione di stati ai prodotti:

enum Stato {
DISPONIBILE = 'disponibile',
ESAURITO = 'esaurito'
}

### **Interfacce**

Definiamo tre interfacce:

-IProdotto: definisce le proprietà e il metodo assegnaCliente().
-ICliente: definisce le proprietà del cliente e il metodo ordinaProdotto().
-IProcessoProduzione: gestisce i processi di produzione e permette di aggiungere prodotti.

### **Classi e Implementazione**

Implementiamo le classi Prodotto, Cliente e ProcessoProduzione che a loro volta implementano le rispettive interfacce.

### **instanze**

Creiamo le instanze per generare un prodotto, un cliente e un processo di produzione:

const prodotto1 = new Prodotto ('bikini', 34567, 'S', 'nero', Stato.DISPONIBILE);
const cliente1 = new Cliente ('Giogia', 'Rossi', 'evevw@wev23owen', 'Bonifico');
const processoArticoliSportivi = new ProcessoProduzione ('produzione di articoli sportivi', 'sportivo', [prodotto1, prodotto2, prodotto3]);

### **Esecuzione delle funzionalità**

Verifichiamo il comportamento del sistema associando un prodotto a un cliente con assegnaCliente, permettendo ai clienti di ordinare prodotti con ordinaProdotto e aggiungendo nuovi articoli alla produzione con aggiungiProdotto.

prodotto1.assegnaCliente(cliente1);
cliente2.ordinaProdotto(prodotto1);
cliente3.ordinaProdotto(prodotto2);
processoArticoliSportivi.aggiungiProdotto(prodotto4);

## Link App

https://leti74.github.io/Gestione-Prodotti-Clienti-Processo-di-Produzione/
