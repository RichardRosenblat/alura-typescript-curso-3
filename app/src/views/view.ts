export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(selector: string) {
        const elemento: HTMLElement | null = document.querySelector(selector);

        if (elemento) {
            this.elemento = elemento;
        }
        else{
            throw new Error(`Seletor ${selector} não existe no DOM, verifique`);
            
        }

    }
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
    protected abstract template(model: T): string;
}
