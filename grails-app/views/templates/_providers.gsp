<div class="well">
  <div class="row-fluid">
    <div class="pull-left">
      <a href="#/providers/0" class="btn btn-primary"><i class="icon-plus icon-white"></i> Create Provider</a>
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
     <td><a href="#/providers/{{item.id}}">{{item.title}}</a></td>
   </tr>
  </tbody>
</table>
<g:render template="/templates/pagination" />