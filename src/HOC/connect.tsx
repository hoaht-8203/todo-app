import React from 'react'
import { debug, log } from '../constants/constant'

export interface ExtraInforType {
  debug: boolean
  log: (val: any) => void
}

export default function connect<T>(Component: React.ComponentType<T>) {
  return function (props: Omit<T, keyof ExtraInforType>) {
    return <Component {...(props as T)} debug={debug} log={log} />
  }
}
