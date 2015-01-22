/* global angular */

angular
  .module('scenario')

  .config(['multimocksDataProvider', function (multimocksDataProvider) {
    multimocksDataProvider.setDefaultScenario('_default');
    /* jshint ignore:start */
    multimocksDataProvider.setMockData({"_default":[{"httpMethod":"GET","statusCode":200,"response":{"items":[{"title":"REST in Practise","type":"Book","desc":"In this insightful book, three SOA experts provide a down-to-earth explanation of REST and demonstrate how you can develop simple and elegant distributed hypermedia systems by applying the Web's guiding principles to common enterprise computing problems. You'll learn techniques for implementing specific Web technologies and patterns to solve the needs of a typical company as it grows from modest beginnings to become a global enterprise.","inStock":"4"},{"title":"LED Lenser P7.2 Pro Torch","type":"Electronics","desc":"The LED Lenser P7.2 Professional Torch is a medium-sized handheld torch that has all the best features of the P7, and offers even more in performance, design, durability and efficiency.","inStock":"3"}]},"rel":"Basket","uri":"https://example.com/Basket"}],"noItems":[{"httpMethod":"GET","statusCode":200,"response":{"items":[]},"rel":"Basket","uri":"https://example.com/Basket"}],"outOfStock":[{"httpMethod":"GET","statusCode":200,"response":{"items":[{"title":"REST in Practise","type":"Book","desc":"In this insightful book, three SOA experts provide a down-to-earth explanation of REST and demonstrate how you can develop simple and elegant distributed hypermedia systems by applying the Web's guiding principles to common enterprise computing problems. You'll learn techniques for implementing specific Web technologies and patterns to solve the needs of a typical company as it grows from modest beginnings to become a global enterprise.","inStock":"0"}]},"rel":"Basket","uri":"https://example.com/Basket"}]});
    /* jshint ignore:end */
  }]);
