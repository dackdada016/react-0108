import './JSXValue2.css'

function JSXValue2() {
  return (
    <>
      <h1>JSX中值與表達式範例</h1>
      <h2>Number</h2>
      {123 - 99}
      <br />
      {NaN}

      <h2>String</h2>
      {'hello'}
      <br />
      {/* 樣板字串的語法 */}
      {`total = ${100 - 5}`}

      {/* render時不會呈現boolean值 */}
      <h2>Boolean</h2>
      {true}
      {false}
    </>
  )
}

export default JSXValue2
