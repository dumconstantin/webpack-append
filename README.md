# Webpack loader to append text to files loader for [Webpack](http://webpack.github.io/)

Append a header to the contents loaded by the loader. Usefull to add headers to all your files in the webpack pipeline.

*Motivation*: I wanted to use Ramda functions directly in my application without import every single one causing a huge bloat in my import statements.
I also didn't want to keep using the "R." prefix.

## Install:

```bash
$ npm install --save-dev webpack-append
```

## Usage:

Add the loader to your `webpack.config.js`:

```javascript
module.exports = {
    // ...
    module: {
      loaders: [
        // ...
        {
          test: /\.js$/,
          loader: 'webpack-append',
          query: 'console.log(\'This header sits perfectly at the begining of my file.!\')'
        }
      ]
    }
}
```

## My use case:

```javascript
import R from 'ramda'
const importAllRamdaFunctions = 'import { ' + Object.keys(R).join(', ') + ' } from \'ramda\''

module.exports = {
    // ...
    module: {
      loaders: [
        // ...
        {
          test: /\.js$/,
          loader: 'webpack-append',
          query: importAllRamdaFunctions
        }
      ]
    }
}
```

## Contributing:

Feel free to open issues to propose stuff and participate. Pull requests are also welcome.

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
