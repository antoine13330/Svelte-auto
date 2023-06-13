import process from "process";
import dotenv from "dotenv";
import { Svelter_Interface_File_Generator } from "./interface_file_generator.ts";
dotenv.config();
const args = process.argv.slice(2);
const rootDir = process.cwd() + '/src/';

async function Svelter_Generator_Entry_Point( pathToFile : string ) { 
    const json = ( await import( '../../../' + process.env.PROJECT_JSON_LOCATION + pathToFile ,  { assert: { type: "json" } } ) ).default;
    console.log( json );
    const nameIndex  : number = args.indexOf('--name');
    let name : string = "HelloWorld";
    if ( nameIndex  != -1 )
        name = args[ nameIndex + 1];
    Svelter_Interface_File_Generator( name , json );

    switch(process.env.PROJECT_CONFIGURATION) {
        case 'SVELTEKIT':
            Svelter_Sveltekit_entry_point( json );
            break;
        case 'SVELTE':
            Svelter_Svelte_entry_point( json );
            break;
        default:
            break;
    }
}


await Svelter_Generator_Entry_Point( args[0] );


