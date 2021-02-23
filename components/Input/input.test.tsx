/*
 * @Author: your name
 * @Date: 2020-03-21 12:14:20
 * @LastEditTime: 2021-02-23 22:15:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-designship-master/chicken-designship/src/components/Input/input.test.tsx
 */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Input, InputProps } from './input'

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: 'test-input',
}
describe('test Input component', () => {
  it('should render the correct default Input', () => {
    const wrapper = render(<Input {...defaultProps}/>)
    const testNode = wrapper.getByPlaceholderText('test-input') as HTMLInputElement
    expect(testNode).toBeInTheDocument()
    expect(testNode).toHaveClass('chicken-design-input-inner')
    fireEvent.change(testNode, { target: { value: '23' } })
    expect(defaultProps.onChange).toHaveBeenCalled()
    expect(testNode.value).toEqual('23')
  })
  it('should render the disabled Input on disabled property', () => {
    const wrapper = render(<Input disabled placeholder="disabled"/>)
    const testNode = wrapper.getByPlaceholderText('disabled') as HTMLInputElement
    expect(testNode.disabled).toBeTruthy()
  })
  it('should render different input sizes on size property', () => {
    const wrapper = render(<Input placeholder="sizes" size="lg" />)
    const testContainer = wrapper.container.querySelector('.chicken-design-input-wrapper')
    expect(testContainer).toHaveClass('input-size-lg')
  })
  it('should render prepand and append element on prepand/append property', () => {
    const { queryByText, container } = render(<Input placeholder="pend" perfix="https://" append=".com"/>)
    const testContainer = container.querySelector('.chicken-design-input-wrapper')
    expect(testContainer).toHaveClass('input-group input-group-append input-group-perfix')
    expect(queryByText('https://')).toBeInTheDocument()
    expect(queryByText('.com')).toBeInTheDocument()
  })
})
