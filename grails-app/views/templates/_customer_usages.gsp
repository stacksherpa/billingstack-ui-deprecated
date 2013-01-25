<div class="well">
  <div class="row-fluid">
    <div class="pull-right">
      <a data-ng-click="refresh()" class="btn"><i class="icon-refresh"></i> Refresh</a>
    </div>
  </div>
</div>
<table class="table table-stripped">
	<thead>
		<tr>
			<th>Provider</th>
			<th>Resource</th>
			<th>Product</th>
			<th>Volume</th>
			<th>Measure</th>
		</tr>
	</thead>
	<tbody>
		<tr data-ng-repeat="item in items">
			<td>openstack</td>
			<td>tenant:1234</td>
			<td>instance:m1.tiny</td>
			<td>250</td>
			<td>minutes</td>
		</tr>
	</tbody>
</table>
<g:render template="/templates/pagination" />