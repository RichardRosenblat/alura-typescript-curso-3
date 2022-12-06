import { Negociacao } from "./negociacao.js";
import { Modelo } from "../interfaces/modelo.js";

export class Negociacoes implements Modelo<Negociacoes> {
	readonly negociacoes: Negociacao[] = [];
	public adiciona(negociacao: Negociacao): void {
		this.negociacoes.push(negociacao);
	}
	public lista(): readonly Negociacao[] {
		return this.negociacoes;
	}
	public paraTexto(): string {
		return JSON.stringify(this.negociacoes, null, 2);
	}
	public ehIgual(negociacoes: Negociacoes) {
		return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
	}
}
