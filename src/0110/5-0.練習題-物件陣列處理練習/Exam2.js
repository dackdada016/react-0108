import { useState } from 'react'
import './Exam2.css'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

function Exam2() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝(深拷貝)出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // id
          // 個人使用可以用Date()建立id
          // uuid或nanoid
          // 有DB的話使用DB機制產生的id
          // 數字遞增機制
          const newObj = { id: Number(new Date()), text: 'xxx' }
          const newData = [newObj, ...data]
          setData(newData)
        }}
      >
        列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: Number(new Date()), text: 'yyy' }
          const newData = [...data, newObj]
          setData(newData)
        }}
      >
        列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 條件有符合a的 加進新陣列
          const newData = data.filter((v, i) => {
            return v.text.includes('a')
          })
          setData(newData)
        }}
      >
        尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 條件不等於B的才進入新陣列
          setData(data.filter((v) => v.text !== 'b'))
        }}
      >
        刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          setData(data.filter((v) => v.id !== 4))
        }}
      >
        刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 先找到ID為2的物件索引值
          const index = data.findIndex((v, i) => v.id === 2)
          console.log(data.slice(0, index + 1), data.slice(index + 1))

          // 如果有找到 分割陣列成兩個部分
          // 加入新物件 合併陣列

          if (index !== -1) {
            const newObj = { id: 5, text: 'bbb' }
            const newData = [
              ...data.slice(0, index + 1),
              newObj,
              ...data.slice(index + 1),
            ]
            setData(newData)
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 方法一
          // // 1. 從目前的狀態拷貝(深拷貝)出一個新的變數值(陣列/物件)

          // const newData = data.map((v, i) => {
          //   // 拷貝每個物件(等同深拷貝)
          //   return { ...v }
          // })
          // // 2. 在新的變數值(陣列/物件)上作處理

          // const index = newData.findIndex((v, i) => v.id === 3)
          // if (index !== -1) {
          //   // 找到ID為3的物件後,修改文字物件更改
          //   newData[index].text = 'cccc'
          //   setData(newData)
          // }
          // 3. 設定回原本的狀態中

          // 方法二
          const newData = data.map((v, i) => {
            if (v.id === 3) {
              // 展開物件的時候，如果後面的屬性在原物件已經存在，會覆蓋原物件的屬性及屬性值
              // 如果原物件不存在相同屬性，則會加入新的屬性
              return { ...v, text: 'cccc' }
            }
          })
          // 2. 在新的變數值(陣列/物件)上作處理

          const index = newData.findIndex((v, i) => v.id === 3)
          if (index !== -1) {
            // 找到ID為3的物件後,修改文字物件更改
            newData[index].text = 'cccc'
            setData(newData)
          }
        }}
      >
        取代id為3的文字為cccc
      </button>
    </>
  )
}

export default Exam2
