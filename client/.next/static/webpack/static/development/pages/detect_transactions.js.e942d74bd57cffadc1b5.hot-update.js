webpackHotUpdate("static/development/pages/detect_transactions.js",{

/***/ "./functions/price_sensitive_market.js":
/*!*********************************************!*\
  !*** ./functions/price_sensitive_market.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var price_sensitive_market = function price_sensitive_market(tabs, maps) {
  //let myMap = new Map();
  var elasticity_list = []; //console.log("all list is ", alllist)

  for (var i = 1; i < tabs.length; i++) {
    var selected_currency = tabs[i]['id'];
    var selected_data_all_products = maps.get(selected_currency);
    var selected_data = selected_data_all_products.get('all');
    var product_price_list = selected_data[2].map(function (element) {
      return Math.round(element * product_price * 100) / 100;
    });
    var slope = linear_regression(selected_data[1], product_price_list)[3];
    var elasticity = price_elasticity(selected_data[1], product_price_list, Math.abs(slope));

    if (myMap.has(elasticity)) {
      var value = myMap.get(elasticity);
      value.push(selected_currency);
      myMap.set(elasticity, value);
    } else {
      myMap.set(elasticity, [selected_currency]);
    }

    elasticity_list.push(elasticity);
  }

  elasticity_list.sort(function (a, b) {
    return b - a;
  });
  var currency_rank = [];

  for (var j = 1; j < tabs.length; j++) {
    var currency = elasticity_list[j];

    if (!currency_rank.includes(currency[0])) {
      currency_rank.push(currency);
    }
  }

  localStorage.setItem('currency_elasticity_rank', currency_rank);
};

module.exports = price_sensitive_market;

/***/ })

})
//# sourceMappingURL=detect_transactions.js.e942d74bd57cffadc1b5.hot-update.js.map