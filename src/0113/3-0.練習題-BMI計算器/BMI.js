import { useState } from 'react'
import './BMI.css'
function BMI() {
  const [myHeight, setMyHeight] = useState(0)
  const [myWeight, setMyWeight] = useState(0)
  const [myBMI, setMyBMI] = useState(0)

  return (
    <>
      <div className="card">
        <h1>BMI計算機</h1>
        <label>身高</label>
        <input
          type="Number"
          value={myHeight === 0 ? '' : myHeight}
          onChange={(e) => {
            setMyHeight(Number(e.target.value))
          }}
        />
        <label>體重</label>
        <input
          type="Number"
          value={myWeight === 0 ? '' : myWeight}
          onChange={(e) => {
            setMyWeight(Number(e.target.value))
          }}
        />
        <div className="btn">
          <button
            onClick={() => {
              const bmi = myWeight / Math.pow(myHeight / 100, 2)
              setMyBMI(bmi)
            }}
          >
            計算
          </button>
          <button
            onClick={() => {
              setMyHeight(0)
              setMyWeight(0)
              setMyBMI(0)
            }}
          >
            清除
          </button>
        </div>
        <h5>你的BMI為 : {myBMI > 0 ? myBMI.toFixed(1) : ''}</h5>
      </div>
    </>
  )
}

export default BMI
