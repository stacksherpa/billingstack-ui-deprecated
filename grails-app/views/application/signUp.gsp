<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="billingstack"/>
    <title>BillingStack :: Sign Up</title>
  </head>
  <body>
    <div id="application" class="container">
			<g:if test="${flash.error}">
				<div class="alert alert-error">${flash.error}</div>
			</g:if>
      <div class="well">
        <form action="${createLink(controller : 'application', action : 'signUp')}" method="POST">
          <fieldset>
            <legend>Merchant</legend>
            <div class="row-fluid">
              <div class="span12">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" class="span12" />
              </div>
            </div>
            <div class="row-fluid">
              <div class="span6">
                <label for="title">Language</label>
                <input id="title" type="text" name="language" class="span12" />
              </div>
              <div class="span6">
                <label for="title">Currency</label>
                <input id="title" type="text" name="currency" class="span12" />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>User</legend>
            <div class="row-fluid">
              <label for="name">Username</label>
              <input id="name" type="text" name="user.username" class="span12" />
              <label for="name">Password</label>
              <input id="name" type="password" name="user.password" class="span12" />
              <label for="name">Confirm Password</label>
              <input id="name" type="password" name="user.password2" class="span12" />
            </div>
          </fieldset>
          <div class="row-fluid">
            <div class="pull-left">
              <a href="${createLink(controller : 'application', action : 'signIn')}">Cancel</a>
            </div>
            <div class="pull-right">
              <button class="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>