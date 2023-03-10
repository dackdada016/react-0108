import { useState, useEffect, useRef } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  // 紀錄進入didMount時間點的內部變數
  const didMountRef = useRef(false)

  //useEffect 只能寫在函式裡，不能寫在 if 或 return裡面
  //模擬 didMount
  useEffect(() => {
    // 這段只在初次render時執行一次，之後不再執行
    console.log('模擬componentDidMount')
  }, [])
  // ^^ 空陣列代表不與任何state或props相依，只在元件初次render時執行一次

  //模擬didUpdate + didMount
  // 第一次render也會執行
  useEffect(() => {
    console.log('模擬componentDidMount+componentDidUpdate', 'total=', total)
  }, [total])
  // ^^^^^^^ 相依性陣列中，用於放入與更新階段有關的props(從父母原件來的)或state(自己本身的)
  // 意義是當放入的state或props變更時，執行第一參數函式中的程式碼(行為模式相似於onChange)，才會觸發更新(update/re-render)階段

  // 只模擬 didUpdate
  useEffect(() => {
    // 略過初始值
    if (total !== 0) {
      console.log('模擬DidUpdate', 'total=', total)
    }
  }, [total])

  // 完全模擬didUpdate
  useEffect(() => {
    if (didMountRef.current) {
      console.log('模擬didUpdate-3', 'total=', total)
    } else {
      didMountRef.current = true
    }
  }, [total])

  // 模擬willUnmount
  useEffect(() => {
    return () => {
      console.log('willUnmount')
    }
  }, [])

  return (
    <>
      <h1>函式型元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
      {console.log('render')}
    </>
  )
}

export default FC
