<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="billingstack"/>
    <title>BillingStack</title>
  </head>
  <body>
    <div id="merchant" data-ng-controller="BillingStackCtrl">
      <g:render template="/templates/top" />
      <div class="container">
				<div class="page-header">
				  <h1>Customer <small></small></h1>
				</div>
				<div class="row">
					<div class="span3">
						<div class="well">
							<ul class="nav">
								<li><a href="#/"><i class="icon-pencil"></i> Edit</a></li>
								<li><a href="#/users"><i class="icon-user"></i> Users</a></li>
								<li><a href="#/payment-methods"><i class="icon-certificate"></i> Payment Methods</a></li>
								<li><a href="#/subscriptions"><i class="icon-leaf"></i> Subscriptions</a></li>
								<li><a href="#/usages"><i class="icon-list"></i> Usage</a></li>
								<li><a href="#/invoices"><i class="icon-briefcase"></i> Invoices</a></li>
								<li><a href="#/transactions"><i class="icon-list"></i> Transactions</a></li>
							</ul>
						</div>
					</div>
					<div class="span9" ng-view></div>
				</div>
      </div>
    </div>
		<div class='notifications top-right'></div>
		<script type="text/ng-template" id="templates/customer">
      <g:render template="/templates/customer" />
    </script>
		<script type="text/ng-template" id="templates/customer_payment_methods">
      <g:render template="/templates/customer_payment_methods" />
    </script>
		<script type="text/ng-template" id="templates/customer_payment_method">
      <g:render template="/templates/customer_payment_method" />
    </script>
		<script type="text/ng-template" id="templates/customer_users">
      <g:render template="/templates/customer_users" />
    </script>
		<script type="text/ng-template" id="templates/customer_user">
      <g:render template="/templates/customer_user" />
    </script>
		<script type="text/ng-template" id="templates/customer_subscriptions">
      <g:render template="/templates/customer_subscriptions" />
    </script>
		<script type="text/ng-template" id="templates/customer_subscription">
      <g:render template="/templates/customer_subscription" />
    </script>
		<script type="text/ng-template" id="templates/customer_usages">
      <g:render template="/templates/customer_usages" />
    </script>
		<script type="text/ng-template" id="templates/customer_usage">
      <g:render template="/templates/customer_usage" />
    </script>
		<script type="text/ng-template" id="templates/customer_invoices">
      <g:render template="/templates/customer_invoices" />
    </script>
		<script type="text/ng-template" id="templates/customer_invoice">
      <g:render template="/templates/customer_invoice" />
    </script>
		<script type="text/ng-template" id="templates/customer_transactions">
      <g:render template="/templates/customer_transactions" />
    </script>
		<script type="text/ng-template" id="templates/customer_transaction">
      <g:render template="/templates/customer_transaction" />
    </script>
		<g:javascript library="customer"/>
    <r:script>
      customer.value('config', {
				url : "${resource(file : '/application')}",
        endpoint : "${session.access.customer.endpoint}",
        token : "${session.access.token}"
      })
      angular.bootstrap(document,['customer']);
    </r:script>
  </body>
</html>