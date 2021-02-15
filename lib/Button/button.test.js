"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _button = _interopRequireDefault(require("./button"));

/*
 * @Author: your name
 * @Date: 2020-03-21 12:14:20
 * @LastEditTime: 2021-02-12 23:17:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-designship-master/chicken-designship/src/components/Button/button.test.tsx
 */
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
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_button.default, defaultProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();

    _react2.fireEvent.click(element);

    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct component based on different props', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_button.default, testProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  });
  it('should render a link when btnType equals link and href is provided', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_button.default, {
      btnType: "link",
      href: "http://dummyurl"
    }, "Link"));
    var element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('should render disabled button when disabled set to true', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_button.default, disabledProps, "Nice"));
    var element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();

    _react2.fireEvent.click(element);

    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});