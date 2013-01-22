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
		<script type="text/ng-template" id="templates/settings">
      <g:render template="/templates/settings" />
    </script>
		<script type="text/ng-template" id="templates/payment_gateways">
      <g:render template="/templates/payment_gateways" />
    </script>
		<script type="text/ng-template" id="templates/payment_gateway">
      <g:render template="/templates/payment_gateway" />
    </script>
		<script type="text/ng-template" id="templates/providers">
      <g:render template="/templates/providers" />
    </script>
		<script type="text/ng-template" id="templates/provider">
      <g:render template="/templates/provider" />
    </script>
		<script type="text/ng-template" id="templates/users">
      <g:render template="/templates/users" />
    </script>
		<script type="text/ng-template" id="templates/user">
      <g:render template="/templates/user" />
    </script>
    <script type="text/ng-template" id="templates/products">
      <g:render template="/templates/products" />
    </script>
		<script type="text/ng-template" id="templates/product">
      <g:render template="/templates/product" />
    </script>
    <script type="text/ng-template" id="templates/plans">
      <g:render template="/templates/plans" />
    </script>
		<script type="text/ng-template" id="templates/plan_create">
      <g:render template="/templates/plan_create" />
    </script>
		<script type="text/ng-template" id="templates/plan">
      <g:render template="/templates/plan" />
    </script>
    <script type="text/ng-template" id="templates/subscriptions">
      <g:render template="/templates/subscriptions" />
    </script>
		<script type="text/ng-template" id="templates/subscription">
      <g:render template="/templates/subscription" />
    </script>
    <script type="text/ng-template" id="templates/invoices">
      <g:render template="/templates/invoices" />
    </script>
		<script type="text/ng-template" id="templates/invoice">
      <g:render template="/templates/invoice" />
    </script>
    <script type="text/ng-template" id="templates/transactions">
      <g:render template="/templates/transactions" />
    </script>
		<script type="text/ng-template" id="templates/transaction">
      <g:render template="/templates/transaction" />
    </script>
		<script type="text/ng-template" id="templates/customers">
      <g:render template="/templates/customers" />
    </script>
		<script type="text/ng-template" id="templates/customer_create">
      <g:render template="/templates/customer_create" />
    </script>
		<g:javascript library="merchant"/>
    <r:script>
      merchant.value('config', {
				url : "${resource(file : '/application')}",
        endpoint : "${session.access.merchant.endpoint}",
        token : "${session.access.token}"
      })
      angular.bootstrap(document,['merchant']);
    </r:script>
  </body>
</html>