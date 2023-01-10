// 先解構再使用 可以放在兩個位置
// 1. 傳入參數時直接解構 function Child({ text, color, foo })
// 2. 傳入之後在解構 const { text, color, foo } = props

function Child({
  text = 'hello',
  color = 'red',
  foo = () => {
    alert('test')
  },
}) {
  return (
    <>
      文字:{text}
      顏色:{color}
      <button onClick={foo}>Try</button>
    </>
  )
}

export default Child
