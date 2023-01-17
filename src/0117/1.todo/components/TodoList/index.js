import './index.css'

// 在傳入參數時解構props
import TodoItem from './TodoItem'
import EditForm from './EditForm'

function TodoList({
  todos,
  toggleCompleted,
  deleteTodo,
  toggleEditing,
  updateTodo,
}) {
  return (
    <>
      <ul>
        {/* 不可用索引值當key，索引值在執行過程中會因為新增、刪除而改變 
            key值要加在map裡面回調函式中返回的元件最外層
        */}
        {todos.map((todo, i) => {
          // 用todo.editing來決定要render哪個子元件
          return todo.editing ? (
            <EditForm
              key={todo.id}
              text={todo.text}
              id={todo.id}
              updateTodo={updateTodo}
            />
          ) : (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              toggleEditing={toggleEditing}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
