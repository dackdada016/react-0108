import { useState, useEffect } from 'react'

function FC() {
  const [total, setTotal] = useState(0)
  //useEffect 只能寫在函式裡，不能寫在 if 或 return裡面

  //模擬 didMount
  useEffect(() => {
    console.log('模擬didMount')
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
    </>
  )
}

export default FC
