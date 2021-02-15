/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-02-15 17:43:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/alert.tsx
 */
import React, { useState } from 'react';
import t from 'prop-types';
import classNames from 'classnames';
import { AlertProps } from './interface';
import Icon from '../Icon'


const prefixCls = 'chicken-design-alert';
export const AlertClassName = {
  title: `${prefixCls}-title`,
}

const Alert: React.FC<AlertProps> = ({ children,
  title, kind = 'success', closeable = false, className, ...rest }) => {
  const [close, setClose] = useState(false)
   const classes = classNames('chicken-design-alert', className, {
  [`alert-${kind}`]: kind,
}, (closeable && close) && 'closeable')


  return (
    closeable ?
    <div
    className={classes}
    {...rest}
  >
    <span className={AlertClassName.title}>{title}<span style={{ float: 'right' }}
    onClick={() => setClose(true)} ><Icon icon="window-close" className="close-icons" size="sm" /></span></span>
    {children}
  </div> : <div className={classes} {...rest}>
    <span className={AlertClassName.title}>{title}</span>
    {children}
  </div>
)
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning', 'success']),
};

export default Alert;
