import { useState } from 'react'
function ChildB(props) {
  // 子元件中的內部資料
  const [cData, setCData] = useState('child B data')
  return (
    <>
      <h1>ChildB</h1>
      {/* 利用父元件props裡設定state的函式，傳值給回父元件 */}
      <button onClick={props.setDataFromChild(cData)}>傳送資料給父元件</button>
    </>
  )
}

export default ChildB
