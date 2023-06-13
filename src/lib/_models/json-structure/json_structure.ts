import type { Svelter_Type } from "../types/svelte_type";
export interface Svelter_Json_Structure<T = Svelter_Type> {
    name : string;
    type : T;
    required : boolean;
    default? : T;
    special? : Svelter_Type;
    regex? : string;
    min_length? : number;
    max_length? : number;

}