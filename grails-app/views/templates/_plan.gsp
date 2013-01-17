<div class="page-header">
  <h1>Plan <small></small></h1>
</div>
<form data-ng-submit="save()">
<ul class="nav nav-tabs" id="myTab">
  <li class="active"><a href="#general" data-toggle="tab">General</a></li>
  <li><a href="#products" data-toggle="tab">Products</a></li>
  <li><a href="#pricing" data-toggle="tab">Pricing</a></li>
  <li><a href="#quotas" data-toggle="tab">Quotas</a></li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="general">
      <fieldset>
        <div class="row-fluid">
          <div class="span12">
            <label for="name">Name</label>
            <input id="name" type="text" data-ng-model="item.name" class="span12" />
          </div>
        </div>
        <div class="row-fluid">
          <div class="span12">
            <label for="title">Provider</label>
            <input id="title" type="text" data-ng-model="item.provider" class="span12" />
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
  </div>
  <div class="tab-pane" id="products">
    <table class="table">
      <thead>
        <th class="fit"><br /></th>
        <th>Name</th>
				<th>Source</th>
				<th>Type</th>
				<th>Measure</th>
				<th>Description</th>
      </thead>
      <tbody>
        <tr data-ng-repeat="product in products">
          <td><input type="checkbox" ng-model="product.checked" ng-click="refreshProduct(product)" ng-checked="containsProduct(product)"/></td>
          <td>{{product.name}}</td>
					<td>{{product.source}}</td>
					<td>{{product.type}}</td>
					<td>{{product.measure}}</td>
					<td>{{product.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="tab-pane" id="pricing">
    <div data-ng-repeat="product in item.products">
      <h2>{{product.name}}</h2>
      <div class="row-fluid">
        <div class="span4">
          <label>Type</label>
          <select data-ng-model="type" data-ng-options="type for type in ['fixed','volume-range','time-range']"></select>
          <button class="btn" data-ng-click="addRule($event, product, {type : type})" style="margin-bottom: 10px">Add Rule</button>
        </div>
        <div class="span8">
          <h3>Rules</h3>
          <div data-ng-repeat="rule in product.rules" class="well">
            <h4>{{rule.type}}</h4>
            <div data-ng-switch="rule.type">
              <div data-ng-switch-when="volume-range">
                <table class="table table-stripped">
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Price</th>
                      <th class="fit"><br /></th>
                    </tr>
                    <tr>
                      <td><input type="number" data-ng-model="range.from" class="span12"/></td>

                      <td><input type="number" data-ng-model="range.to" class="span12"/></td>

                      <td><input type="number" data-ng-model="range.price" class="span12"/></td>

                      <td><a class="btn btn-small" data-ng-click="addRange(rule,range)"><i class="icon-plus-sign"></i></a></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-ng-repeat="range in rule.ranges">

                      <td><input type="number" data-ng-model="range.from" class="span12"/></td>

                      <td><input type="number" data-ng-model="range.to" class="span12"/></td>

                      <td><input type="number" data-ng-model="range.price" class="span12"/></td>

                      <td><a class="btn btn-small" data-ng-click="removeRange(rule, $index)"><i class="icon-minus-sign"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div data-ng-switch-when="time-range">
                <table class="table table-stripped">
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Price</th>
                      <th class="fit"><br /></th>
                    </tr>
                    <tr>
                      <td><input type="text" data-ng-model="range.from" class="span12" /></td>

                      <td><input type="text" data-ng-model="range.to" class="span12" /></td>

                      <td><input type="number" data-ng-model="range.price" class="span12" /></td>

                      <td><a class="btn btn-small" data-ng-click="addRange(rule,range)"><i class="icon-plus-sign"></i></a></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-ng-repeat="range in rule.ranges">

                      <td><input type="text" data-ng-model="range.from" class="span12" /></td>

                      <td><input type="text" data-ng-model="range.to" class="span12" /></td>

                      <td><input type="number" data-ng-model="range.price" class="span12" /></td>

                      <td><a class="btn btn-small" data-ng-click="removeRange(rule, $index)"><i class="icon-minus-sign"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div data-ng-switch-default="">
                <label>Price <input type="number" data-ng-model="rule.price"/></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
  <div class="tab-pane" id="quotas">
    <table class="table table-stripped">
      <tr ng-repeat="quota in item.metadata.quotas">
        <th scope="row">{{quota.label}}</th>
        <td><input type="number" ng-model="quota.value"></td>
      </tr>
    </table>
  </div>
</div>
<div class="row-fluid">
  <div class="pull-left">
    <a href="#/plans">Cancel</a>
  </div>
  <div class="pull-right">
    <button class="btn btn-primary">Save</button>
  </div>
</div>
</form>