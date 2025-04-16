import { FC, ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

export interface TextProps {
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps>;
export const Text: FC<TextProps>; 