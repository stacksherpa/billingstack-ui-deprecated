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
    <script type="text/ng-template" id="templates/customers">
      <g:render template="/templates/customers" />
    </script>
    <script type="text/ng-template" id="templates/products">
      <g:render template="/templates/products" />
    </script>
    <script type="text/ng-template" id="templates/plans">
      <g:render template="/templates/plans" />
    </script>
    <script type="text/ng-template" id="templates/subscriptions">
      <g:render template="/templates/subscriptions" />
    </script>
    <script type="text/ng-template" id="templates/invoices">
      <g:render template="/templates/invoices" />
    </script>
    <script type="text/ng-template" id="templates/transactions">
      <g:render template="/templates/transactions" />
    </script>
    <r:script>
      merchant.value('config', {
        endpoint : "${session.access.endpoint}",
        token : "${session.access.token}"
      })
      angular.bootstrap(document,['merchant']);
    </r:script>
  </body>
</html>