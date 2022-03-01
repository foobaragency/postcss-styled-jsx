"use strict"
const tokenize = require("postcss/lib/tokenize")

function templateTokenize(input) {
  const tokenizer = tokenize.apply(input, arguments)

  function nextToken() {
    const token = tokenizer.nextToken()
    // preserve variable interpolation like: ${colorBlue}
    if (token && token[0] === "word" && token[1] === "$") {
      let next = tokenizer.nextToken()
      if (next[0] === "{") {
        do {
          token[1] += next[1]
          if (next[0] === "}") {
            break
          }
        } while ((next = tokenizer.nextToken()))
      } else {
        tokenizer.back(next)
      }
    }
    return token
  }
  return Object.assign({}, tokenizer, {
    nextToken,
  })
}

module.exports = templateTokenize
