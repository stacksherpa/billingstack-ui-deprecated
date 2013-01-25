<div class="well">
  <form data-ng-submit="save()">
    <fieldset>
      <legend>General</legend>
      <div class="row-fluid">
        <div class="span12">
          <label for="id">Name</label>
          <input id="id" type="text" data-ng-model="item.id" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="invoice">Title</label>
          <input id="invoice" type="text" data-ng-model="item.invoice.id" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="invoice">Amount</label>
          <input id="invoice" type="text" data-ng-model="item.amount" class="span12" />
        </div>
      </div>
			<div class="row-fluid">
        <div class="span12">
          <label for="invoice">Status</label>
          <input id="invoice" type="text" data-ng-model="item.status" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="pull-left">
          <a href="#/customers/{{params.customer}}/transactions">Cancel</a>
        </div>
        <div class="pull-right">
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>