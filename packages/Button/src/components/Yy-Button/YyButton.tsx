import React from 'react'
import styles from './index.module.scss'
export interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export const YyButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  )
}