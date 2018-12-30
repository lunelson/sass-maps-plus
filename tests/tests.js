const path = require('path');
const writeFile = require('write');
const globby = require('globby');
const del = require('del');
const test = require('ava');

const compilers = {
  dartsass: require('sass'),
  libsass: require('node-sass'),
};

function sassRender(sass, file, outFile) {
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

const srcFiles = globby.sync(['*.scss', '!**/_*', '!**/_*/**'], { cwd: __dirname });
const outFiles = globby.sync(['*.css'], { cwd: path.resolve(__dirname, 'renders') });

const delFiles = outFiles
  .filter(file => !~srcFiles.indexOf(file.replace(/\.(dartsass|libsass).css/,'.scss')))
  .map(file => path.join(__dirname, 'renders', file));

del.sync(delFiles);

srcFiles.forEach(srcFile => {
  const file = path.resolve(__dirname, srcFile);
  Object.keys(compilers).forEach(compiler => {
    const outFile = path.join(__dirname, 'renders', srcFile).replace(/\.scss$/, `.${compiler}.css`);
    test(`${path.basename(srcFile, path.extname(srcFile))} [${compiler}]`, t => {
      return sassRender(compilers[compiler], file, outFile).then(css => {
        writeFile.sync(outFile, css);
        t.snapshot(css);
      });
    });
  });
});
