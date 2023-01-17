import { useState } from 'react'

function MultipleInput() {
  //1. 保持state在應用程式執行過程中，資料類型一致
  //2. 當使用物件作為state時，初始值的選擇，除有特殊情況，儘可能*不要*用空物件或null
  //3. 物件中的初始值中使用表單元素的名稱作為屬性名
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
  })

  return (
    <>
      <h1>多個表單輸入共用處理函式</h1>
      <div>
        <label>姓名</label>
        <input type="text" name="fullname" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>帳號</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>密碼</label>
        <input type="password" name="password" />
      </div>
    </>
  )
}

export default MultipleInput
