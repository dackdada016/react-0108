import React from 'react'
import { useState } from 'react'
import TodoItem from './TodoItem'
function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo, i) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
