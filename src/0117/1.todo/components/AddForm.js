import { useState } from 'react'

// 在傳入參數時解構props
//  也可以如下這樣寫
// function AddForm(props) {
//   const { inputText, setInputText, addTodo } = props
//    // ...
// }

function AddForm({ addTodo }) {
  // 文字輸入框輸入用，可控表單元件用
  // local state(本地端狀態)
  const [inputText, setInputText] = useState('')

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            // 新增todo
            addTodo(e.target.value)
            // 清空文字輸入框
            setInputText('')
          }
        }}
      />
    </>
  )
}

export default AddForm
