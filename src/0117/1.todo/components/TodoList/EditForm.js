import { useState } from 'react'

function EditForm({ text, updateTodo, id }) {
  //https://zh-hant.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  // https://vhudyma-blog.eu/react-antipatterns-props-in-initial-state/
  //一般而言，props作為state初始值應避免，除非只需要在內部狀態初始化而已，而且之後props不會在被更動，或元件不需要再反應其它更動時

  const [inputText, setInputText] = useState(text)
  return (
    <>
      <li>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <button
          onClick={() => {
            updateTodo(id, inputText)
          }}
        >
          儲存
        </button>
      </li>
    </>
  )
}

export default EditForm
