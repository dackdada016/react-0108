import { useState } from 'react'
import './HTML5ValidForm.css'

function HTML5ValidForm() {
  //1. 保持state在應用程式執行過程中，資料類型一致(物件 -> 物件 -> 物件)
  //2. 當使用物件作為state時，初始值的選擇，除有特殊情況外*不要*用空白物件或null
  //3. 物件的初始值，使用表單元素的名稱作為屬性名
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    showPassword: false, //用於切換密碼欄位類型使用
  })

  // 用於記錄錯誤訊息之用
  const [fieldErrors, setFieldErrors] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    // 可利用下面觸發事件得到的值來作進一步處理
    //console.log(e.target.type, e.target.name, e.target.value, e.target.checked)

    // 只針對checkbox(showPassword)使用
    if (e.target.name === 'showPassword') {
      setUser({ ...user, showPassword: e.target.checked })
      return // 注意: 這裡要跳出函式執行
    }

    //以下依照通用三步驟原則來更新狀態
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // 表單完全合法(通過驗証)後才會觸發
  const handleSubmit = (e) => {
    // 第一行要阻擋預設的form送出行為
    e.preventDefault()

    // 獲得目前的表單輸入值
    // 1. 從state獲得
    console.log(user)

    // 2. 用FormData API獲得
    const formData = new FormData(e.target)
    console.log(formData.get('fullname'), formData.get('email'))

    // 作 額外的/客製的檢查工作

    // 作 資料整理/整合工作

    // 作 送至伺服器(fetch, ajax...)
  }

  // 表單有發生驗証錯誤時，會觸發此事件
  // 所有欄位的錯誤都會一並檢查到
  const handleInvaild = (e) => {
    // 第一行要阻擋預設的form行為-泡泡錯誤訊息
    e.preventDefault()

    //console.log('檢查有錯誤: ', e.target.name, e.target.validationMessage)

    // 記錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  return (
    <>
      <h1>HTML5表單驗証</h1>
      {/* 要在form表單標記中才能使用HTML5表單驗証 */}
      {/* onSubmit是表單完全合法(通過驗証)後才會觸發 */}
      {/* onInvalid是表單有發生驗証錯誤時，會觸發此事件 */}
      <form onSubmit={handleSubmit} onInvalid={handleInvaild}>
        <div>
          <label>姓名</label>
          {/*  
              加入檢查屬性，如`required`(必填)屬性，能使用的屬性參考以下網址:
              https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation 
          */}
          <input
            type="text"
            name="fullname"
            value={user.fullname}
            onChange={handleFieldChange}
            required
          />
          <span className="error">{fieldErrors.fullname}</span>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
            required
          />
          <span className="error">{fieldErrors.email}</span>
        </div>
        <div>
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleFieldChange}
            required
          />
          <span className="error">{fieldErrors.username}</span>
        </div>
        <div>
          <label>密碼</label>
          <input
            // 用showPassword的布林值來切換文字輸入框類型
            type={user.showPassword ? 'text' : 'password'}
            name="password"
            value={user.password}
            onChange={handleFieldChange}
            required
            // 最少要輸入6個字元，最多10字元
            minLength={6}
            maxLength={10}
          />
          <span className="error">{fieldErrors.password}</span>
          <br />
          <input
            type="checkbox"
            name="showPassword"
            checked={user.showPassword}
            onChange={handleFieldChange}
          />
          顯示輸入的密碼
        </div>
        {/* 在form標記中加入button，建議寫上type，因為沒加註type相當於submit */}
        <button type="submit">提交</button>
        <hr />
        <button
          type="button"
          onClick={() => {
            setUser({
              fullname: '張小草',
              email: 'abc@gmail.com',
              username: 'abc',
              password: '12345',
              showPassword: true,
            })
          }}
        >
          填入正確範例資料
        </button>
        <button
          type="button"
          onClick={() => {
            setUser({
              fullname: '',
              email: 'abc',
              username: 'abc',
              password: '12345',
              showPassword: true,
            })
          }}
        >
          填入錯誤範例資料
        </button>
      </form>
    </>
  )
}

export default HTML5ValidForm
