import type { Svelter_Type } from "../_models/types/svelte_type"

/**
 * 
 * @param tsType 
 * @returns path from src/lib/components corresponding 
 */
export function Svelter_get_field_cmp( tsType : Svelter_Type ) : string {
    switch( tsType ) {
        case 'string':
            return 'TextField'
        case 'number':
            return 'NumberField'
        case 'boolean':
            return 'BooleanField'
        case 'date':
            return 'DateField'
        case 'file':
            return 'FileField'
        default:
            return 'TextField'
    }
}