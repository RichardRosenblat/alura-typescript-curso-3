import { Imprimivel } from "../interfaces/imprimivel";

export function imprimir(...objs: Imprimivel[]) {
	objs.forEach((obj) => console.log(obj.paraTexto()));
}
