# Sistema di Gestione Prodotti, Clienti e Processo di Produzione

Questo progetto implementato in TypeScript consente di gestire lo stato dei prodotti, l'assegnazione ai clienti e l'integrazione con processi di produzione.

## Funzionalità

- Creazione e gestione di **prodotti**, con proprietà come tipo, ID, taglia, colore e stato (disponibile o esaurito).
- Creazione e gestione di **clienti**, con informazioni personali e metodo di pagamento.
- Ordinazione di prodotti da parte dei clienti, con controllo di disponibilità.
- Creazione e gestione di **processi di produzione**, con la possibilità di aggiungere prodotti.

## Installazione

Per utilizzare il progetto, segui questi passaggi:

1. Assicurati di avere **Node.js** installato sulla tua macchina.
2. Clona il repository: git clone <URL-del-repository>
3. Accedi alla cartella del progetto: cd nome-progetto.
4. Installa le dipendenze: npm install.

## Configurazione

Il progetto utilizza TypeScript. Per compilare il codice, esegui: npx tsc.
Assicurati che il file tsconfig.json sia configurato correttamente per il tuo ambiente.

## Procedimento

### **Enum Stato**

enum Stato {
DISPONIBILE = 'disponibile',
ESAURITO = 'esaurito'
}

Questa struttura aiuta a evitare errori nell'assegnazione di stati ai prodotti.

### **Interfacce**

Abbiamo tre interfacce:

-IProdotto: definisce le proprietà e il metodo assegnaCliente().
-ICliente: definisce le proprietà del cliente e il metodo ordinaProdotto().
-IProcessoProduzione: gestisce i processi di produzione e permette di aggiungere prodotti.

### **Classi e Implementazione**

Le classi Prodotto, Cliente e ProcessoProduzione implementano le rispettive interfacce.

### **Classi e Implementazione**

const prodotto1 = new Prodotto('bikini', 34567, 'S', 'nero', Stato.DISPONIBILE);
const cliente1 = new Cliente('Giogia', 'Rossi', 'email@example.com', 'Bonifico');
const processo1 = new ProcessoProduzione('produzione', 'sportivo', [prodotto1.tipo]);

Qui creiamo un prodotto, un cliente e un processo di produzione.

### **Esecuzione delle funzionalità**

prodotto1.assegnaCliente(cliente1);
cliente1.ordinaProdotto(prodotto1);
processo1.aggiungiProdotto(prodotto1);

## Link App

https://leti74.github.io/category-book-finder/
