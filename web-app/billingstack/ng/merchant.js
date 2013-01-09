var merchant = angular.module('merchant',[])
  .config(["$routeProvider",function($routeProvider){
    $routeProvider
      .when('/settings',{templateUrl : 'templates/settings', controller : "SettingsCtrl"})
      .when('/users',{templateUrl : 'templates/users', controller : "UsersCtrl"})
      .when('/users/:user',{templateUrl : 'templates/user', controller : "UserCtrl"})
      .when('/payment-gateways',{templateUrl : 'templates/payment_gateways', controller : "PaymentGatewaysCtrl"})
      .when('/payment-gateways/:payment_gateway',{templateUrl : 'templates/payment_gateway', controller : "PaymentGatewayCtrl"})
      .when('/providers',{templateUrl : 'templates/providers', controller : "ProvidersCtrl"})
      .when('/providers/:provider',{templateUrl : 'templates/provider', controller : "ProviderCtrl"})
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
      .when('/customers',{templateUrl : 'templates/customers', controller : "CustomersCtrl"})
      .when('/customers/0',{templateUrl : 'templates/customer_create', controller : "CustomerCtrl"})
      .when('/customers/:customer',{templateUrl : 'templates/customer', controller : "CustomerCtrl"})
      .when('/customers/:customer/users',{templateUrl : 'templates/customer_users', controller : "CustomerUsersCtrl"})
      .when('/customers/:customer/users/:user',{templateUrl : 'templates/customer_user', controller : "CustomerUserCtrl"})
      .when('/customers/:customer/subscriptions',{templateUrl : 'templates/customer_subscriptions', controller : "CustomerSubscriptionsCtrl"})
      .when('/customers/:customer/subscriptions/:subscription',{templateUrl : 'templates/customer_subscription', controller : "CustomerSubscriptionCtrl"})
      .when('/customers/:customer/invoices',{templateUrl : 'templates/customer_invoices', controller : "CustomerInvoicesCtrl"})
      .when('/customers/:customer/invoices/:invoice',{templateUrl : 'templates/customer_invoice', controller : "CustomerInvoiceCtrl"})
      .when('/customers/:customer/transactions',{templateUrl : 'templates/customer_transactions', controller : "CustomerTransactionsCtrl"})
      .when('/customers/:customer/transactions/:transaction',{templateUrl : 'templates/customer_transaction', controller : "CustomerTransactionCtrl"})
      .otherwise({redirectTo : '/customers'})
  }])
  .controller('BillingStackCtrl', ['$scope','$routeParams','$location','config', function($scope,$routeParams,$location,config) {
    $scope.params = $routeParams;
    $scope.config = config;
  }])
  .controller('PaymentGatewaysCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('PaymentGatewayCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/payment-gateways')
    }
    $scope.update = function() {
      $location.path('/payment-gateways')
    }
    $scope.delete = function() {
      $location.path('/payment-gateways')
    }
  }])
  .controller('ProvidersCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('ProviderCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/providers')
    }
    $scope.update = function() {
      $location.path('/providers')
    }
    $scope.delete = function() {
      $location.path('/providers')
    }
  }])
  .controller('UsersCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('UserCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/users')
    }
    $scope.update = function() {
      $location.path('/users')
    }
    $scope.delete = function() {
      $location.path('/users')
    }
  }])
  .controller('ProductsCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('ProductCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/products')
    }
    $scope.update = function() {
      $location.path('/products')
    }
    $scope.delete = function() {
      $location.path('/products')
    }
  }])
  .controller('PlansCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('PlanCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/plans')
    }
    $scope.update = function() {
      $location.path('/plans')
    }
    $scope.delete = function() {
      $location.path('/plans')
    }
  }])
  .controller('SubscriptionsCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('SubscriptionCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/subscriptions')
    }
    $scope.update = function() {
      $location.path('/subscriptions')
    }
    $scope.delete = function() {
      $location.path('/subscriptions')
    }
  }])
  .controller('InvoicesCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('InvoiceCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/invoices')
    }
    $scope.update = function() {
      $location.path('/invoices')
    }
    $scope.delete = function() {
      $location.path('/invoices')
    }
  }])
  .controller('TransactionsCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('TransactionCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/transactions')
    }
    $scope.update = function() {
      $location.path('/transactions')
    }
    $scope.delete = function() {
      $location.path('/transactions')
    }
  }])
  .controller('CustomersCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('CustomerCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/customers')
    }
    $scope.update = function() {
      $location.path('/customers')
    }
    $scope.delete = function() {
      $location.path('/customers')
    }
  }])
  .controller('CustomerUsersCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('CustomerUserCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/customers/'+$scope.params.customer+'/users')
    }
    $scope.update = function() {
      $location.path('/customers/'+$scope.params.customer+'/users')
    }
    $scope.delete = function() {
      $location.path('/customers/'+$scope.params.customer+'/users')
    }
  }])
  .controller('CustomerSubscriptionsCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('CustomerSubscriptionCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/customers/'+$scope.params.customer+'/subscriptions')
    }
    $scope.update = function() {
      $location.path('/customers/'+$scope.params.customer+'/subscriptions')
    }
    $scope.delete = function() {
      $location.path('/customers/'+$scope.params.customer+'/subscriptions')
    }
  }])
  .controller('CustomerInvoicesCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('CustomerInvoiceCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/customers/'+$scope.params.customer+'/invoices')
    }
    $scope.update = function() {
      $location.path('/customers/'+$scope.params.customer+'/invoices')
    }
    $scope.delete = function() {
      $location.path('/customers/'+$scope.params.customer+'/invoices')
    }
  }])
  .controller('CustomerTransactionsCtrl', ['$scope','$location',function($scope,$location) {
    
  }])
  .controller('CustomerTransactionCtrl', ['$scope','$location',function($scope,$location) {
    $scope.refresh = function() {
      
    }
    $scope.save = function() {
      $location.path('/customers/'+$scope.params.customer+'/transactions')
    }
    $scope.update = function() {
      $location.path('/customers/'+$scope.params.customer+'/transactions')
    }
    $scope.delete = function() {
      $location.path('/customers/'+$scope.params.customer+'/transactions')
    }
  }])