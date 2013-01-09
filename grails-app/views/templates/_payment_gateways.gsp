<div class="page-header">
<h1>Merchant <small>Payment Gateways</small></h1>
</div>
<g:applyLayout name="settings">
  <div class="well">
    <div class="row-fluid">
      <div class="pull-left">
        <a href="#/payment-gateways/0" class="btn btn-primary"><i class="icon-plus icon-white"></i> Create Payment Gateway</a>
      </div>
      <div class="pull-right">
        <a data-ng-click="refresh()" class="btn"><i class="icon-refresh"></i> Refresh</a>
      </div>
    </div>
  </div>
  <table class="table table-stripped">
    <thead>
      <tr>
        <th class="fit"><br /></th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" /></td>
        <td><a href="#/payment-gateways/1">payment-gateway.1</a></td>
      </tr>
    </tbody>
  </table>
  <g:render template="/templates/pagination" />
</g:applyLayout>