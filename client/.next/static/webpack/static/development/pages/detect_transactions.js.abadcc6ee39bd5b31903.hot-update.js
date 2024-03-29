webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./components/Main_data.js":
/*!*********************************!*\
  !*** ./components/Main_data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main_data; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapChart */ "./components/MapChart.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../functions/price_sensitive_market */ "./functions/price_sensitive_market.js");
/* harmony import */ var _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Main_data(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      content = _useState[0],
      setContent = _useState[1];

  var currency_list = _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5___default()(props.tabs, props.maps);
  console.log("currency_list is", currency_list);
  var price_sensitive_length = currency_list.length;
  var rows = [['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'], ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'], ['Navy Merino Wool Blazer with khaki chinos and yellow belt', '$445.00', 124518, 32, '$14,240.00']];
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Range Analyzed",
    sectioned: true
  }, "EUR: 2%", __jsx("br", null), "CAD: 5%", __jsx("br", null), "GBP: 10%", __jsx("br", null))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Your Most Price Sentitive Markets",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
    columnContentTypes: ['text', 'numeric', 'numeric', 'numeric', 'numeric'],
    headings: ['Product', 'Price', 'SKU Number', 'Net quantity', 'Net sales'],
    rows: rows,
    totals: ['', '', '', 255, '$155,830.00']
  }), "EUR: France, Italy, Germany", __jsx("br", null), "CAD: Countries: Canada", __jsx("br", null), "GBP: Countries: UK", __jsx("br", null))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Your Most Price Volatile Markets",
    sectioned: true
  }, "EUR: France, Italy, Germany", __jsx("br", null), "CAD: Countries: Canada", __jsx("br", null), "GBP: Countries: UK", __jsx("br", null))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Change Magnitue the Past 30 Days",
    sectioned: true
  }, __jsx(_MapChart__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setTooltipContent: setContent
  }), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], null, content))));
}

function displayBlock(currency) {
  render({
    currency: currency
  });
}

/***/ })

})
//# sourceMappingURL=detect_transactions.js.abadcc6ee39bd5b31903.hot-update.js.map