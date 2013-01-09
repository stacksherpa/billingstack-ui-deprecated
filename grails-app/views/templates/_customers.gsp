<div class="page-header">
  <h1>Customers <small></small></h1>
</div>
<div class="well">
  <div class="row-fluid">
    <div class="pull-left">
      <a href="#/customers/0" class="btn btn-primary"><i class="icon-plus icon-white"></i> Create Customer</a>
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
      <td><a href="#/customers/1">customer.1</a></td>
    </tr>
  </tbody>
</table>
<g:render template="/templates/pagination" />