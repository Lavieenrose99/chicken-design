/*
 * @Author: your name
 * @Date: 2021-01-12 17:08:43
 * @LastEditTime: 2021-01-12 17:08:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alter/interface.ts
 */
export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}