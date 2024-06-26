import React from 'react'
import { IconProps } from '../../@types/todo.type'

const EditIcon = (props: IconProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={props.size} height={props.size} viewBox='0 0 24 24'>
      <g fill='none' stroke='#008EA0' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
        <path d='M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1' />
        <path d='M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3l8.385-8.415zM16 5l3 3' />
      </g>
    </svg>
  )
}

export default EditIcon
