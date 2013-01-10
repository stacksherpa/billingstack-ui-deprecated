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
  .controller('PaymentGatewaysCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
			$scope.searching = true;
			$http.get($scope.config.endpoint+'/payment-gateways')
				.success(function(data) {
					$scope.items = data;
					$scope.searching = false;
				})
		}
		$scope.refresh()
  }])
  .controller('PaymentGatewayCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.payment_gateway == 0) {
				$scope.item = {
					name : "braintree",
					title : "Braintree",
					description : "Braintree Payments",
					is_default : true,
					metadata : {
						merchant_id : "",
						environment : "sandbox",
						public_key : "",
						private_key : ""
					}
				}
			} else {
				$scope.searching = true;
				$http.get($scope.config.endpoint+'/payment-gateways/'+$scope.params.payment_gateway)
					.success(function(data) {
						$scope.item = data;
						$scope.searching = false;
					})
			}
    }
    $scope.save = function() {
			$http.post($scope.config.endpoint+'/payment-gateways', $scope.item)
				.success(function(data) {
					$location.path('/payment-gateways')
				})
    }
    $scope.update = function() {
      $location.path('/payment-gateways')
    }
    $scope.delete = function() {
      $location.path('/payment-gateways')
    }
		$scope.refresh()
  }])
  .controller('ProvidersCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    
  }])
  .controller('ProviderCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.provider == "0") {
				$scope.item = {
					name : "openstack",
					title : "OpenStack",
					description : "OpenStack IaaS Platform",
				}
			} else {
				$scope.searching = true;
				$http.get($scope.config.endpoint+'/providers/'+$scope.params.provider)
					.success(function(data) {
						$scope.item = data;
						$scope.searching = false;
					})
			}
    }
    $scope.save = function() {
      $http.post($scope.config.endpoint+'/providers', $scope.item)
				.success(function(data) {
					$location.path('/providers')
				})
    }
    $scope.update = function() {
      $location.path('/providers')
    }
    $scope.delete = function() {
      $location.path('/providers')
    }
		$scope.refresh()
  }])
  .controller('UsersCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    
  }])
  .controller('UserCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.user == "0") {
				$scope.item = {
					username : "luis.gervaso",
					password : "secret0",
					password2 : "secret0",
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
    $scope.update = function() {
      $location.path('/users')
    }
    $scope.delete = function() {
      $location.path('/users')
    }
		$scope.refresh()
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
    $scope.delete = function() {
      $location.path('/products')
    }
		$scope.refresh()
  }])
  .controller('PlansCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    
  }])
  .controller('PlanCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      if($scope.params.plan == "0") {
				$scope.item = {
					name : "plan.0",
					title : "Plan 0",
					description : "My first Plan",
				}
			} else {
				$scope.searching = true;
				$http.get($scope.config.endpoint+'/providers/'+$scope.params.plan)
					.success(function(data) {
						$scope.item = data;
						$scope.searching = false;
					})
			}
    }
    $scope.save = function() {
      $http.post($scope.config.endpoint+'/plans', $scope.item)
				.success(function(data) {
					$location.path('/plans')
				})
    }
    $scope.update = function() {
      $location.path('/plans')
    }
    $scope.delete = function() {
      $location.path('/plans')
    }
		$scope.refresh()
  }])
  .controller('SubscriptionsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    
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
    $scope.delete = function() {
      $location.path('/subscriptions')
    }
		$scope.refresh()
  }])
  .controller('InvoicesCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    
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
				$http.get($scope.config.endpoint+'/invoices/'+$scope.params.subscription)
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
    $scope.delete = function() {
      $location.path('/invoices')
    }
		$scope.refresh()
  }])
  .controller('TransactionsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    
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
    $scope.delete = function() {
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
					name : "woorea",
					language : "EN",
					currency : "USD",
					user : {
						username : "luis.gervaso",
						password : "secret0",
						password2 : "secret0"
					}
				}
			} else {
				$scope.searching = true;
				$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer)
					.success(function(data) {
						$scope.item = data;
						$scope.searching = false;
					})
			}
    }
    $scope.save = function() {
			$http.post($scope.config.endpoint+'/customers', $scope.item)
				.success(function(data) {
					$location.path('/customers')
				})
    }
    $scope.update = function() {
      $location.path('/customers')
    }
    $scope.delete = function() {
      $location.path('/customers')
    }
		$scope.refresh()
  }])
  .controller('CustomerUsersCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
			$scope.searching = true;
			$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer+'/users')
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
					username : "luis.gervaso",
					password : "secret0",
					password2 : "secret0",
				}
			} else {
				$scope.searching = true;
				$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer+'/users/'+$scope.params.user)
					.success(function(data) {
						$scope.item = data;
						$scope.searching = false;
					})
			}
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
		$scope.refresh()
  }])
  .controller('CustomerSubscriptionsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
			$scope.searching = true;
			$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer+'/subscriptions')
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
				}
			} else {
				$scope.searching = true;
				$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer+'/subscriptions/'+$scope.params.subscription)
					.success(function(data) {
						$scope.item = data;
						$scope.searching = false;
					})
			}
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
		$scope.refresh()
  }])
  .controller('CustomerInvoicesCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
			$scope.searching = true;
			$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer+'/invoices')
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
				$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer+'/invoices/'+$scope.params.invoice)
					.success(function(data) {
						$scope.item = data;
						$scope.searching = false;
					})
			}
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
		$scope.refresh()
  }])
  .controller('CustomerTransactionsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
			$scope.searching = true;
			$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer+'/transactions')
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
				$http.get($scope.config.endpoint+'/customers/'+$scope.params.customer+'/transactions/'+$scope.params.subscription)
					.success(function(data) {
						$scope.item = data;
						$scope.searching = false;
					})
			}
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
		$scope.refresh()
  }])