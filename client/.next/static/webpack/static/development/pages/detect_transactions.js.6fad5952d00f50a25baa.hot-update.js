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







var country_code_to_name = __webpack_require__(/*! ../functions/country_code_to_name */ "./functions/country_code_to_name.js"); //import france_flag from '../images/france_flag';


function Main_data(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      content = _useState[0],
      setContent = _useState[1];

  var currency_list = _functions_price_sensitive_market__WEBPACK_IMPORTED_MODULE_5___default()(props.tabs, props.maps);
  console.log("currency_list is", currency_list);
  var rows_price_sensitive = [//['Emerald Silk Gown', '$875.00'],
    //['Mauve Cashmere Scarf', '$230.00'],
  ];
  var rows_price_range = [//['Emerald Silk Gown', '$875.00'],
    //['Mauve Cashmere Scarf', '$230.00'],
  ];
  var countryListMap = props.countryListMap;
  var percChangeMap = props.perc_change_map;
  console.log("countryListMap is", countryListMap);
  console.log("percChangeMap is", percChangeMap); // price elasticity

  for (var i = 0; i < currency_list.length; i++) {
    var currency = currency_list[i];
    var country = countryListMap.get(currency);
    console.log("currency is", currency);
    console.log("country is", country);
    var country_string = '';

    for (var j = 0; j < country.length; j++) {
      if (country_code_to_name(country[j]) != undefined) {
        country_string += country_code_to_name(country[j]) + ', ';
      }
    }

    var country_string = country_string.substring(0, country_string.length - 2);
    console.log("country_string is", country_string);
    rows_price_sensitive.push([currency, country_string]);
    console.log("percChangeMap.get(currency_list[i]) is ", percChangeMap.get(currency_list[i]));
    rows_price_range.push([currency, percChangeMap.get(currency_list[i])]);
  }

  var rows_price_change = [['EUR', '12%'], ['CAD', '15%'], ['GBP', '17%']];
  var rows_price_volatie = [['EUR', 'France, Italy, Germany'], ['CAD', 'Canada'][('GBP', 'UK')]];
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Range Analyzed",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
    columnContentTypes: ['text', 'text'],
    headings: ['Currency', 'Price Moving % Range'],
    rows: rows_price_range
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Your Most Price Sentitive Markets",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
    columnContentTypes: ['text', 'text'],
    headings: ['Currency', 'Price Sensitive Country'],
    rows: rows_price_sensitive
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    oneThird: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Your Most Price Volatile Markets",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DataTable"], {
    columnContentTypes: ['text', 'text'],
    headings: ['Currency', 'Price Volatile Country'],
    rows: rows_price_sensitive
  }))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Price Change Magnitue",
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
//# sourceMappingURL=detect_transactions.js.6fad5952d00f50a25baa.hot-update.js.map