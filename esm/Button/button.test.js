/*
 * @Author: your name
 * @Date: 2020-03-21 12:14:20
 * @LastEditTime: 2021-02-12 23:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-designship-master/chicken-designship/src/components/Button/button.test.tsx
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './button';
var defaultProps = {
  onClick: jest.fn()
};
var testProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass'
};
var disabledProps = {
  disabled: true,
  onClick: jest.fn()
};
describe('test Button component', function () {
  it('should render the correct default button', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Button, defaultProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct component based on different props', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Button, testProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  });
  it('should render a link when btnType equals link and href is provided', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Button, {
      btnType: "link",
      href: "http://dummyurl"
    }, "Link"));
    var element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('should render disabled button when disabled set to true', function () {
    var wrapper = render( /*#__PURE__*/React.createElement(Button, disabledProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});