<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="billingstack"/>
    <title>BillingStack</title>
  </head>
  <body>
    <div id="merchant" data-ng-controller="BillingStackCtrl">
      <g:render template="/templates/top" />
      <div class="container" ng-view>
      
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
        endpoint : "${params.endpoint}${params.path}",
        token : "${params.token}"
      })
      angular.bootstrap(document,['customer']);
    </r:script>
  </body>
</html>