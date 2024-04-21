import React, { useState } from 'react'
import { Todo } from '../@types/todo.type'
import connect, { ExtraInforType } from '../HOC/connect'
import LevelTodoKey from '../constants/LevelTodo'
import CornIcon from './icon/CornIcon'
import Input from './input/Input'
import Select from './input/Select'

interface TaskInputProps extends ExtraInforType {
  addNewTodo: (task: string, level: string) => void
  todoEdit: Todo | null
  editTodo: (taskKey: string, newTask: string, level: string) => void
  handleChangeTaskEditTodo: (task: string) => void
  handleChangeLevelEditTodo: (level: string) => void
}

const TaskInput: React.FC<TaskInputProps> = (props) => {
  const {
    addNewTodo,
    todoEdit,
    editTodo,
    handleChangeTaskEditTodo,
    handleChangeLevelEditTodo,
    debug,
    log
  } = props

  // log(debug) --> Learn about HOC (Higer Order Component)

  const [task, setTask] = useState<string>('')
  const [level, setLevel] = useState<string>(LevelTodoKey.MIDDLE)

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (todoEdit) {
      handleChangeTaskEditTodo(event.target.value)
    } else {
      setTask(event.target.value)
    }
  }

  const handleChangeLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (todoEdit) {
      handleChangeLevelEditTodo(event.target.value)
    } else {
      setLevel(event.target.value)
    }
  }

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (todoEdit) {
      editTodo(todoEdit.id, todoEdit.task, todoEdit.level)
    } else {
      addNewTodo(task, level)
    }
    setTask('')
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className='mb-3 flex gap-2'>
        <Input
          type='text'
          placeholder='Enter your work...'
          value={todoEdit ? todoEdit.task : task}
          onChange={handleChangeValue}
        />
        {/* <Input type='date' longs={'30%'} value={new Date().toISOString().slice(0, 10)} /> */}
        <Select value={todoEdit ? todoEdit.level : level} onChange={handleChangeLevel} />
        <button className='rounded border-b-4 border-gray-300 bg-gray-200 px-4 py-2 font-bold text-white hover:border-gray-400 hover:bg-gray-300'>
          <CornIcon size={20} />
        </button>
      </div>
    </form>
  )
}

export default connect<TaskInputProps>(TaskInput)
