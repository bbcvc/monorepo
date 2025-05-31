import React from 'react'
import styles from './index.module.less'
import { cn } from '@monorepo/shared'

const Button: React.FC<React.ComponentPropsWithRef<'button'>> = (props) => {
  const { className, ...rest } = props
  return (
    <button type='button' className={cn(styles.button, props.className)} {...rest}>
      Button1
    </button>
  )
}

export default Button
