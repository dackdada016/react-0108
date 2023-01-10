import { useState } from 'react'
import './Menu.css'

function Menu() {
  // 宣告狀態 預設為空字串
  const [activeText, setActiveText] = useState('')
  // 把所有的項目用陣列包裝起來
  const menuItem = ['首頁', '關於我們', '產品']
  return (
    <>
      <ul>
        {/* 利用map回傳一個新的陣列，並取索引值當成key */}
        {menuItem.map((v, i) => {
          return (
            //點擊li時 改變狀態
            <li
              key={i}
              onClick={() => {
                setActiveText(v)
              }}
            >
              {/* 當狀態等於所選項目時 加上active的class */}
              <a href="#" className={activeText === v ? 'active' : ''}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
