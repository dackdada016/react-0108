import React from 'react'

function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  const { id, completed, text } = todo
  return (
    <>
      <li key={id} className={completed ? 'completed' : 'active'}>
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
