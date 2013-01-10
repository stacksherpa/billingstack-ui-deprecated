<div class="page-header">
  <h1>Transactions <small></small></h1>
</div>
<div class="well">
  <div class="row-fluid">
    <div class="pull-left">
      
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
      <th>ID</th>
			<th>Invoice</th>
			<th>Amount</th>
			<th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr data-ng-repeat="item in items">
      <td><input type="checkbox" /></td>
      <td><a href="#/customers/{{params.customer}}/transactions/{{item.id}}">{{item.id}}</a></td>
			<td><a href="#/customers/{{params.customer}}/invoices/{{item.invoice.id}}">{{item.invoice.id}}</a></td>
			<td>{{item.amount}}</td>
			<td>{{item.status}}</td>
    </tr>
  </tbody>
</table>
<g:render template="/templates/pagination" />