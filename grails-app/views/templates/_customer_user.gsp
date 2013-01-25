<div class="well">
  <form data-ng-submit="save()">
		<fieldset>
      <legend>User</legend>
      <div class="row-fluid">
        <label for="username">Username</label>
        <input id="username" type="text" data-ng-model="item.username" class="span12" />
        <label for="password">Password</label>
        <input id="password" type="password" data-ng-model="item.password" class="span12" />
        <label for="password2">Confirm Password</label>
        <input id="password2" type="password" data-ng-model="item.password2" class="span12" />
      </div>
    </fieldset>
    <div class="row-fluid">
      <div class="pull-left">
        <a href="#/users">Cancel</a>
      </div>
      <div class="pull-right">
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </form>
</div>