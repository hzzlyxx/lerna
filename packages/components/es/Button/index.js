/*
 * @Author: hzzly
 * @Date: 2021-03-25 10:21:20
 * @LastEditors: hzzly
 * @LastEditTime: 2021-04-25 16:51:01
 * @Copyright: hzzly(hjingren@aliyun.com)
 * @Description: description
 */
import React from 'react';
var Button = function (props) {
  var _a = props.htmlType,
    htmlType = _a === void 0 ? 'button' : _a,
    href = props.href,
    disabled = props.disabled,
    className = props.className,
    children = props.children,
    onClick = props.onClick;
  var classes = 'hy-btn ' + (className || '');
  var handleHrefClick = function (e) {
    e.stopPropagation();
    onClick && onClick(e);
  };
  if (href) {
    return React.createElement(
      'a',
      {
        href: href,
        onClick: handleHrefClick,
        className: classes,
        target: '_blank',
        rel: 'noreferrer',
      },
      children
    );
  }
  return React.createElement(
    'button',
    { type: htmlType, onClick: onClick, disabled: disabled, className: classes },
    children
  );
};
export default Button;
