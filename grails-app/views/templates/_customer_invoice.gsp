<div class="page-header">
  <h1>Customer <small>Invoice</small></h1>
</div>
<g:applyLayout name="customer">
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
	      <div class="row-fluid">
	        <div class="pull-left">
	          <a href="#/customers/{{params.customer}}/invoices">Cancel</a>
	        </div>
	        <div class="pull-right">
	          <button class="btn btn-primary">Save</button>
	        </div>
	      </div>
	    </fieldset>
	  </form>
  </div>
</g:applyLayout>