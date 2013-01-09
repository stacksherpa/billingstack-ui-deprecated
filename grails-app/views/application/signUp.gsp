<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="billingstack"/>
		<title>BillingStack</title>
	</head>
	<body>
		<div id="application" class="container">
			<div class="well">
				<form action="${createLink(controller : 'application', action : 'signUp')}" method="POST">
					<button class="btn btn-primary">Sign Up</button>
				</form>
			</div>
		</div>
	</body>
</html>