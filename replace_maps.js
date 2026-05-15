const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (/\.(ts|tsx|json|js)$/.test(dirPath)) {
        callback(dirPath);
      }
    }
  });
}

walkDir('src', file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('maps.app.goo.gl')) {
    const updatedContent = content.replace(/https:\/\/maps\.app\.goo\.gl\/[a-zA-Z0-9]+/g, 'https://maps.app.goo.gl/FKUpAyktZua15RVK8');
    if (content !== updatedContent) {
      fs.writeFileSync(file, updatedContent);
      console.log(`Updated ${file}`);
    }
  }
});
