"use strict"

const chai = require('chai')
const expect = chai.expect
const Web3 = require('web3')
const web3 = new Web3
chai.use(require('../')(web3))

describe('chai web3 bindings', () => {

  it('should have hex property', () => {
    expect('0x').to.be.hex
    expect('0xa1').to.be.hex
    expect('0xa1ff').to.be.hex
    expect('0xA1').to.be.hex
    expect('0').to.not.be.hex
    expect('').to.not.be.hex
  })

  it('should have address property', () => {
    expect('0x0000000000000000000000000000000000000000').to.be.address
    expect('0x00000000000000000000000000000000000000af').to.be.address
    expect('0x00000000000000000000000000000000000000Af').to.be.address
    expect('0x00000000000000000000000000000000000000').to.not.be.address
    expect('0x').to.not.be.address
    expect('').to.not.be.address
  })

  it('should have zeros property', () => {
    expect('0x00').to.be.zeros
    expect('0x').to.be.zeros
    expect('').to.not.be.zeros
    expect('00').to.not.be.zeros
  })

  it('should have contract property', () => {
    expect({ address: '0x00000000000000000000000000000000000000af'}).to.be.contract
    expect({}).to.not.be.contract
    expect({ address: '0x0000000000000000000000000000000000000000'}).to.not.be.contract
  })

  it('should have ascii method', () => {
    expect('test').to.be.ascii('test')
    expect('0x74657374').to.be.ascii('test')
    expect('0x0000746573740000').to.be.ascii('test')
    expect('nottest').to.not.be.ascii('test')
    expect('0x74657375').to.not.be.ascii('test')
    expect('0x007465737500').to.not.be.ascii('test')
  })

  it('should have bytes method', () => {
    expect('0x').to.be.bytes(0)
    expect('0x0').to.be.bytes(1)
    expect('0x00').to.be.bytes(1)
    expect('0x746573744').to.be.bytes(5)
    expect('00').to.not.be.bytes(32)
    expect('0x746573744').to.not.be.bytes(4)
    expect('0x746573744').to.not.be.bytes(6)
  })

})