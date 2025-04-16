import React from 'react'
import module from './index.module.scss'
interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={module.btn}>
      {children}
    </button>
  )
} 