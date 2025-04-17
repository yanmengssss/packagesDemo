import { FC } from 'react';
import type { ButtonProps } from './components/YyButton';
import type { TextProps } from './components/YyText';

export { ButtonProps, TextProps };
export const YyButton: FC<ButtonProps>;
export const YyText: FC<TextProps>;

declare const Ye: {
  YyButton: FC<ButtonProps>;
  YyText: FC<TextProps>;
};

export default Ye;