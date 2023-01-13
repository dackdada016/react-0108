import { useState } from 'react'
import './BirthForm.css'
function BirthForm() {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  // 產生選項的函式，給最小值加最大值，回傳一個可以map用的陣列
  const makeOption = (min, max) => {
    const option = []
    for (let i = min; i < max + 1; i++) {
      option.push(i)
    }
    return option
  }
  return (
    <>
      <div className="card">
        <h1>出生年月日下拉選單+18歲驗証</h1>
        <label>西元</label>
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value)
            setDay('')
          }}
        >
          <option>選擇年份</option>
          {makeOption(1940, 2022).map((v, i) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        年
        <select
          value={month}
          onChange={(e) => {
            setMonth(e.target.value)
            setDay('')
          }}
        >
          <option>選擇月份</option>
          {makeOption(1, 12).map((v, i) => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            )
          })}
        </select>
        月
        <select
          value={day}
          onChange={(e) => {
            setDay(e.target.value)
          }}
        >
          <option hidden>選擇日期</option>
          {year !== '' &&
            month !== '' &&
            makeOption(1, new Date(year, month, 0).getDate()).map((v, i) => {
              return (
                <option key={v} value={v}>
                  {v}
                </option>
              )
            })}
        </select>
        日
        <div className="btn">
          <button
            onClick={() => {
              if (year === '' || month === '' || day === '') {
                alert('請選擇完整年月日')
                return
              }
              const msNow = Number(new Date())
              const msUser = Number(new Date(`${year}/${month}/${day}`))
              if (msNow - msUser >= 568036800000) {
                alert('已滿18了')
              } else {
                alert('未滿18')
              }
            }}
          >
            驗証
          </button>
        </div>
        <h5>滿18歲了嗎？</h5>
      </div>
    </>
  )
}

export default BirthForm
