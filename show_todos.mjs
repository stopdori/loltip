import fs from 'fs';
import path from 'path';

const root = 'app/data/matchups';
const results = [];

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('_')) walkDir(fp);
    else if (e.isFile() && e.name.endsWith('.ts') && !e.name.startsWith('_')) {
      const content = fs.readFileSync(fp, 'utf8');
      if (!content.includes('[TODO:')) continue;

      // Extract en arrays that contain TODOs
      const enRegex = /en:\s*\[(.*?)\]/gs;
      let m;
      while ((m = enRegex.exec(content)) !== null) {
        const inner = m[1];
        if (inner.includes('[TODO:')) {
          const items = [];
          const itemRegex = /"((?:[^"\\]|\\.)*)"/g;
          let m2;
          while ((m2 = itemRegex.exec(inner)) !== null) {
            if (m2[1].includes('[TODO:')) items.push(m2[1]);
          }
          if (items.length) {
            results.push({ file: fp.replace(/\\/g, '/'), items });
          }
        }
      }
    }
  }
}

walkDir(root);
results.forEach(r => {
  console.log('\n' + r.file.split('/').slice(-2).join('/'));
  r.items.forEach(item => console.log('  ' + item));
});
console.log('\nTotal files:', results.length);
console.log('Total TODO items:', results.reduce((s, r) => s + r.items.length, 0));
