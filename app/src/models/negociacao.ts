export class Negociacao {
    constructor(
        private readonly _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}
    get data(): Date {
        return new Date(this._data.getTime());
    }
    get volume(): number {
        return this.quantidade * this.valor;
    }
    public static criaDe(
        dataString: string,
        quantidadeString: string,
        valorString: string
    ): Negociacao {
        const date = new Date(dataString.replace(/-/g, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }
}
