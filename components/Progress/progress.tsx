/*
 * @Author: your name
 * @Date: 2021-02-25 11:50:51
 * @LastEditTime: 2021-02-25 12:46:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Progress/progress.tsx
 */
import React, { FC } from 'react'
import { ThemeProps } from '../Icon/icon'

export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps> = props => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme,
  } = props
  return (
    <div className="chicken-design-progress-bar" style={styles}>
      <div className="chicken-design-progress-bar-outer" style={{ height: `${strokeHeight}px` }}>
        <div
          className={`chicken-design-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
}
export default Progress;
