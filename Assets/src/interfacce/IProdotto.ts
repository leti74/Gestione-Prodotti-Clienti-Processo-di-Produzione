import { ICliente } from "./ICliente.js";


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





export { Stato, IProdotto}
