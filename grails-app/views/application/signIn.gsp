<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="billingstack"/>
		<title>BillingStack</title>
	</head>
	<body>
		<div id="application" class="container">
			<div class="well">
				<form action="${createLink(controller : 'application', action : 'signIn')}" method="POST">
					<button class="btn btn-primary">Sign In</button>
				</form>
			</div>
		</div>
	</body>
</html>