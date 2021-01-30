/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-31 00:37:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/interface.ts
 */
export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
  title?: string
}
