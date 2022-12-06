import { Imprimivel } from "./imprimivel.js";
import { Comparavel } from "./compraravel.js";
export interface Modelo<T> extends Imprimivel, Comparavel<T> {}
