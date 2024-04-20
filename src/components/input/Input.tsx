import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none`}
      {...props}
    />
  )
}

export default Input
