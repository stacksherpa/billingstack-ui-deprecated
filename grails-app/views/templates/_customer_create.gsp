<div class="page-header">
  <h1>Customer <small>Create</small></h1>
</div>
<div class="well">
  <form data-ng-submit="save()">
      <fieldset>
        <legend>Customer</legend>
        <div class="row-fluid">
          <div class="span12">
            <label for="name">Name</label>
            <input id="name" type="text" data-ng-model="item.name" class="span12" />
          </div>
        </div>
        <div class="row-fluid">
          <div class="span6">
            <label for="title">Language</label>
            <input id="title" type="text" data-ng-model="item.language" class="span12" />
          </div>
          <div class="span6">
            <label for="title">Currency</label>
            <input id="title" type="text" data-ng-model="item.currency" class="span12" />
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>User</legend>
        <div class="row-fluid">
          <label for="name">Username</label>
          <input id="name" type="text" data-ng-model="item.user.username" class="span12" />
          <label for="name">Password</label>
          <input id="name" type="password" data-ng-model="item.user.password" class="span12" />
          <label for="name">Confirm Password</label>
          <input id="name" type="password" data-ng-model="item.user.password2" class="span12" />
        </div>
      </fieldset>
      <div class="row-fluid">
        <div class="pull-left">
          <a href="#/customers">Cancel</a>
        </div>
        <div class="pull-right">
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
  </form>
</div>