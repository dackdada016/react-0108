import { useState } from 'react'
import AddForm from './components/AddForm'
// 導入資料夾 `/TodoList` 相當於 `/TodoList/index`
// 此作法是為了方便用資料夾檔案結構，來對應元件目前呈現在網頁的階層
import TodoList from './components/TodoList'
import FilterButtonGroup from './components/FilterButtonGroup'
import './TodoApp.css'

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone', completed: false },
    { id: 2, text: '學react', completed: true },
  ])

  // 切換 過濾目前呈現項目用選項，只有以下三種情況
  // 'All' | 'Active' | 'Completed'
  const [filter, setFilter] = useState('All')

  // 呈現前用的過濾todos的函式
  const getFilterTodos = (todos) => {
    switch (filter) {
      case 'Active':
        return todos.filter((v, i) => {
          return !v.completed
        })
      case 'Completed':
        return todos.filter((v, i) => {
          return v.completed
        })
      case 'All':
      default:
        return todos
    }
  }

  const addTodo = (text) => {
    // id的選擇
    // 1. 單人使用應用，可用時間日期毫秒整數值，如`Number(new Date())`或`+new Date()`
    // 2. 用uuid或nanoid函式庫(需另外安裝npm)
    // 3. 使用資料庫的id產生機制
    // 4. 其它(例如數字遞增…)，如下範例

    // 先寫出新增的物件
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false, //預設為未完成
    }

    // 共通三步驟
    // 1. 從目前的狀態拷貝(ps.深拷貝/完全拷貝)出一個新的變數值(陣列/物件)
    // 2. 在新的變數值(陣列/物件)上作處理
    // 3. 設定回原本的狀態中
    //1 //2 //3
    setTodos([newTodo, ...todos])

    // 最短一行寫法
    // setTodos([
    //   {
    //     id: Number(new Date()),
    //     text: text,
    //     completed: false, //預設為未完成
    //   },
    //   ...todos,
    // ])
  }

  // 傳入id，然後作completed屬性的布林值切換
  const toggleCompleted = (id) => {
    // //1. 從目前的狀態拷貝(ps.深拷貝/完全拷貝)出一個新的變數值(陣列/物件)\
    // const newTodos = todos.map((v) => {
    //   return { ...v }
    // })

    // // 用尋找對應索引值的寫法
    // const index = todos.findIndex((v, i) => {
    //   return v.id === id
    // })

    // if (index !== -1) {
    //   // 2. 在新的變數值(陣列/物件)上作處理
    //   newTodos[index].completed = !newTodos[index].completed

    //   // 3. 設定回原本的狀態中
    //   setTodos(newTodos)
    // }

    // 用map中判斷的語法，與上面同樣結果的寫法
    const newTodos = todos.map((v2, i2) => {
      if (id === v2.id) return { ...v2, completed: !v2.completed }
      else return { ...v2 }
    })
    setTodos(newTodos)

    // // 最短一行寫法
    // setTodos(
    //   todos.map((v, i) =>
    //     id === v.id ? { ...v, completed: !v.completed } : { ...v }
    //   )
    // )
  }

  // 傳入id，刪除此項目
  const deleteTodo = (id) => {
    //1, 2
    const newTodos = todos.filter((v, i) => {
      return v.id !== id
    })

    //3
    setTodos(newTodos)

    // 最短一行寫法
    //setTodos(todos.filter((v, i) => v.id !== id))
  }

  return (
    <>
      <h1>待辨事項</h1>
      {/* 利用屬性(props)傳入 */}
      <AddForm addTodo={addTodo} />
      <hr />
      <TodoList
        //呈現時先經過過濾
        todos={getFilterTodos(todos)}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
      <hr />
      <FilterButtonGroup filter={filter} setFilter={setFilter} />
    </>
  )
}

export default TodoApp
