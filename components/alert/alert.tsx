/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-31 01:09:26
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

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, title, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    <h4 className={AlertClassName.title}>{title}</h4>
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
