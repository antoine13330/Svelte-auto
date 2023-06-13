import type { Svelter_Type } from "../_models/types/svelte_type";

export function getTypeOf(  el : any  ) : Svelter_Type {
    switch( typeof el ) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'object':
            if( el instanceof Date ) {
                return 'date';
            }
            if( el instanceof File ) {
                return 'file';
            }
            return 'string';
        default:
            return 'string';
        }
}