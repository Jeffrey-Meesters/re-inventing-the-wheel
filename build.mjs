import { mkdir, readdir, copyFile, readFile, writeFile, cp } from 'node:fs/promises';

await mkdir('dist', { recursive: true });

const files = await readdir('src');

for (const file of files) {
  if (file.endsWith('.html')) {
    await copyFile(`src/${file}`, `dist/${file}`);
  }
}

await cp('src/pages', 'dist/pages', { recursive: true });

let html = await readFile('src/index.html', 'utf8');
html = html.replace('./main.ts', './main.js');

await copyFile('src/index.html', 'dist/index.html'); // first copy
await writeFile('dist/index.html', html);

await cp('src/styles', 'dist/styles', { recursive: true });