import { useState } from 'react'
import './Exchange.css'
function Exchange() {
  // 保持state的資料類型，在應用程式執行過程中一致，由初始值決定，此處採用數字
  const [inputTWD, setInputTWD] = useState(0)
  const [inputMoney, setInputMoney] = useState(0)

  // 貨幣下拉選單用
  const [currency, setCurrency] = useState('美金')
  const currencyOptions = ['美金', '日圓']

  // 美金 -> 新台幣 轉換後取小數點後2位
  const convertUSD2TWD = (money) => (money * 30.38).toFixed(2)

  // 新台幣 -> 美金 轉換後取小數點後2位
  const convertTWD2USD = (money) => (money / 30.38).toFixed(2)

  // 日圓 -> 新台幣
  const convertJPY2TWD = (money) => (money / 4.25).toFixed(2)

  // 新台幣 -> 日圓
  const convertTWD2JPY = (money) => (money * 4.25).toFixed(2)

  return (
    <>
      <h1>貨幣轉換</h1>
      <div>
        <label>新台幣</label>
        <input
          type="number"
          // 為了一開始不要呈現0，方便輸入
          value={inputTWD === 0 ? '' : inputTWD}
          onChange={(e) => {
            // 因e.target.value必為字串值，為保持state資料類型一致要先轉換為數字再設定
            // 空字串時為數字0，即`Number('') = 0`
            const newInputTWD = Number(e.target.value)
            setInputTWD(newInputTWD)

            if (currency === '美金') {
              setInputMoney(convertTWD2USD(newInputTWD))
            } else {
              setInputMoney(convertTWD2JPY(newInputTWD))
            }
          }}
        />
      </div>
      <div>
        <select
          value={currency}
          onChange={(e) => {
            const newCurrency = e.target.value
            setCurrency(newCurrency)

            // 下拉選單改變幣種時，直接轉換目前新台幣轉入數字為該幣種值

            // if (newCurrency === '美金') {
            //   setInputMoney(convertTWD2USD(inputTWD))
            // } else {
            //   setInputMoney(convertTWD2JPY(inputTWD))
            // }

            // 也可以全歸零
            setInputTWD(0)
            setInputMoney(0)
          }}
        >
          {currencyOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        <input
          type="number"
          // 為了一開始不要呈現0，方便輸入
          value={inputMoney === 0 ? '' : inputMoney}
          onChange={(e) => {
            const newInputMoney = Number(e.target.value)
            setInputMoney(newInputMoney)

            if (currency === '美金') {
              setInputTWD(convertUSD2TWD(newInputMoney))
            } else {
              setInputTWD(convertJPY2TWD(newInputMoney))
            }
          }}
        />
      </div>
    </>
  )
}

export default Exchange
