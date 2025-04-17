import React from 'react'
import styles from './index.module.scss'
export interface TextProps {
    children: React.ReactNode
    className?: string
}

export const YyText: React.FC<TextProps> = ({ children, className }) => {
    return (
        <span className={`${styles.text} ${className || ''}`}>
            {children}
        </span>
    )
} 