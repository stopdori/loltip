// Extracts all ko strings that need en translations
// Groups by champion dir for batch processing
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('mismatches.json', 'utf8'));

// For each file, extract the ko strings that need translation
const output = {};

for (const [file, mismatches] of Object.entries(data)) {
  const parts = file.split('/');
  const champDir = parts[3];
  if (!output[champDir]) output[champDir] = {};

  const content = fs.readFileSync(file, 'utf8');

  for (const m of mismatches) {
    if (m.ko.length >= m.en.length) {
      // Need to translate ko items that have no en counterpart
      // or where en item is empty
      const neededTranslations = [];

      if (m.en.length === 0) {
        // Translate all ko items
        for (const koStr of m.ko) {
          neededTranslations.push(koStr);
        }
      } else if (m.ko.length > m.en.length) {
        // Translate the extra ko items
        for (let i = m.en.length; i < m.ko.length; i++) {
          neededTranslations.push(m.ko[i]);
        }
        // Also translate any empty en items
        for (let i = 0; i < m.en.length; i++) {
          if (m.en[i] === '' && m.ko[i]) {
            neededTranslations.push(m.ko[i]);
          }
        }
      } else {
        // Same length but empty en items
        for (let i = 0; i < m.en.length; i++) {
          if (m.en[i] === '' && m.ko[i]) {
            neededTranslations.push(m.ko[i]);
          }
        }
      }

      if (neededTranslations.length > 0) {
        if (!output[champDir][file]) output[champDir][file] = [];
        output[champDir][file].push(...neededTranslations);
      }
    }
  }
}

// Count and output stats
let total = 0;
for (const [champ, files] of Object.entries(output)) {
  let champTotal = 0;
  for (const strs of Object.values(files)) champTotal += strs.length;
  total += champTotal;
  console.log(champ + ': ' + Object.keys(files).length + ' files, ' + champTotal + ' strings');
}
console.log('\nTotal strings to translate:', total);

fs.writeFileSync('ko_strings_by_champ.json', JSON.stringify(output, null, 2));
