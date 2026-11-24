/// <reference path="../assets.d.ts" />
import "./style.css"
import { useState } from 'react'

interface MyButtonProps {
  type?: 'primary'
}

export const MyBtn: React.FC<MyButtonProps> = ({ type }) => {
  const [count, setCount] = useState(0)
  return (
    <button className="my-btn" onClick={() => setCount(count + 1)}>
      我的按钮
      <br /> 类型: {type}
      <br /> 计数: {count}
    </button>
  )
}