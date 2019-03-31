const lowercase = require('./lowercase')

test(`lowercase "TEST" to equal "test"`, () => {
  return lowercase('TEST').then(str => {
    expect(str).toBe('test')
  })
})
test(`lowercase "TEST" to equal "test"`, async () => {
  const str = await lowercase('TEST')
  expect(str).toBe('test')
})
