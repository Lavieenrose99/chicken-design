/*
 * @Author: your name
 * @Date: 2021-02-03 00:49:51
 * @LastEditTime: 2021-02-12 22:03:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Transition/transition.tsx
 */
import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName,
  wrapper? : boolean,
}

const Transition: React.FC<TransitionProps> = props => {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps
  } = props
  return (
    <CSSTransition
      classNames = { classNames || animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
