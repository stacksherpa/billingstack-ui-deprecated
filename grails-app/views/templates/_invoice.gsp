<div class="page-header">
	<h1>Invoice <small></small></h1>
</div>
<div class="well">
  <div class="well">
    <form data-ng-submit="save()">
      <fieldset>
        <div class="row-fluid">
          <div class="span8">
            <div class="row-fluid">
              <div class="span6">
              <label for="email">Email</label>
              <input id="email" type="text" data-ng-model="email" class="span12">
              </div>
              <div class="span6"> 
              <label for="contact">Contact Name</label>
              <input id="contact" type="text" data-ng-model="contact" class="span12">
              </div>
            </div>
          </div>
          <div class="span4">
            <label for="number">Invoice Number</label>
            <input id="number" type="text" data-ng-model="item.number" class="span12">
            <label for="issued">Date of Issue</label>
            <input id="issued" type="text" data-ng-model="item.issued"  class="span12">
            <label for="discount">Discount</label>
            <input id="discount" type="text" data-ng-model="item.discount"  class="span12">
          </div>
        </div>
      </fieldset>
      <fieldset class="row-fluid">
        <table class="table invE_table">
          <thead>
              <tr>
                  <th></th>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Unit Cost ($)</th>
                  <th>Qty</th>
                  <th>Tax (%)</th>
                  <th>Total ($)</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td class="inv_clone_row"><i class="icon-plus inv_clone_btn"></i></td>
                  <td><input type="text" data-ng-model="line.item" class="span12"></td>
                  <td><input type="text" data-ng-model="line.description" class="span12"></td>
                  <td><input type="text" data-ng-model="line.price" class="span12"></td>
                  <td><input type="text" data-ng-model="line.quantity" class="span12"></td>
                  <td><input type="text" data-ng-model="line.tax" class="span12"></td>
                  <td><input type="text" data-ng-model="line.total" class="span12" readonly=""></td>
              </tr>
              <tr>
                  <td class="inv_clone_row"><i class="icon-minus inv_remove_btn"></i></td>
                  <td><input type="text" data-ng-model="line.item" class="span12"></td>
                  <td><input type="text" data-ng-model="line.description" class="span12"></td>
                  <td><input type="text" data-ng-model="line.price" class="span12"></td>
                  <td><input type="text" data-ng-model="line.quantity" class="span12"></td>
                  <td><input type="text" data-ng-model="line.tax" class="span12"></td>
                  <td><input type="text" data-ng-model="line.total" class="span12" readonly=""></td>
              </tr><tr class="last_row">
                  <td colspan="5">&nbsp;</td>
                  <td colspan="2">
                      <p class="clearfix">Subtotal: <span class="subtotal">$<span>2.00</span></span></p>
                      <p>Tax: <span class="tax">$<span>0.06</span></span></p>
                      <p>Discount: <span class="discount">$<span>0.00</span></span></p>
                      <p><strong>Total: <span class="total">$<span>1.94</span></span></strong></p>
                  </td>
              </tr>
          </tbody>
        </table>
      </fieldset>
      <div class="row-fluid">
        <div class="pull-left">
          <a href="#/invoices">Cancel</a>
        </div>
        <div class="pull-right">
          <button class="btn btn-primary">Save</button>
        </div>
      </div>
    </form>
  </div>
</div>