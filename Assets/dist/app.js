import { Stato } from './interfacce/IProdotto.js';
import { Prodotto } from './classi/Prodotto.js';
import { Cliente } from './classi/Cliente.js';
import { ProcessoProduzione } from './classi/ProcessoProduzione.js';
// Creazione oggetti:
const prodotto1 = new Prodotto('bikini', 34567, 'S', 'nero', Stato.DISPONIBILE);
const prodotto2 = new Prodotto('telo', 12345, 'M', 'blu', Stato.DISPONIBILE);
const prodotto3 = new Prodotto('slip', 45879, 'L', 'verde', Stato.ESAURITO);
const prodotto4 = new Prodotto('top', 25794, 'S', 'viola', Stato.DISPONIBILE);
const cliente1 = new Cliente('Giogia', 'Rossi', 'evevw@wev23owen', 'Bonifico');
const cliente2 = new Cliente('Paolo', 'Verdi', 'evevw@wd3uwen', 'Carta di credito');
const cliente3 = new Cliente('Luca', 'Neri', 'evevw@wevu3rcjoen', 'Bonifico');
const cliente4 = new Cliente('Maria', 'Rossi', 'evevw@wev3rcnuwen', 'Bonifico');
const processoArticoliSportivi = new ProcessoProduzione('produzione di articoli sportivi', 'sportivo', [prodotto1, prodotto2, prodotto3]);
// test
prodotto1.assegnaCliente(cliente1);
cliente2.ordinaProdotto(prodotto1);
cliente3.ordinaProdotto(prodotto2);
processoArticoliSportivi.aggiungiProdotto(prodotto4);
