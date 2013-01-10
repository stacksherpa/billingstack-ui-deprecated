<div class="page-header">
  <h1>Subscription <small></small></h1>
</div>
<div class="well">
  <form data-ng-submit="save()">
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
			<table class="table table-stripped plans">
			  <thead>
			    <tr>
			      <th class="fit"><br /></th>
			      <th>Name</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr data-ng-repeat="item in plans">
			      <td><input type="radio" /></td>
			      <td>{{item.title}}</td>
			    </tr>
			  </tbody>
			</table>
      <div class="row-fluid">
        <div class="pull-left">
          <a href="#/subscriptions">Cancel</a>
        </div>
        <div class="pull-right">
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>