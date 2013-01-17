<div class="page-header">
  <h1>Products <small></small></h1>
</div>
<div class="well">
  <div class="row-fluid">
    <div class="pull-left">
      <a href="#/products/0" class="btn btn-primary"><i class="icon-plus icon-white"></i> Create Product</a>
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
			<th>Source</th>
			<th>Type</th>
			<th>Measure</th>
			<th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr data-ng-repeat="item in items">
      <td><input type="checkbox" /></td>
      <td><a href="#/products/{{item.id}}">{{item.name}}</a></td>
			<td>{{item.source}}</td>
			<td>{{item.type}}</td>
			<td>{{item.measure}}</td>
			<td>{{item.description}}</td>
    </tr>
  </tbody>
</table>
<g:render template="/templates/pagination" />