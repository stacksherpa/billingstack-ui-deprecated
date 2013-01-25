<div class="well">
  <form data-ng-submit="save()">
		<fieldset>
      <legend>Settings</legend>
			<div class="row-fluid">
        <label class="checkbox"><input type="checkbox" data-ng-model="item.push_notifications_enabled" /> Enable Push Notifications</label>
      </div>
      <div class="row-fluid">
        <label for="push_notifications_endpoint">Push Notifications Endpoint</label>
        <input id="push_notifications_endpoint" type="text" data-ng-model="item.push_notifications_endpoint" class="span12" />
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