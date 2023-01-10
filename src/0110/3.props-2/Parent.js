import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  // 父元件的資料
  const [pData, setPData] = useState('parent data')

  // 準備接收子元件的資料
  const [dataFromChid, setDataFromChild] = useState('')
  return (
    <>
      <h1>Parent</h1>

      <ChildA pData={pData} />
      {/* 給子元件B可以設定state的函式 */}
      <ChildB setDataFromChild={setDataFromChild} />
      <p>來自子元件B的資料 {dataFromChid} </p>
    </>
  )
}
export default Parent
