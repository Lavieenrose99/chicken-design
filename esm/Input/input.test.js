/*
 * @Author: your name
 * @Date: 2020-03-21 12:14:20
 * @LastEditTime: 2021-02-23 22:15:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-designship-master/chicken-designship/src/components/Input/input.test.tsx
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from './input';
var defaultProps = {
  onChange: jest.fn(),
  placeholder: 'test-input'
};
describe('test Input component', function () {
  it('should render the correct default Input', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Input, defaultProps));
    var testNode = wrapper.getByPlaceholderText('test-input');
    expect(testNode).toBeInTheDocument();
    expect(testNode).toHaveClass('chicken-design-input-inner');
    fireEvent.change(testNode, {
      target: {
        value: '23'
      }
    });
    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(testNode.value).toEqual('23');
  });
  it('should render the disabled Input on disabled property', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Input, {
      disabled: true,
      placeholder: "disabled"
    }));
    var testNode = wrapper.getByPlaceholderText('disabled');
    expect(testNode.disabled).toBeTruthy();
  });
  it('should render different input sizes on size property', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Input, {
      placeholder: "sizes",
      size: "lg"
    }));
    var testContainer = wrapper.container.querySelector('.chicken-design-input-wrapper');
    expect(testContainer).toHaveClass('input-size-lg');
  });
  it('should render prepand and append element on prepand/append property', function () {
    var _render = render( /*#__PURE__*/React.createElement(Input, {
      placeholder: "pend",
      perfix: "https://",
      append: ".com"
    })),
        queryByText = _render.queryByText,
        container = _render.container;

    var testContainer = container.querySelector('.chicken-design-input-wrapper');
    expect(testContainer).toHaveClass('input-group input-group-append input-group-perfix');
    expect(queryByText('https://')).toBeInTheDocument();
    expect(queryByText('.com')).toBeInTheDocument();
  });
});