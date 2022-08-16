"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Modal(_ref) {
  var text = _ref.text,
      closeModal = _ref.closeModal;
  return /*#__PURE__*/_react.default.createElement(ModalBackground, {
    className: "modal_background",
    onClick: closeModal
  }, /*#__PURE__*/_react.default.createElement(ModalContainer, {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "modal_text"
  }, text), /*#__PURE__*/_react.default.createElement(IconContainer, {
    className: "modal_icon"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCircleXmark,
    style: {
      position: "absolute",
      top: "-60px",
      right: "-35px",
      fontSize: "22px",
      backgroundColor: "#fff",
      borderRadius: "50%"
    },
    onClick: closeModal
  }))));
}
/** Modal Style */


var ModalBackground = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

var ModalContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #fff;\n  padding: 1.5rem;\n  border-radius: 4px;\n  box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.55);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));

var IconContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n"])));