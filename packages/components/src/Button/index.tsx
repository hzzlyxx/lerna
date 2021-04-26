/*
 * @Author: hzzly
 * @Date: 2021-03-25 10:21:20
 * @LastEditors: hzzly
 * @LastEditTime: 2021-04-26 09:32:42
 * @Copyright: hzzly(hjingren@aliyun.com)
 * @Description: description
 */
import React, { MouseEvent } from 'react';

interface IProps {
  htmlType?: 'button' | 'submit' | 'reset';
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (event?: MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<IProps> = (props) => {
  const { htmlType = 'button', href, disabled, className, children, onClick } = props;

  const classes = `hy-btn ${className || ''}`;

  const handleHrefClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick && onClick(e);
  };

  if (href) {
    return (
      <a href={href} onClick={handleHrefClick} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
