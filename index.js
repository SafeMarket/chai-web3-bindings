
module.exports = function chaiWeb3Bindings(web3) {

  return (chai, utils) => {

    const Assertion = chai.Assertion

    Assertion.addProperty('hex', function addHexProperty() {
      this.assert(
        web3.toHex(this._obj) === this._obj,
        'expected #{this} to be a hex string',
        'expected #{this} to not be a hex string'
      )
    })

    Assertion.addProperty('address', function addAddressProperty() {
      this.assert(
        web3.isAddress(this._obj),
        'expected #{this} to be an address',
        'expected #{this} to not be an address'
      )
    })

    Assertion.addProperty('zeros', function addZerosProperty() {
      this.assert(
        isZeros(this._obj),
        'expected #{this} to be a string of 00 bytes',
        'expected #{this} to not be a string of 00 bytes'
      )
    })

    Assertion.addProperty('contract', function addContractPropertyProperty() {
      this.assert(
        this._obj.address && web3.isAddress(this._obj.address) && !isZeros(this._obj.address),
        'expected #{this} to be a contract',
        'expected #{this} to not be a contract'
      )
    })

    Assertion.addMethod('ascii', function addContractPropertyProperty(thing) {
      
      const ascii = web3.toHex(this._obj) === this._obj ?
        web3.toAscii(this._obj).split(String.fromCharCode(0)).join('') : this._obj

      this.assert(
        thing === ascii,
        'expected #{this} to be ascii equal #{exp} but got #{act}',
        'expected #{this} to not be ascii equal #{exp} but got #{act}',
        thing,
        ascii
      )
    })
  }

  function isZeros(thing) {
    return (
      web3.toHex(thing) === thing
      && thing.substr(2).split('0').join('').length === 0
    )
  }
  
}
