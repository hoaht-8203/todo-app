export interface IconProps {
  size: number
}

export interface Todo {
  id: string
  task: string
  level: string
  createDate: Date
  done: boolean
}

export interface TodoStorage {
  id: string
  task: string
  level: string
  createDate: string
  done: boolean
}
