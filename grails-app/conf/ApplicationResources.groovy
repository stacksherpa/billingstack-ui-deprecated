modules = {
	application {
    //resource url:'js/application.js'
    resource url:'billingstack/js/underscore-min.js'
    resource url:'billingstack/js/jquery-1.8.3.min.js'
    resource url:'bootstrap/js/bootstrap.min.js'
    resource url:'billingstack/js/angular.min.js'
		resource url:'billingstack/js/bootstrap-notify.js'
	}
	merchant {
    dependsOn 'application'
    resource url:'billingstack/ng/merchant.js'
	}
	settings {
    dependsOn 'application'
    resource url:'billingstack/ng/settings.js'
	}
	customer {
    dependsOn 'application'
    resource url:'billingstack/ng/customer.js'
	}
}