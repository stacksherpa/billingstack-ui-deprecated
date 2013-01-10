<div class="row">
	<div class="span3">
		<div class="well">
			<ul class="nav">
				<li><a href="#/customers/{{params.customer}}"><i class="icon-pencil"></i> Edit</a></li>
				<li><a href="#/customers/{{params.customer}}/users"><i class="icon-user"></i> Users</a></li>
				<li><a href="#/customers/{{params.customer}}/payment-methods"><i class="icon-certificate"></i> Payment Methods</a></li>
				<li><a href="#/customers/{{params.customer}}/subscriptions"><i class="icon-leaf"></i> Subscriptions</a></li>
				<li><a href="#/customers/{{params.customer}}/usages"><i class="icon-list"></i> Usage</a></li>
				<li><a href="#/customers/{{params.customer}}/invoices"><i class="icon-briefcase"></i> Invoices</a></li>
				<li><a href="#/customers/{{params.customer}}/transactions"><i class="icon-list"></i> Transactions</a></li>
			</ul>
		</div>
	</div>
	<div class="span9">
		<g:layoutBody />
	</div>
</div>