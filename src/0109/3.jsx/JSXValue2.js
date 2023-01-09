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

      {/* render時不會呈現*/}
      <h2>Boolean</h2>
      {true}
      {false}
      <h2>null</h2>
      {null}
      <h2>undefined</h2>
      {undefined}

      <h2>Array</h2>
      {['a', 'b', 'c', 123]}

      <h2>Object</h2>
      {/* 會造成錯誤中斷，不能直接呈現物件 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {/* 會警告錯誤，不會呈現任何東西 */}
      {() => {}}
    </>
  )
}

export default JSXValue2
