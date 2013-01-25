var settings = angular.module('settings',[])
  .config(["$routeProvider",function($routeProvider){
    $routeProvider
			.when('/',{templateUrl : 'templates/merchant', controller : "MerchantCtrl"})
      .when('/settings',{templateUrl : 'templates/settings', controller : "SettingsCtrl"})
      .when('/users',{templateUrl : 'templates/users', controller : "UsersCtrl"})
      .when('/users/:user',{templateUrl : 'templates/user', controller : "UserCtrl"})
      .when('/payment-gateways',{templateUrl : 'templates/payment_gateways', controller : "PaymentGatewaysCtrl"})
      .when('/payment-gateways/:payment_gateway',{templateUrl : 'templates/payment_gateway', controller : "PaymentGatewayCtrl"})
      .when('/providers',{templateUrl : 'templates/providers', controller : "ProvidersCtrl"})
      .when('/providers/:provider',{templateUrl : 'templates/provider', controller : "ProviderCtrl"})
      .otherwise({redirectTo : '/'})
  }])
  .controller('BillingStackCtrl', ['$scope','$routeParams','$location','config', function($scope,$routeParams,$location,config) {
    $scope.params = $routeParams;
    $scope.config = config;
  }])
	.controller('MerchantCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
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
    }
    $scope.refresh()
  }])
	.controller('SettingsCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
    $scope.refresh = function() {
      $scope.searching = true;
      $http.get($scope.config.endpoint+'/metadata')
        .success(function(data) {
          $scope.item = data;
          $scope.searching = false;
        })
    }
		$scope.save = function() {
      $http.put($scope.config.endpoint+'/metadata', $scope.item)
        .success(function(data) {
        })
    }
    $scope.refresh()
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
    $scope.remove = function() {
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
    $scope.remove = function() {
      $location.path('/providers')
    }
    $scope.refresh()
  }])
  .controller('UsersCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
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
  .controller('UserCtrl', ['$scope','$location','$http',function($scope,$location,$http) {
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
    $scope.update = function() {
      $location.path('/users')
    }
    $scope.remove = function() {
      $location.path('/users')
    }
    $scope.refresh()
  }])