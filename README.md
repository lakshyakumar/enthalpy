# enthalpy

> React UI kit for Portfolio

[![NPM](https://img.shields.io/npm/v/enthalpy.svg)](https://www.npmjs.com/package/enthalpy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Check out the latest progress and get involved on [this branch](https://github.com/lakshyakumar/enthalpy/tree/develop), or add your thoughts and requests to [this issue](https://github.com/lakshyakumar/enthalpy/issues).

## Install

```bash
npm install --save enthalpy
```

## Usage

```tsx
import React, { Component } from 'react'

import { EnthalpyButton } from 'enthalpy'
import 'enthalpy/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## Contributing

[There are plenty of opportunities to get involved](https://github.com/lakshyakumar/enthalpy/issues). Pick an outstanding task, let us know what you are working on and fire away with any questions.

The package is made up of 2 main folders:

- /src contains all the Enthalpy React components
- /example is our [create-react-app](https://github.com/facebook/create-react-app/) based demo application

To setup and run a local copy:

1.  Clone this repo with `git clone https://github.com/lakshyakumar/enthalpy`
2.  Run `npm install` in the root folder
3.  Run `npm install` in the example folder
4.  In separate terminal windows, run `npm start` in the root and example folders.
5.  In separate terminal run `npm run styleguide` to get the styleguidist up and running on `localhost:6060`

You should now be up and running with live browser reloading of the example website while you work on Enthalpy React components in the /src folder.

When you're done working on your changes, submit a PR with the details and include a screenshot if you've changed anything visually.

## License

MIT © [lklsquare](https://github.com/lklsquare)
