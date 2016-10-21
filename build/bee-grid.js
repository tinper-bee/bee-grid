'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string]),

  /**
   * xs显示列数
   */
  xs: _react.PropTypes.number,
  /**
   * sm显示列数
   */
  sm: _react.PropTypes.number,
  /**
   * md显示列数
   */
  md: _react.PropTypes.number,
  /**
   * lg显示列数
   */
  lg: _react.PropTypes.number,
  /**
   * xs偏移列数
   */
  xsOffset: _react.PropTypes.number,
  /**
   * sm偏移列数
   */
  smOffset: _react.PropTypes.number,
  /**
   * md偏移列数
   */
  mdOffset: _react.PropTypes.number,
  /**
   * lg偏移列数
   */
  lgOffset: _react.PropTypes.number,
  /**
   * xs右偏移列数
   */
  xsPush: _react.PropTypes.number,
  /**
   * sm右偏移列数
   */
  smPush: _react.PropTypes.number,
  /**
   * md右偏移列数
   */
  mdPush: _react.PropTypes.number,
  /**
   * lg右偏移列数
   */
  lgPush: _react.PropTypes.number,
  /**
   * xs左偏移列数
   */
  xsPull: _react.PropTypes.number,
  /**
   * sm左偏移列数
   */
  smPull: _react.PropTypes.number,
  /**
   * md左偏移列数
   */
  mdPull: _react.PropTypes.number,
  /**
   * lg左偏移列数
   */
  lgPull: _react.PropTypes.number
};

var defaultProps = {
  componentClass: 'div'
};

var clsPrefix = 'u-col';

var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Col.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var classes = _props.classes;

    var others = _objectWithoutProperties(_props, ['componentClass', 'classes']);

    var tbClass = [];
    /**
     * 对传入props做样式转化
     * @type {[type]}
     */
    DEVICE_SIZES.forEach(function (size) {
      function popProp(propSuffix, modifier) {
        var propName = '' + size + propSuffix;
        var propValue = others[propName];

        if (propValue != undefined && propValue != null) {
          tbClass.push(clsPrefix + '-' + size + modifier + '-' + propValue);
        }

        delete others[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');
    });

    return _react2["default"].createElement(
      Component,
      _extends({
        className: (0, _classnames2["default"])(tbClass, classes)
      }, others),
      this.props.children
    );
  };

  return Col;
}(_react.Component);

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

exports["default"] = Col;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
   * Adds `container-fluid` class.
   */
  fluid: _react.PropTypes.bool,
  /**
   * You can use a custom element for this component
   */
  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
};

var defaultProps = {
  componentClass: 'div',
  fluid: false
};

var clsPrefix = 'u-container';

var Con = function (_React$Component) {
  _inherits(Con, _React$Component);

  function Con() {
    _classCallCheck(this, Con);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Con.prototype.render = function render() {
    var _tbclass;

    var _props = this.props;
    var fluid = _props.fluid;
    var Component = _props.componentClass;
    var classes = _props.classes;

    var others = _objectWithoutProperties(_props, ['fluid', 'componentClass', 'classes']);

    var tbclass = (_tbclass = {}, _defineProperty(_tbclass, '' + clsPrefix, !fluid), _defineProperty(_tbclass, clsPrefix + '-fluid', fluid), _tbclass);

    return _react2["default"].createElement(
      Component,
      _extends({}, others, {
        className: (0, _classnames2["default"])(tbclass, classes)
      }),
      this.props.children
    );
  };

  return Con;
}(_react2["default"].Component);

Con.propTypes = propTypes;
Con.defaultProps = defaultProps;

exports["default"] = Con;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Con = exports.Row = exports.Col = undefined;

var _Col2 = require('./Col');

var _Col3 = _interopRequireDefault(_Col2);

var _Row2 = require('./Row');

var _Row3 = _interopRequireDefault(_Row2);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.Col = _Col3["default"];
exports.Row = _Row3["default"];
exports.Con = _Grid2["default"];
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  componentClass: _react.PropTypes.oneOfType([_react2["default"].PropTypes.element, _react2["default"].PropTypes.string])
};

var defaultProps = {
  componentClass: 'div'
};

var clsPrefix = 'u-row';

var Row = function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Row.prototype.render = function render() {
    var _props = this.props;
    var Component = _props.componentClass;
    var classes = _props.classes;

    var others = _objectWithoutProperties(_props, ['componentClass', 'classes']);

    var bsclass = '' + clsPrefix;

    return _react2["default"].createElement(
      Component,
      _extends({}, others, {
        className: (0, _classnames2["default"])(bsclass, classes)
      }),
      this.props.children
    );
  };

  return Row;
}(_react.Component);

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

exports["default"] = Row;
module.exports = exports['default'];