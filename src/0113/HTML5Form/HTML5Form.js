import { useState } from 'react'

function HTML5Form() {
  // input-text
  const [inputText, setInputText] = useState('')

  // textarea
  const [textareaText, setTextareaText] = useState('')

  // radio-group
  // state中記錄使用者選了單一值
  const [food, setFood] = useState('')
  const foodOptions = ['雞腿飯', '排骨飯', '魯肉飯', '素食']

  // checkbox one
  const [agree, setAgree] = useState(false)

  // checkbox group - 1
  // state中要記錄使用者選了哪幾個值(複選)
  const [likeList, setLikeList] = useState(['芒果'])
  const fruitOptions = ['芒果', '香蕉']

  // checkbox group - 2
  const petOptions = ['貓', '狗', '兔']
  // state中要記錄各選項的物件
  // ex. [ {id:0, value:'貓', checked:false} ,...]
  const [pets, setPets] = useState(
    petOptions.map((v, i) => {
      return { id: i, value: v, checked: false }
    })
  )

  // select
  const cityOptions = ['台北市', '台中市', '高雄市']
  const [city, setCity] = useState('')

  return (
    <>
      <h1>可控的表單元件範例</h1>
      <section id="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
      <section id="radio-group">
        <h2>選項按鈕(radio-group)</h2>
        {foodOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                value={v}
                // 布林值，代表目前是否有被使用者選中
                checked={food === v}
                onChange={(e) => {
                  setFood(e.target.value)
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="checkbox-one">
        <h2>核取方塊(單一)(checkbox)</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我已閱讀並同意XXX</label>
      </section>
      <section id="checkbox-group">
        <h2>核取方塊(群組)(checkbox-group)</h2>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList.includes(v)}
                onChange={(e) => {
                  const targetValue = e.target.value

                  // 先判斷是否有在state陣列(likeList)中
                  if (likeList.includes(targetValue)) {
                    // 如果 有 在state陣列中 -> 從state陣列移除
                    // 從陣列刪除這值 = 回傳一個新陣列，裡面不包含這值
                    const newLikeList = likeList.filter((v2, i2) => {
                      return v2 !== targetValue
                    })

                    setLikeList(newLikeList)
                  } else {
                    // 如果 沒有 在state陣列中 -> 加入到state陣列
                    const newLikeList = [...likeList, targetValue]
                    setLikeList(newLikeList)
                  }
                }}
              />
              <label>{v}</label>
            </div>
          )
        })}
      </section>
      <section id="checkbox-group">
        <h2>核取方塊2(群組)(checkbox-group-2)</h2>
        {pets.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v.value}
                checked={v.checked}
                onChange={(e) => {
                  const newPets = pets.map((v2, i2) => {
                    // 當目前id與i(使用者點按下的那個項目的索引值)相等時，checked值改變
                    if (v2.id === i) return { ...v2, checked: !v2.checked }

                    return { ...v2 }
                  })

                  setPets(newPets)
                }}
              />
              <label>{v.value}</label>
            </div>
          )
        })}
      </section>
      <section id="select">
        <h2>下拉清單(select)</h2>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          {/* 對應state(city)初始值的選項 */}
          <option value="">--請選擇城市--</option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
    </>
  )
}

export default HTML5Form
