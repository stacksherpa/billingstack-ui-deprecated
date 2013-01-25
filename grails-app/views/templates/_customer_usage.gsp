<div class="well">
  <form data-ng-submit="save()">
    <fieldset>
      <legend>Usage</legend>
      <div class="row-fluid">
        <div class="span12">
          <label for="provider">Provider</label>
          <input id="provider" type="text" data-ng-model="item.provider" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="resource">Resource</label>
          <input id="resource" type="text" data-ng-model="item.resource" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="product">Product</label>
          <input id="product" type="text" data-ng-model="item.product.name" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="volume">Volume</label>
          <input id="volume" type="text" data-ng-model="item.value" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="measure">Measure</label>
          <input id="measure" type="text" data-ng-model="item.measure" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="pull-left">
          <a href="#/customers/{{params.customer}}/subscriptions/{{params.subscriptons}}">Cancel</a>
        </div>
        <div class="pull-right">
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>