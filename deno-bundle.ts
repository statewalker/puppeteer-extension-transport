import {transpile} from 'https://deno.land/x/emit/mod.ts';

const url = new URL('./example/extension-v3/background.ts', import.meta.url);
const result = await transpile(url);

const code = result.get(url.href);
console.log(code);
