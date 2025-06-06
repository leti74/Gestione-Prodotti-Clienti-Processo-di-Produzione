import {IProdotto } from "./IProdotto.js";

interface ICliente {
    nome: string,
    cognome: string,
    email: string,
    metodoDiPagamento: string,

    ordinaProdotto(prodotto: IProdotto) : void;
}

export {ICliente};