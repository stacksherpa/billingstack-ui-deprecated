var merchant = angular.module('merchant',[])
  .config(["$routeProvider",function($routeProvider){
    $routeProvider
      .when('/products',{templateUrl : 'templates/products', controller : "ProductsCtrl"})
      .when('/products/:product',{templateUrl : 'templates/product', controller : "ProductCtrl"})
      .when('/plans',{templateUrl : 'templates/plans', controller : "PlansCtrl"})
      .when('/plans/create',{templateUrl : 'templates/plan_create', controller : "PlanCtrl"})
      .when('/plans/:plan',{templateUrl : 'templates/plan', controller : "PlanCtrl"})
      .when('/subscriptions',{templateUrl : 'templates/subscriptions', controller : "SubscriptionsCtrl"})
      .when('/subscriptions/:subscription',{templateUrl : 'templates/subscription', controller : "SubscriptionCtrl"})
      .when('/invoices',{templateUrl : 'templates/invoices', controller : "InvoicesCtrl"})
      .when('/invoices/:invoice',{templateUrl : 'templates/invoice', controller : "InvoiceCtrl"})
      .when('/transactions',{templateUrl : 'templates/transactions', controller : "TransactionsCtrl"})
      .when('/transactions/:transaction',{templateUrl : 'templates/transaction', controller : "TransactionCtrl"})
      .when('/customers',{templateUrl : 'templates/customers', controller : "CustomersCtrl"})
      .when('/customers/0',{templateUrl : 'templates/customer_create', controller : "CustomerCtrl"})
      .otherwise({redirectTo : '/customers'})
  }])
  .controller('BillingStackCtrl', ['$scope','$routeParams','$location','config', function($scope,$routeParams,$location,config) {
    $scope.params = $routeParams;
    $scope.config = config;
  }])
  .controller('ProductsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/products')
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('ProductCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.product == "0") {
        $scope.item = {
          name : "storage",
          title : "Storage",
          description : "Storage (GB)",
        }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/products/'+$scope.params.product)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
      }
    }
    $scope.save = function() {
      $http.post($scope.config.endpoint+'/products', $scope.item)
        .success(function(data) {
          $location.path('/products')
        })
    }
    $scope.update = function() {
      $location.path('/products')
    }
    $scope.remove = function() {
      $location.path('/products')
    }
    $scope.refresh()
  }])
  .controller('PlansCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/plans')
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('PlanCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if(!$scope.params.plan) {
        $scope.item = {
          name : "plan.0",
          title : "Plan 0",
          description : "My first Plan",
          metadata : {
            quotas : [
                {label : "gigabytes", key : "gigabytes", value : 1000},
                {label : "metadata_items", key : "gigabytes", value : 128},
                {label : "injected_files", key : "gigabytes", value : 5},
                {label : "security_group_rules", key : "gigabytes", value : 20},
                {label : "volumes", key : "gigabytes", value : 10},
                {label : "instances", key : "gigabytes", value : 10},
                {label : "security_groups", key : "gigabytes", value : 10},
                {label : "cores", key : "cores", value : 20},
                {label : "floating_ips", key : "floating_ips", value : 10},
                {label : "ram", key : "floating_ips", value : 51200},
                {label : "key_pairs", key : "floating_ips", value : 100},
                {label : "injected_file_content_bytes", key : "floating_ips", value : 10240},
                {label : "injected_file_path_bytes", key : "floating_ips", value : 255},
            ]
          }
        }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/products')
          .success(function(data) {
            $scope.products = data;
            $scope.searching = false;
          })
        $http.get($scope.config.endpoint+'/plans/'+$scope.params.plan)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
        
        
        var addProduct = function(product) {
          if(!$scope.item.products) {
            $scope.item.products = []
          }
          $scope.item.products.push(product)
        }

        var removeProduct = function(product) {
          $scope.item.products = _.reject($scope.item.products, function(el) { return el.id == product.id})
        } 
          
        $scope.refreshProduct = function(product) {
          if(product.checked) {
            addProduct(product)
          } else {
            removeProduct(product)
          }
        }

				$scope.containsProduct = function(product) {
					var ids = _.pluck($scope.item.products, 'id');
					return _.contains(ids, product.id);
				}
        
        $scope.addRule = function($event, product, rule) {
          $event.preventDefault();
          if(!product.rules) {
            product.rules = []
          }
          product.rules.push(rule);
        }
        
        $scope.removeRule = function(product, index) {
          product.rules.splice(index,1)
        }
        
        $scope.addRange = function(rule, range) {
          if(!rule.ranges) {
            rule.ranges = []
          }
          console.log(range)
          rule.ranges.push({from : range.from, to : range.to, price : range.price})
          range.from = null;
          range.to = null;
          range.price = null;
        }
        
        $scope.removeRange = function(rule, index) {
          rule.ranges.splice(index,1)
        }
        
      }
    }
    $scope.save = function() {
      if(!$scope.item.id) {
        $http.post($scope.config.endpoint+'/plans', $scope.item)
          .success(function(data) {
            $location.path('/plans')
          })
      } else {
        $http.put($scope.config.endpoint+'/plans/'+$scope.params.plan, $scope.item)
          .success(function(data) {
            $location.path('/plans')
          })
      }
    }
    $scope.remove = function() {
      $location.path('/plans')
    }
    $scope.refresh()
  }])
  .controller('SubscriptionsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
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
  .controller('SubscriptionCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.subscription == "0") {
        $scope.item = {
          name : "subscription.0",
          title : "Subscription 0",
          description : "My first Subscription",
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
  .controller('InvoicesCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
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
  .controller('InvoiceCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.invoice == "0") {
        $scope.item = {
          name : "invoice.0",
          title : "Invoice 0",
          description : "My first Invoice",
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
  .controller('TransactionsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
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
  .controller('TransactionCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.transaction == "0") {
        $scope.item = {
          name : "transaction.0",
          title : "Transaction 0",
          description : "My first Transaction",
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
      $http.post($scope.config.endpoint+'/transactions', $scope.item)
        .success(function(data) {
          $location.path('/transactions')
        })
    }
    $scope.update = function() {
      $location.path('/transactions')
    }
    $scope.remove = function() {
      $location.path('/transactions')
    }
    $scope.refresh()
  }])
  .controller('CustomersCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/customers')
        .success(function(data) {
          $scope.items = data;
          $scope.searching = false;
        })
    }
    $scope.refresh()
  }])
  .controller('CustomerCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if(!$scope.params.customer) {
        $scope.item = {
          name : "",
          language : "en",
          currency : "USD",
          user : {
            username : "",
            password : "",
            password2 : ""
          }
        }
				$scope.save = function() {
		      $http.post($scope.config.endpoint+'/customers', $scope.item)
		        .success(function(data) {
		          $location.path('/customers')
		        })
		        .error(function(data) {
		          $('.top-right').notify({
		              type : 'error',
		              message: { text: data.error }
		          }).show();
		        })
		    }
      } else {
        $scope.searching = true;
        $http.get($scope.config.endpoint+'/customers/'+$scope.params.customer)
          .success(function(data) {
            $scope.item = data;
            $scope.searching = false;
          })
				$scope.save = function() {
		      $http.put($scope.config.endpoint+'/customers/'+$scope.item.id, $scope.item)
		        .success(function(data) {
		          $location.path('/customers')
		        })
		        .error(function(data) {
		          $('.top-right').notify({
		              type : 'error',
		              message: { text: data.error }
		          }).show();
		        })
		    }
      }
    }
    
    $scope.update = function() {
      $location.path('/customers')
    }
    $scope.refresh()
  }])
  .directive('subscription', ['$http',function($http) {
    return {
      restrict : "C",
      link : function(scope, element, attrs) {
        scope.bill = function() {
          $http.post(scope.config.endpoint+'/customers/'+scope.item.customer.id+'/subscriptions/'+scope.item.id+'/bill')
            .success(function(data) {
              console.log(data)
            })
        }
				scope.remove = function() {
          $http.delete(scope.config.endpoint+'/customers/'+scope.item.customer.id+'/subscriptions/'+scope.item.id)
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
        $http.get(scope.config.endpoint+'/plans')
          .success(function(data) {
            scope.plans = data;
          })
      }
    }
  }])
	.directive('plan', ['$http',function($http) {
    return {
      restrict : "C",
      link : function(scope, element, attrs) {
				scope.remove = function() {
					$http.delete(scope.config.endpoint+'/plans/'+scope.item.id)
	          .success(function(data) {
	            scope.refresh();
	          })
				}
      }
    }
  }])
	.directive('product', ['$http',function($http) {
    return {
      restrict : "C",
      link : function(scope, element, attrs) {
				scope.remove = function() {
					$http.delete(scope.config.endpoint+'/products/'+scope.item.id)
	          .success(function(data) {
	            scope.refresh();
	          })
				}
      }
    }
  }])
	.directive('customer', ['$http',function($http) {
    return {
      restrict : "C",
      link : function(scope, element, attrs) {
        scope.remove = function() {
					$http.delete(scope.config.endpoint+'/customers/'+scope.item.id)
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