function TodoItem({ todo, toggleCompleted, deleteTodo, toggleEditing }) {
  // 可以先解構todo物件，方便在下面使用todo.id, todo.text...
  const { id, completed, text } = todo

  return (
    <>
      <li className={completed ? 'completed' : 'active'}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleCompleted(id)
          }}
        />
        {text}
        <button
          onClick={() => {
            toggleEditing(id)
          }}
        >
          編輯
        </button>
        <button
          onClick={() => {
            deleteTodo(id)
          }}
        >
          X
        </button>
      </li>
    </>
  )
}

export default TodoItem
