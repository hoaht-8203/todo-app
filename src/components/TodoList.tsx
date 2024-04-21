import { useEffect, useState } from 'react'
import { Todo, TodoStorage } from '../@types/todo.type'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

const initTodoList = () => {
  const todoList = localStorage.getItem('todos')
  if (todoList) {
    const todoListParse: TodoStorage[] = JSON.parse(todoList)
    const todoListStorage: Todo[] = todoListParse.map((item) => {
      return {
        ...item,
        createDate: new Date(item.createDate)
      }
    })
    return todoListStorage
  }
  return []
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(initTodoList)
  const [error, setError] = useState<string>('')
  const [todoEdit, setTodoEdit] = useState<Todo | null>(null)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addNewTodo = (task: string, level: string) => {
    const todo: Todo = {
      id: new Date().toISOString(),
      task: task,
      level: level,
      createDate: new Date(),
      done: false
    }

    const isExsited = todos.find((item) => item.task === todo.task)
    if (!isExsited) {
      setError('')
      setTodos((prev) => {
        return [...prev, todo]
      })
    } else {
      setError('This task is exsited!')
    }
  }

  const editTodo = (id: string, newTask: string, level: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.task = newTask
        item.level = level
      }
      return item
    })
    setTodos(newTodos)
    setTodoEdit(null)
  }

  const deleteTodo = (task: string) => {
    const newTodos = todos.filter((item) => {
      return item.task !== task
    })
    setTodos(newTodos)
  }

  const handleClickEditTodo = (todo: Todo) => {
    setTodoEdit(todo)
  }

  const handleChangeTaskEditTodo = (task: string) => {
    if (todoEdit) {
      const newTodoEdit = {
        ...todoEdit,
        task: task
      }
      setTodoEdit(newTodoEdit)
    }
  }

  const handleChangeLevelEditTodo = (level: string) => {
    if (todoEdit) {
      const newTodoEdit = {
        ...todoEdit,
        level: level
      }
      setTodoEdit(newTodoEdit)
    }
  }

  const handleDoneTodo = (id: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item = {
          ...item,
          done: !item.done
        }
      }
      return item
    })

    setTodos(newTodos)
  }

  return (
    <div className='flex justify-center'>
      <div className='mt-3 w-[50%] rounded-lg border-2 border-gray-300 bg-white p-3'>
        <TaskInput
          addNewTodo={addNewTodo}
          todoEdit={todoEdit}
          editTodo={editTodo}
          handleChangeTaskEditTodo={handleChangeTaskEditTodo}
          handleChangeLevelEditTodo={handleChangeLevelEditTodo}
        />
        <p className='mb-2 text-red-500'>{error}</p>
        <TaskList
          todoList={todos}
          handleDeleteTodo={deleteTodo}
          handleClickEditTodo={handleClickEditTodo}
          handleDoneTodo={handleDoneTodo}
        />
      </div>
    </div>
  )
}

export default TodoList
