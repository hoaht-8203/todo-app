import React from 'react'
import { Todo } from '../@types/todo.type'
import DeleteIcon from './icon/DeleteIcon'
import EditIcon from './icon/EditIcon'
import ClapIcon from './icon/ClapIcon'

interface TaskItemProps {
  item: Todo
  handleDeleteTodo: (task: string) => void
  handleClickEditTodo: (todo: Todo) => void
  handleDoneTodo: (id: string) => void
}

const TaskItem: React.FC<TaskItemProps> = (props) => {
  const { item, handleDeleteTodo, handleClickEditTodo, handleDoneTodo } = props
  const { task, createDate, level, done } = item
  return (
    <div className={`flex cursor-pointer justify-between gap-2 rounded-lg bg-gray-100 px-2 py-2`}>
      <div className='w-full' onClick={() => handleDoneTodo(item.id)}>
        <div className={`mb-2 text-wrap ${done === true && 'text-gray-400 line-through'}`}>
          {task} {done === true && <ClapIcon size={30} />}
        </div>
        <div className='flex items-center gap-2'>
          <div className='inline rounded-2xl bg-gray-200 p-1 px-2 text-xs font-bold text-gray-500'>
            {createDate.getHours() - 12}:
            {createDate.getMinutes().toString().length === 2
              ? createDate.getMinutes()
              : `0${createDate.getMinutes()}`}{' '}
            {item.createDate.getHours() <= 12 ? 'AM' : 'PM'}
          </div>
          <div className='inline rounded-2xl bg-gray-200 p-1 px-2 text-xs font-bold text-gray-500'>
            {createDate.getDate()}/{createDate.getMonth() + 1}/{createDate.getFullYear()}
          </div>
          <div className='inline rounded-2xl bg-gray-200 p-1 px-2 text-xs font-bold text-gray-500'>
            {level}
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center gap-1'>
        <button
          className='rounded border-b-4 border-gray-300 bg-gray-200 px-3 py-2 font-bold text-white hover:border-gray-400 hover:bg-gray-300'
          onClick={() => handleClickEditTodo(item)}
        >
          <EditIcon size={20} />
        </button>
        <button
          className='rounded border-b-4 border-gray-300 bg-gray-200 px-3 py-2 font-bold text-white hover:border-gray-400 hover:bg-gray-300'
          onClick={() => handleDeleteTodo(task)}
        >
          <DeleteIcon size={20} />
        </button>
      </div>
    </div>
  )
}

export default TaskItem
