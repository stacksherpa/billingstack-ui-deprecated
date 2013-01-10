<div class="page-header">
  <h1>Plans <small></small></h1>
</div>
<div class="well">
  <div class="row-fluid">
    <div class="pull-left">
      <a href="#/plans/create" class="btn btn-primary"><i class="icon-plus icon-white"></i> Create Plan</a>
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
      <td><a href="#/plans/{{item.id}}">{{item.title}}</a></td>
    </tr>
  </tbody>
</table>
<g:render template="/templates/pagination" />