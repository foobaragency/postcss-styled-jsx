"use strict"

const loadSyntax = require("postcss-syntax/load-syntax")

function literalParser(source, opts) {
  const matches = [
    ...source.matchAll(
      // (?!\/\/)[^/\n]*?             ignore lines starting with a line comment
      // <style +jsx ?[a-z]*>{`       opening tag with optional attributes — example: <style jsx global>{`
      // ([\s\S]*?)                   the CSS — we include new lines by using `\s\S` instead of `.`
      // `}<\/style>                  closing tag
      /(?!\/\/)[^/\n]*?<style +jsx ?[a-z]*>{`([\s\S]*?)`}<\/style>/g
    ),
    ...source.matchAll(
      // (?!\/\/)[^/\n]*?             ignore lines starting with a line comment
      // \bcss(?:\.[a-z]+)?`          opening tag with optional property call — examples: css` or css.global`
      // ((?:\\`|\${.*?}|[\s\S])*?)   the CSS — we consume escaped backticks and interpolations first to avoid unintentionally matching the closing tag
      // `                            closing tag
      /(?!\/\/)[^/\n]*?\bcss(?:\.[a-z]+)?`((?:\\`|\${.*?}|[\s\S])*?)`/g
    ),
  ]

  return matches.map(match => {
    const [style, css] = match
    const { index: styleStartIndex } = match
    const cssStartIndex = styleStartIndex + style.indexOf(css)

    const result = {
      startIndex: cssStartIndex,
      content: css,
    }

    const interpolationMatch = css.match(/(\\*)\${.*?}/)
    if (interpolationMatch && interpolationMatch[1].length % 2 === 0) {
      result.syntax = loadSyntax(opts, __dirname)
      result.lang = "template-literal"
    } else {
      result.lang = "css"
    }

    return result
  })
}

module.exports = literalParser
