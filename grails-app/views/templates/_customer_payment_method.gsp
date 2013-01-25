<div class="well">
  <form data-ng-submit="save()">
		<fieldset>
			<legend></legend>
				<div class="row-fluid">
					<div class="span12">
						<label>Card Holder Name</label>
						<input type="text" class="span12" data-ng-model="item.holder" />
					</div>
				</div>
				<div class="row-fluid">
					<div class="span6">
						<label>Card Number</label>
						<input type="text" class="span12" data-ng-model="item.number" />
					</div>
					<div class="span3">
						<label>Expiration (MM/YYYY)</label>
						<input type="text" class="span12" data-ng-model="item.expiration" />
					</div>
					<div class="span3">
						<label>CVV</label>
						<input type="text" class="span12" data-ng-model="item.cvv" />
					</div>
				</div>
		</fieldset>
		<div class="row-fluid">
      <div class="pull-left">
        <a href="#/customers/{{params.customer}}/payment-methods">Cancel</a>
      </div>
      <div class="pull-right">
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
	</form>
</div>