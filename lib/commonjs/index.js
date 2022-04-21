"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativePaper = require("react-native-paper");

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DisplayLoading = () => {
  const styles = createStyles();
  return /*#__PURE__*/_react.default.createElement(_reactNativePaper.ActivityIndicator, {
    animating: true,
    size: "large",
    style: styles.container
  });
};

const createStyles = () => _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

var _default = (0, _reactNativePaper.withTheme)(DisplayLoading);

exports.default = _default;
//# sourceMappingURL=index.js.map