<div class="page-header">
  <h1>Merchant <small>Settings</small></h1>
</div>
<g:applyLayout name="settings">
<div class="well">
  <form data-ng-submit="save()">
		<fieldset>
      <legend>Settings</legend>
      <div class="row-fluid">
        <label for="username">Push Notifications Endpoint</label>
        <input id="username" type="text" data-ng-model="item.push_notifications_endpoint" class="span12" />
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
</g:applyLayout>