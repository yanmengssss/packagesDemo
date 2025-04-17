import { FC, ReactNode } from 'react';

declare module 'ye-button' {
    export interface ButtonProps {
        children?: ReactNode;
        onClick?: () => void;
    }

    export interface TextProps {
        children: ReactNode;
        className?: string;
    }

    export const YyButton: FC<ButtonProps>;
    export const YyText: FC<TextProps>;

    const Ye: {
        YyButton: FC<ButtonProps>;
        YyText: FC<TextProps>;
    };

    export default Ye;
}