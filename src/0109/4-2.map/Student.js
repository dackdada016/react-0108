// import { data } from './data/students'

// 導入json(文字)檔時，會自動轉成js的資料(物件)格式
import data from './data/students.json'

function Student() {
  return (
    <>
      <h1>學生資料範例-2(map)</h1>
      <ul>
        {/* 
            Key 幫助 React 分辨哪些項目被改變、增加或刪除。在 array 裡面的每個 element 都應該要有一個 key，如此才能給予每個 element 一個固定的身份：
            key的選擇
            1.資料來自資料庫，優先使用資料庫的key(主/外鍵)當key值
            2.資料來源不是資料庫，可在初始化時使用uuid或nanoid等函式庫產生key值，不能寫在元件的return(render)中
            3.資料為靜態資料(執行時完全不會更動時),才能使用索引值當作key
         */}
        {data.map((v, i) => {
          return (
            <li key={v.id}>
              {v.name} / {v.age} 歲
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Student
