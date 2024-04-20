import React from 'react'
import LevelTodoKey from '../../constants/LevelTodo'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<SelectProps> = ({ ...props }) => {
  return (
    <select
      value={props.value}
      className={`focus:shadow-outline w-auto appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none`}
      {...props}
    >
      <option value={LevelTodoKey.LOW}>{LevelTodoKey.LOW}</option>
      <option value={LevelTodoKey.MIDDLE}>{LevelTodoKey.MIDDLE}</option>
      <option value={LevelTodoKey.HIGH}>{LevelTodoKey.HIGH}</option>
    </select>
  )
}

export default Select
