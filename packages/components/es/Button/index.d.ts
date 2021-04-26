import React, { MouseEvent } from 'react';
interface IProps {
  htmlType?: 'button' | 'submit' | 'reset';
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (event?: MouseEvent<HTMLElement>) => void;
}
declare const Button: React.FC<IProps>;
export default Button;
