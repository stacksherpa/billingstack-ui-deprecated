<div class="page-header">
  <h1>Customer <small>Subscription</small></h1>
</div>
<g:applyLayout name="customer">
<ul class="nav nav-tabs" id="myTab">
	<li class="active"><a href="#subscription" data-toggle="tab">Subscription</a></li>
	<li><a href="#usage" data-toggle="tab">Usage</a></li>
</ul>
<div class="tab-content">
	<div class="tab-pane active" id="subscription">
		<div class="well">
		  <form data-ng-submit="save()">
		    <fieldset>
		      <legend>General</legend>
					<div class="row-fluid">
		        <div class="span12">
		          <label for="payment_method">Payment Method ID</label>
		          <input id="payment_method" type="text" data-ng-model="item.credit_card.id" class="span12" />
		        </div>
		      </div>
		      <div class="row-fluid">
		        <div class="span12">
		          <label for="billing_day">Billing Day</label>
		          <input id="billing_day" type="text" data-ng-model="item.billing_day" class="span12" />
		        </div>
		      </div>
		      <div class="row-fluid">
		        <div class="span12">
		          <label for="resource">Resource</label>
		          <input id="resource" type="text" data-ng-model="item.resource" class="span12" />
		        </div>
		      </div>
		      <table class="table table-stripped plans">
		        <thead>
		          <tr>
		            <th class="fit"><br /></th>
		            <th>Name</th>
		          </tr>
		        </thead>
		        <tbody>
		          <tr data-ng-repeat="plan in plans">
		            <td><input type="radio" data-ng-model="item.plan.id" value="{{plan.id}}"/></td>
		            <td>{{plan.title}}</td>
		          </tr>
		        </tbody>
		      </table>
		      <div class="row-fluid">
		        <div class="pull-left">
		          <a href="#/customers/{{params.customer}}/subscriptions">Cancel</a>
		        </div>
		        <div class="pull-right">
		          <button class="btn btn-primary">Save</button>
		        </div>
		      </div>
		    </fieldset>
		  </form>
		</div>
	</div>
	<div class="tab-pane" id="usage">
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
					<tr>
						<td>openstack</td>
						<td>tenant:1234</td>
						<td>instance:m1.tiny</td>
						<td>250</td>
						<td>minutes</td>
					</tr>
				</tbody>
			</table>
	</div>
</div>
</g:applyLayout>