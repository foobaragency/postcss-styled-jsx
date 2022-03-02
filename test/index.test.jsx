import { readFileSync } from "fs"
import { describe, expect, it } from "vitest"
import syntax from "../lib"

describe("syntax", () => {
  const jsx = readFileSync("./test/fixtures/components.jsx", "utf8")

  it("Component", () => {
    const document = syntax().parse(jsx)

    expect(document.source).to.haveOwnProperty("lang", "jsx")
    expect(document.nodes).to.have.length(14)
    expect(document.toString()).to.equal(jsx)
  })
})
