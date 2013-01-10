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
          <fieldset>
            <legend>General</legend>
            <div class="row-fluid">
              <div class="span12">
                <label for="name">Name</label>
                <input id="name" type="text" data-ng-model="item.name" class="span12" />
              </div>
            </div>
            <div class="row-fluid">
              <div class="span12">
                <label for="title">Title</label>
                <input id="title" type="text" data-ng-model="item.title" class="span12" />
              </div>
            </div>
            <div class="row-fluid">
              <div class="span12">
                <label for="description">Description</label>
                <textarea id="description" data-ng-model="item.description" class="span12"></textarea>
              </div>
            </div>
            <div class="row-fluid">
              <div class="pull-left">
                <a href="${createLink(controller : 'application', action : 'signUp')}">Cancel</a>
              </div>
              <div class="pull-right">
                <button class="btn btn-primary">Sign In</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </body>
</html>