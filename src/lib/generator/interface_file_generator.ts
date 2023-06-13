
import fs from 'fs';
import type { Svelter_Json_Structure } from '../_models/json-structure/json_structure';
export function Svelter_Interface_File_Generator(fileName : string , fields : Svelter_Json_Structure[]) {
    let fileContent = `export interface ${fileName} {\n${SvelterInterfaceFileContent(fields)}}\n`;
    let dir = './svelter/_models/' + fileName + '/';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir , { recursive: true });
    }
    fs.writeFileSync(dir + fileName + '.ts', fileContent);
    fs.writeFileSync(dir + fileName + '.json', JSON.stringify(fields));
}


function SvelterInterfaceFileContent( fields : Svelter_Json_Structure[] ) : string {
    let content = '';
    fields.forEach( ( item ) => {
        const required : string= item.required ? '' : '?';
        content += `    ${item.name}${required} : ${item.type};\n`;
    });
    return content;
}