/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-02-01 00:43:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/interface.ts
 */
export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * @default info
   */
  kind?: 'success' |'info' | 'positive' | 'negative' | 'warning';
  className?: string
  title?: string
  closeable?: boolean
}
