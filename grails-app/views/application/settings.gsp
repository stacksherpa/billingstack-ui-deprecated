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
				  <h1>Merchant <small></small></h1>
				</div>
        <div class="row">
          <div class="span3">
            <div class="well">
              <ul class="nav">
                <li><a href="#/"><i class="icon-pencil"></i> Edit</a></li>
                <li><a href="#/settings"><i class="icon-cog"></i> Settings</a></li>
                <li><a href="#/users"><i class="icon-user"></i> Users</a></li>
                <li><a href="#/payment-gateways"><i class="icon-leaf"></i> Payment Gateways</a></li>
                <%--
                <li><a href="#/providers"><i class="icon-briefcase"></i> Providers</a></li>
                --%>
              </ul>
            </div>
          </div>
          <div class="span9" ng-view></div>
        </div>
      </div>
    </div>
    <div class='notifications top-right'></div>
		<script type="text/ng-template" id="templates/merchant">
      <g:render template="/templates/merchant" />
    </script>
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
    <g:javascript library="settings"/>
    <r:script>
      settings.value('config', {
        url : "${resource(file : '/application')}",
        endpoint : "${session.access.merchant.endpoint}",
        token : "${session.access.token}"
      })
      angular.bootstrap(document,['settings']);
    </r:script>
  </body>
</html>