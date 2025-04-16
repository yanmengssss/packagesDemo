import React from 'react'
import module from './index.module.scss'

export interface TextProps {
    children: React.ReactNode
    className?: string
}

export const Text: React.FC<TextProps> = ({ children, className }) => {
    return (
        <span className={`${module.text} ${className || ''}`}>
            {children}
        </span>
    )
} 