var babel = require('babel-core');
var express = require('express');
var app = express();
var path = require('path');

const options =  {
  frontendRoot: 'www',
  port: 3000
};
const BABEL_OPTIONS = {
  presets: ['es2015'],
  plugins: [],
  sourceMaps: 'inline'
};

app.get('/*.es', function (req, res, next) {
  var fileName = path.format({
    dir: options.frontendRoot,
    base : req.url
  });
  console.log('Compiling file: ${fileName}');
  try {
    babel.transformFile(fileName, BABEL_OPTIONS, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(result.code);
      }
    });
  } catch (e) {
    res.status(404).send('Cannot find ${fileName}');
  }
});

app.use(express.static(options.frontendRoot));

app.listen(options.port, function () {
  console.log(`Listening on ${options.port}`);
});
