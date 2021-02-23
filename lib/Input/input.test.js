"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _input = require("./input");

/*
 * @Author: your name
 * @Date: 2020-03-21 12:14:20
 * @LastEditTime: 2021-02-12 23:08:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-designship-master/chicken-designship/src/components/Input/input.test.tsx
 */
var defaultProps = {
  onChange: jest.fn(),
  placeholder: 'test-input'
};
describe('test Input component', function () {
  it('should render the correct default Input', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_input.Input, defaultProps));
    var testNode = wrapper.getByPlaceholderText('test-input');
    expect(testNode).toBeInTheDocument();
    expect(testNode).toHaveClass('chicken-design-input-inner');

    _react2.fireEvent.change(testNode, {
      target: {
        value: '23'
      }
    });

    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(testNode.value).toEqual('23');
  });
  it('should render the disabled Input on disabled property', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_input.Input, {
      disabled: true,
      placeholder: "disabled"
    }));
    var testNode = wrapper.getByPlaceholderText('disabled');
    expect(testNode.disabled).toBeTruthy();
  });
  it('should render different input sizes on size property', function () {
    var wrapper = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_input.Input, {
      placeholder: "sizes",
      size: "lg"
    }));
    var testContainer = wrapper.container.querySelector('.chicken-design-input-wrapper');
    expect(testContainer).toHaveClass('input-size-lg');
  });
  it('should render prepand and append element on prepand/append property', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_input.Input, {
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