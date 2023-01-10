import react from 'eslint-plugin-import/config/react'
import { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  // 父元件的資料
  const [pData, setPData] = useState('parent data')
  return (
    <>
      <h1>Parent</h1>

      <ChildA pData={pData} />
      <ChildB />
    </>
  )
}
export default Parent
