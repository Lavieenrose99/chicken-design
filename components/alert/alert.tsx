/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-31 17:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/alert.tsx
 */
import React from 'react';
import t from 'prop-types';
import classNames from 'classnames'

import { AlertProps, KindMap } from './interface';

const prefixCls = 'chicken-design-alert';
export const AlertClassName = {
  title: `${prefixCls}-title`,
}

const Alert: React.FC<AlertProps> = ({ children, title, kind = 'success', className, ...rest }) => {
 const classes = classNames('chicken-design-alert', className, {
  [`alert-${kind}`]: kind,
})

  return (
  <div
    className={classes}
    {...rest}
  >
    <span className={AlertClassName.title}>{title}</span>
    {children}
  </div>
)
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning', 'success']),
};

export default Alert;
