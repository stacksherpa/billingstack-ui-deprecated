var merchant = angular.module('merchant',[])
  .config(["$routeProvider",function($routeProvider){
    $routeProvider
      .when('/customers',{templateUrl : 'templates/customers', controller : "CustomersCtrl"})
			.when('/customers/:customer',{templateUrl : 'templates/customer', controller : "CustomerCtrl"})
      .when('/products',{templateUrl : 'templates/products', controller : "ProductsCtrl"})
			.when('/products/:product',{templateUrl : 'templates/product', controller : "ProductCtrl"})
      .when('/plans',{templateUrl : 'templates/plans', controller : "PlansCtrl"})
			.when('/plans/:plan',{templateUrl : 'templates/plan', controller : "PlanCtrl"})
      .when('/subscriptions',{templateUrl : 'templates/subscriptions', controller : "SubscriptionsCtrl"})
			.when('/subscriptions/:subscription',{templateUrl : 'templates/subscription', controller : "SubscriptionCtrl"})
      .when('/invoices',{templateUrl : 'templates/invoices', controller : "InvoicesCtrl"})
			.when('/invoices/:invoice',{templateUrl : 'templates/invoice', controller : "InvoiceCtrl"})
      .when('/transactions',{templateUrl : 'templates/transactions', controller : "TransactionsCtrl"})
			.when('/transactions/:transaction',{templateUrl : 'templates/transaction', controller : "TransactionCtrl"})
      .otherwise({redirectTo : '/customers'})
  }])
  .controller('BillingStackCtrl', ['$scope','$routeParams','$location','config', function($scope,$routeParams,$location,config) {
    $scope.params = $routeParams;
    $scope.config = config;
  }])
  .controller('CustomersCtrl', ['$scope',function($scope) {
    
  }])
	.controller('CustomerCtrl', ['$scope',function($scope) {
    
  }])
  .controller('ProductsCtrl', ['$scope',function($scope) {
    
  }])
	.controller('ProductCtrl', ['$scope',function($scope) {
    
  }])
  .controller('PlansCtrl', ['$scope',function($scope) {
    
  }])
	.controller('PlanCtrl', ['$scope',function($scope) {
    
  }])
  .controller('SubscriptionsCtrl', ['$scope',function($scope) {
    
  }])
	.controller('SubscriptionCtrl', ['$scope',function($scope) {
    
  }])
  .controller('InvoicesCtrl', ['$scope',function($scope) {
    
  }])
	.controller('InvoiceCtrl', ['$scope',function($scope) {
    
  }])
  .controller('TransactionsCtrl', ['$scope',function($scope) {
    
  }])
	.controller('TransactionCtrl', ['$scope',function($scope) {
    
  }])