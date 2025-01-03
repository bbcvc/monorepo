import React from 'react'
import styles from './index.module.less'

const Button: React.FC<React.ComponentPropsWithRef<'button'>> = (props) => {
  return (
    <button type='button' className={styles.button} {...props}>
      Button1
    </button>
  )
}

export default Button
