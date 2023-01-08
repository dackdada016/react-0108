import { useState } from 'react'

function App() {
  // 宣告狀態用的語法 [得到狀態, 設定狀態] = 使用狀態(初始值)
  const [total, setTotal] = useState(0)
  return (
    <>
      {/* 建立事件監聽後(onClick)，再設定事件發生時的狀態*/}
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default App
