<div class="page-header">
  <h1>Customer <small>Invoices</small></h1>
</div>
<g:applyLayout name="customer">
  <div class="well">
    <div class="row-fluid">
      <div class="pull-left">
        <a href="#/customers/1/invoices/0" class="btn btn-primary"><i class="icon-plus icon-white"></i> Create Invoice</a>
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
      <tr data-ng-repeat="item in items">
	      <td><input type="checkbox" /></td>
	      <td><a href="#/customers/{{params.customer}}/invoices/{{item.id}}">{{item.title}}</a></td>
	    </tr>
    </tbody>
  </table>
  <g:render template="/templates/pagination" />
</g:applyLayout>