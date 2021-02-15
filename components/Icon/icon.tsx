/*
 * @Author: your name
 * @Date: 2021-02-03 00:50:16
 * @LastEditTime: 2021-02-15 17:37:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Icon/icon.tsx
 */
import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme? : ThemeProps
}

const Icon: React.FC<IconProps> = props => {
  // icon-primary
  const { className, theme, ...restProps } = props
  const classes = classNames('chicken-design-icon', className, {
    [`icon-${theme}`]: theme,
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon
