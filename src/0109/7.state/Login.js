import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h1>會員登入練習</h1>
      <div>
        帳號:
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            // 例如要和伺服器檢查, username的狀態尚未改變, 所以不能依靠狀態的改變來取值

            // 不正確的值
            console.log(username)

            // 正確的值
            console.log('e.target.value', e.target.value)
          }}
        />
      </div>
      <div>
        密碼:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <button>登入</button>
    </>
  )
}

export default Login
