const fs = require('fs');
const path = require('path');
const mm = require('micromatch');
const test = require('ava');

var writeFile = require('write');
const sass = require('node-sass');

function sassRender(file, outFile) {
  return new Promise((resolve, reject) => {
    sass.render({
      file,
      outFile,
      includePaths: [path.resolve(process.cwd(), 'node_modules')],
      outputStyle: 'expanded'
    }, (err, data) => {
      if (err) reject(err.formatted);
      else resolve(data.css.toString());
    });
  });
}

const relFiles = mm(fs.readdirSync(__dirname),
  ['!**/_*', '!**/_*/**', '*.scss']);

relFiles.forEach(relFile => {
  const file = path.resolve(__dirname, relFile);
  const outFile = path.join(__dirname, 'renders', relFile).replace(/\.scss$/, '.css');
  test(path.basename(relFile), t => {
    return sassRender(file, outFile).then(css => {
      writeFile.sync(outFile, css);
      t.snapshot(css);
    });
  });
});
