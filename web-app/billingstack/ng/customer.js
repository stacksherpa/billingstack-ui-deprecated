var customer = angular.module('customer',[])
  .config(["$routeProvider",function($routeProvider){
    $routeProvider
      .when('/',{templateUrl : 'templates/customer', controller : "CustomerCtrl"})
      .when('/users',{templateUrl : 'templates/customer_users', controller : "CustomerUsersCtrl"})
      .when('/users/:user',{templateUrl : 'templates/customer_user', controller : "CustomerUserCtrl"})
      .when('/payment-methods',{templateUrl : 'templates/customer_payment_methods', controller : "CustomerPaymentMethodsCtrl"})
      .when('/payment-methods/:payment_method',{templateUrl : 'templates/customer_payment_method', controller : "CustomerPaymentMethodCtrl"})
      .when('/subscriptions',{templateUrl : 'templates/customer_subscriptions', controller : "CustomerSubscriptionsCtrl"})
      .when('/subscriptions/:subscription',{templateUrl : 'templates/customer_subscription', controller : "CustomerSubscriptionCtrl"})
      .when('/subscriptions/:subscription/usages',{templateUrl : 'templates/customer_usages', controller : "CustomerUsagesCtrl"})
      .when('/subscriptions/:subscription/usages/:usage',{templateUrl : 'templates/customer_usage', controller : "CustomerUsageCtrl"})
      .when('/usages',{templateUrl : 'templates/customer_usages', controller : "CustomerUsagesCtrl"})
      .when('/usages/:usage',{templateUrl : 'templates/customer_usage', controller : "CustomerUsageCtrl"})
      .when('/invoices',{templateUrl : 'templates/customer_invoices', controller : "CustomerInvoicesCtrl"})
      .when('/invoices/:invoice',{templateUrl : 'templates/customer_invoice', controller : "CustomerInvoiceCtrl"})
      .when('/transactions',{templateUrl : 'templates/customer_transactions', controller : "CustomerTransactionsCtrl"})
      .when('/transactions/:transaction',{templateUrl : 'templates/customer_transaction', controller : "CustomerTransactionCtrl"})
      .otherwise({redirectTo : '/customers'})
  }])
  .controller('BillingStackCtrl', ['$scope','$routeParams','$location','config', function($scope,$routeParams,$location,config) {
    $scope.params = $routeParams;
    $scope.config = config;
  }])
  .controller('CustomerCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint)
        .success(function(data) {
          $scope.item = data;
          $scope.searching = false;
        })
    }

    $scope.save = function() {
      $http.put($scope.config.endpoint, $scope.item)
        .success(function(data) {
          
        })
        .error(function(data) {
          $('.top-right').notify({
              type : 'error',
              message: { text: data.error }
          }).show();
        })
    }

    $scope.refresh()
  }])
  .controller('CustomerUsersCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/users')
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('CustomerUserCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.user == "0") {
        $scope.item = {
          username : "",
          password : "",
          password2 : "",
        }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/users/'+$scope.params.user)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
      }
    }
    $scope.save = function() {
      $http.post($scope.config.endpoint+'/users', $scope.item)
        .success(function(data) {
          $location.path('/users')
        })
    }
    $scope.remove = function() {
      $location.path('/users')
    }
    $scope.refresh()
  }])
  .controller('CustomerPaymentMethodsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/credit-cards')
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('CustomerPaymentMethodCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.payment_method == "0") {
        $scope.item = {
            holder : "LUIS",
            number : "4111111111111111",
            expiration : "05/2013",
            cvv : "873"
        }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/credit-cards/'+$scope.params.payment_method)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
      }
    }
    $scope.save = function() {
      $http.post($scope.config.endpoint+'/credit-cards', $scope.item)
        .success(function(data) {
          $location.path('/payment-methods')
        })
    }
    $scope.update = function() {
      $location.path('/payment-methods')
    }
    $scope.remove = function() {
      $location.path('/payment-methods')
    }
    $scope.refresh()
  }])
  .controller('CustomerSubscriptionsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/subscriptions')
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('CustomerSubscriptionCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.subscription == "0") {
        $scope.item = {
          name : "subscription.0",
          title : "Subscription 0",
          description : "My first Subscription",
          plan:{
            id : ""
          }
        }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/subscriptions/'+$scope.params.subscription)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
      }
    }
    $scope.save = function() {
      $http.post($scope.config.endpoint+'/subscriptions', $scope.item)
        .success(function(data) {
          $location.path('/subscriptions')
        })
    }
    $scope.update = function() {
      $location.path('/subscriptions')
    }
    $scope.remove = function() {
      $location.path('/subscriptions')
    }
    $scope.refresh()
  }])
  .controller('CustomerUsagesCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      var path = $scope.config.endpoint
      if($scope.params.subscription) {
        path += '/subscriptions/'+$scope.params.subscription
      }
      path += '/usages'
      $scope.searching = true;
      $http.get(path)
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('CustomerUsageCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.usage == "0") {
        $scope.item = {
          provider : 'openstack',
          resource : 'tenant:123',
          product : {
            name : 'storage'
          },
          value : 100,
          measure : 'gb'
        }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/subscriptions/'+$scope.params.subscription+'/usages/'+$scope.params.usage)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
      }
    }
    $scope.save = function() {
      $http.post($scope.config.endpoint+'/subscriptions/'+$scope.params.subscription+'/usages', [$scope.item])
        .success(function(data) {
          $location.path('/subscriptions')
        })
    }
    $scope.update = function() {
      $location.path('/subscriptions')
    }
    $scope.remove = function() {
      $location.path('/subscriptions')
    }
    $scope.refresh()
  }])
  .controller('CustomerInvoicesCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/invoices')
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('CustomerInvoiceCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.invoice == "0") {
        $scope.item = {
          name : "invoice.0",
          title : "Invoice 0",
          description : "My first Subscription",
        }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/invoices/'+$scope.params.invoice)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
      }
    }
    $scope.save = function() {
      $http.post($scope.config.endpoint+'/invoices', $scope.item)
        .success(function(data) {
          $location.path('/invoices')
        })
    }
    $scope.update = function() {
      $location.path('/invoices')
    }
    $scope.remove = function() {
      $location.path('/invoices')
    }
    $scope.refresh()
  }])
  .controller('CustomerTransactionsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/transactions')
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('CustomerTransactionCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.transaction == "0") {
        $scope.item = {
          name : "transaction.0",
          title : "Transaction 0",
          description : "My first Subscription",
        }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/transactions/'+$scope.params.transaction)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
      }
    }
    $scope.save = function() {
      $location.path('/transactions')
    }
    $scope.update = function() {
      $location.path('/transactions')
    }
    $scope.remove = function() {
      $location.path('/transactions')
    }
    $scope.refresh()
  }])
  .directive('subscription', ['$http',function($http) {
    return {
      restrict : "C",
      link : function(scope, element, attrs) {
        scope.bill = function() {
          $http.post(scope.config.endpoint+'/subscriptions/'+scope.item.id+'/bill')
            .success(function(data) {
              console.log(data)
            })
        }
        scope.remove = function() {
          $http.delete(scope.config.endpoint+'/subscriptions/'+scope.item.id)
            .success(function(data) {
              scope.refresh();
            })
        }
      }
    }
  }])
  .directive('plans', ['$http',function($http) {
    return {
      restrict : "C",
      link : function(scope, element, attrs) {
        $http.get(scope.config.endpoint.substring(0, scope.config.endpoint.indexOf('/customers'))+'/plans')
          .success(function(data) {
            scope.plans = data;
          })
      }
    }
  }])
  .directive('user', ['$http',function($http) {
    return {
      restrict : "C",
      link : function(scope, element, attrs) {
        scope.remove = function() {
          $http.delete(scope.config.endpoint+'/users/'+scope.item.id)
            .success(function(data) {
              scope.refresh();
            })
        }
      }
    }
  }])
	.directive('invoice', ['$http',function($http) {
    return {
      restrict : "C",
      link : function(scope, element, attrs) {
        scope.remove = function() {
          $http.delete(scope.config.endpoint+'/invoices/'+scope.item.id)
            .success(function(data) {
              scope.refresh();
            })
        }
      }
    }
  }])
  .filter('checked', function () {
    return function (array) {
      if(array) {
        return array.filter(function(el) {
          return el.checked
        })
      } else {
        return []
      }
    };
  })