export const Component = () => (
  <>
    <div>foo</div>

    <style jsx>{`
      div {
        background: deeppink;
      }
    `}</style>
  </>
)

export const cssSimple = css`
  div {
    background: deeppink;
  }
`

export const ComponentWithComment = () => (
  <>
    <div>foo</div>

    <style jsx>{`
      div {
        background: deeppink;
      }
       {
        /* block comment */
      }
    `}</style>
  </>
)

export const cssWithComment = css`
  div {
    background: deeppink;
  }
  /* block comment */
`

export const ComponentWithEscapedQuotes = () => (
  <>
    <div>foo</div>

    <style jsx>{`
      div {
        content: \"\'\`;
      }
       {
        /* block comment with escaped quotes \"\'\` */
      }
    `}</style>
  </>
)

export const cssWithEscapedQuotes = css`
  div {
    content: \"\'\`;
  }
   {
    /* block comment with escaped quotes \"\'\` */
  }
`

export const ComponentWithGlobalStyles = () => (
  <>
    <div>foo</div>

    <style jsx global>{`
      div {
        background: deeppink;
      }
    `}</style>
  </>
)

export const cssGlobal = css.global`
  div {
    content: \"\'\`;
  }
   {
    /* block comment with escaped quotes \"\'\` */
  }
`

export const cssResolve = css.resolve`
  div {
    content: \"\'\`;
  }
   {
    /* block comment with escaped quotes \"\'\` */
  }
`

export const ComponentWithVariable = () => (
  <>
    <div>foo</div>

    <style jsx>{`
      div {
        background: ${colors.deepPink};
      }
    `}</style>
  </>
)

export const cssWithVariable = css`
  div {
    background: ${colors.deepPink};
  }
`

export const ComponentWithLiteralVariable = () => (
  <>
    <div>foo</div>

    <style jsx>{`
      div {
        background: ${`deeppink`};
      }
    `}</style>
  </>
)

export const cssWithLiteralVariable = css`
  div {
    background: ${`deeppink`};
    transition: ${`1s`} ease-out transform;
  }
`

export const ComponentWithoutValidStyles = () => (
  <>
    <div>foo</div>

    {/* wrong quotes */}
    <style jsx>{"
      div {
        background: deeppink;
      }
    "}</style>

    {/* wrong quotes */}
    <style jsx>{'
      div {
        background: deeppink;
      }
    '}</style>

    {/* typo on jsx */}
    <style jxs>{`
      div {
        background: deeppink;
      }
    `}</style>
  </>
)

export const cssWithoutValidStyles = scss`
  div {
    background: deeppink;
  }
`

export const ComponentWithEmptyStyles = () => (
  <>
    <div>foo</div>

    <style jsx>{``}</style>
  </>
)

export const cssWithoutValidStyles = scss``
