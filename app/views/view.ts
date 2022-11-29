export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        const elemento: HTMLElement | null = document.querySelector(selector);

        if (elemento) {
            this.elemento = elemento;
        }
        else{
            throw new Error(`Seletor ${selector} não existe no DOM, verifique`);
            
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }
    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/g, "");
        }
        this.elemento.innerHTML = template;
    }
    protected abstract template(model: T): string;
}
