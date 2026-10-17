import { mkdir, copyFile, cp, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { render } from '../src/render.mjs';
import { routes } from '../src/content.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const dist=path.join(root,'dist');
await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
for(const entry of ['style.css','motion.css','pages.css','app.js','motion.js'])await copyFile(path.join(root,entry),path.join(dist,entry));
await cp(path.join(root,'assets'),path.join(dist,'assets'),{recursive:true});
const paths=[];
for(const lang of ['hu','en'])for(const key of Object.keys(routes)){
 const relative=(lang==='en'?'en/':'')+routes[key][lang==='hu'?1:0];
 const dir=path.join(dist,relative);await mkdir(dir,{recursive:true});await writeFile(path.join(dir,'index.html'),render(key,lang));paths.push('/'+relative.replace(/\/$/,'')+(relative?'/':''));
}
await writeFile(path.join(dist,'robots.txt'),'User-agent: *\nDisallow: /\n');
await writeFile(path.join(dist,'404.html'),'<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Page not found — Feleo</title><link rel="stylesheet" href="/style.css"><body><main class="section"><h1>Let’s find your way.</h1><p>This page is not here.</p><a class="button dark" href="/en/">English home ↗</a> <a class="button dark" href="/">Magyar főoldal ↗</a></main></body></html>');
await mkdir(path.join(root,'artifacts'),{recursive:true});await writeFile(path.join(root,'artifacts/routes.json'),JSON.stringify(paths,null,2));
console.log(`Built ${paths.length} localized pages → dist/`);
