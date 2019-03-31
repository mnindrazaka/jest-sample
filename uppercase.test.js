const uppercase = require('./uppercase')

test('uppercase "test" to equal "TEST"', done => {
  uppercase('test', str => {
    expect(str).toBe('TEST')
    done()
  })
})
