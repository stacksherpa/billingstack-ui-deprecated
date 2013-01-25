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
    </fieldset>
		<fieldset>
      <legend>Configuration</legend>
      <div class="row-fluid">
        <div class="span12">
          <label for="merchant_id">Merchant ID</label>
          <input id="merchant_id" type="text" data-ng-model="item.metadata.merchant_id" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="environment">Environment</label>
          <input id="environment" type="text" data-ng-model="item.metadata.environment" class="span12" />
        </div>
      </div>
      <div class="row-fluid">
        <div class="span12">
          <label for="public_key">Public Key</label>
          <input id="public_key" type="text" data-ng-model="item.metadata.public_key" class="span12" />
        </div>
      </div>
			<div class="row-fluid">
        <div class="span12">
          <label for="private_key">Private Key</label>
          <input id="private_key" type="text" data-ng-model="item.metadata.private_key" class="span12" />
        </div>
      </div>
    </fieldset>
    <div class="row-fluid">
      <div class="pull-left">
        <a href="#/payment-gateways">Cancel</a>
      </div>
      <div class="pull-right">
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </form>
</div>