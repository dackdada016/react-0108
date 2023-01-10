import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  // 父元件的資料
  // const [pData, setPData] = useState('parent data')

  // 準備接收子元件的資料
  const [dataFromChid, setDataFromChild] = useState('')
  return (
    <>
      <h1>Parent</h1>
      {/* 給子元件A可以得到state的props */}
      <ChildA dataFromChid={dataFromChid} />
      {/* 給子元件B可以設定state的函式 */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
export default Parent
