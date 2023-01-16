import React from 'react'

function IdForm() {
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id='my-input' />
      <button onClick={() => {
        document.getElementById('my-input').focus()
      }}>聚焦</button>
      <button onClick={() => {
        document.getElementById('my-input').blur()
      }}>失焦</button>
      <button onClick={() => {
        console.log(document.getElementById('my-input').value())
      }}>獲得值</button>
    </>
  )
}

export default IdForm