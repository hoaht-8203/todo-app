import React from 'react'
import { Todo } from '../@types/todo.type'
import TaskItem from './TaskItem'

interface TaskListProps {
  todoList?: Todo[]
  handleDeleteTodo: (task: string) => void
  handleClickEditTodo: (todo: Todo) => void
  handleDoneTodo: (id: string) => void
}

const TaskList: React.FC<TaskListProps> = (props) => {
  const { todoList, handleDeleteTodo, handleClickEditTodo, handleDoneTodo } = props
  return (
    <div className='flex flex-col gap-2'>
      You has total {todoList?.length} work(s)!
      {todoList &&
        todoList.map((item) => {
          return (
            <TaskItem
              item={item}
              key={item.task}
              handleDeleteTodo={handleDeleteTodo}
              handleClickEditTodo={handleClickEditTodo}
              handleDoneTodo={handleDoneTodo}
            />
          )
        })}
    </div>
  )
}

export default TaskList
