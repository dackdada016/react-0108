import { useRef } from 'react'

function RefsForm() {
  // 對照getElementById，如果沒找到會回傳null，預設值使用null
  // 下面的useRef(null)呼叫後會回傳一個物件值`{ current: null }`
  const inputRef = useRef(null)

  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 使用時要用 inputRef.current 代表得到的元素實體物件參照
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        獲得值(console.log)
      </button>
    </>
  )
}

export default RefsForm
