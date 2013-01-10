<div class="page-header">
  <h1>Subscription <small></small></h1>
</div>
<div class="well">
  <form data-ng-submit="save()">
    <fieldset>
      <legend>General</legend>
			<div class="row-fluid">
        <div class="span12">
          <label for="payment_method">Payment Method ID</label>
          <input id="payment_method" type="text" data-ng-model="item.credit_card.id" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="billing_day">Billing Day</label>
          <input id="billing_day" type="text" data-ng-model="item.billing_day" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="resource">Resource</label>
          <input id="resource" type="text" data-ng-model="item.resource" class="span12" />
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
          <tr data-ng-repeat="plan in plans">
            <td><input type="radio" data-ng-model="item.plan.id" value="{{plan.id}}"/></td>
            <td>{{plan.title}}</td>
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