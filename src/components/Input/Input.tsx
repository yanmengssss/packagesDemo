import React from 'react';
import './index.css';
import "../../style.css"
export const Input = ({ children }: { children: React.ReactNode }) => {
  return <input className='inp'>{ children}</input>;
};
