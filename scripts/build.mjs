import {mkdir,cp,writeFile,readFile} from 'node:fs/promises';
import {validateData} from '../lib.js';
validateData(JSON.parse(await readFile(new URL('../data/competitor_data.json',import.meta.url))));
await mkdir('dist',{recursive:true});
for(const f of ['index.html','styles.css','app.js','lib.js','favicon.svg','data'])await cp(f,'dist/'+f,{recursive:true});
await writeFile('dist/.nojekyll','');console.log('Built static dashboard in dist');
