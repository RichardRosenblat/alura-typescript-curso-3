import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    readonly negociacoes: Negociacao[] = [];
    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
