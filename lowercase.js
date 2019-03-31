function lowercase(str) {
  return new Promise((resolve, reject) => {
    if (!str) reject('Empty string')
    else resolve(str.toLowerCase())
  })
}

module.exports = lowercase
