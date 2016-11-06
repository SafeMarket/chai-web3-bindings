# chai-web3-bindings

> Web3 bindings for chai

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i chai-web3-bindings --save-dev
```

## Usage

```js
const chai = require('chai')
const Web3 = require('web3')
const web3 = new Web3
chai.use(require('chai-web3-bindings')(web3))
```

### hex
`expect('0x000').to.be.hex`

### address
`expect(web3.eth.account).to.be.an.address`

### zeros
`expect('0x0000').to.be.zeros`

### contract
`expect(web3.eth.contract(abi)).to.be.a.contract`

### ascii
`expect('0x74657374').to.be.ascii('test')`

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/SafeMarket/chai-web3-bindings/issues)

## License

Copyright © 2016 []()
Licensed under the MIT license.

***

_This file was generated by [readme-generator](https://github.com/jonschlinkert/readme-generator) on November 05, 2016._