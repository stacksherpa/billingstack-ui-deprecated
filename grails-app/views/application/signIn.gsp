<!DOCTYPE html>
<html>
  <head>
    <meta name="layout" content="billingstack"/>
    <title>BillingStack :: Sign In</title>
  </head>
  <body>
    <div id="application" class="container">
      <g:if test="${flash.error}">
        <div class="alert alert-error">${flash.error}</div>
      </g:if>
      <div class="well">
        <form action="${createLink(controller : 'application', action : 'signIn')}" method="POST">
            <fieldset>
            <legend>Sign In</legend>
              <div class="row-fluid">
                <div class="span12">
                  <label for="username">Merchant ID / Name</label>
                  <input id="username" type="text" name="merchant" class="span12" />
                </div>
              </div>
              <div class="row-fluid">
                <div class="span12">
                  <label for="username">Customer ID / Name</label>
                  <input id="username" type="text" name="customer" class="span12" />
                </div>
              </div>
              <div class="row-fluid">
                <div class="span12">
                  <label for="username">Username</label>
                  <input id="username" type="text" name="username" class="span12" />
                </div>
              </div>
              <div class="row-fluid">
                <div class="span12">
                  <label for="password">Password</label>
                  <input id="password" type="password" name="password" class="span12" />
                </div>
              </div>
            </fieldset>
            <div class="row-fluid">
              <div class="pull-left">
                <a href="${createLink(controller : 'application', action : 'signUp')}">Cancel</a>
              </div>
              <div class="pull-right">
                <button class="btn btn-primary">Sign In</button>
              </div>
            </div>
        </form>
      </div>
    </div>
  </body>
</html>