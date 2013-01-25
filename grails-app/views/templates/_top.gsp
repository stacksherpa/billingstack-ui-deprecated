<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <a data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <a href="#" class="brand">BillingStack</a>
      <div class="nav-collapse collapse">
        <ul class="nav pull-right">
          <li><a href="${createLink(action : 'settings')}#/"><i class="icon-cog"></i> Settings</a></li>
          <li><a href="${createLink(controller : 'application', action : 'signOut')}"><i class="icon-off"></i> Sign Out</a></li>
        </ul>
        <ul class="nav">
          <li><a href="${createLink(action : 'merchant')}#/customers">Customers</a></li>
          <li><a href="${createLink(action : 'merchant')}#/products">Products</a></li>
          <li><a href="${createLink(action : 'merchant')}#/plans">Plans</a></li>
          <li><a href="${createLink(action : 'merchant')}#/subscriptions">Subscriptions</a></li>
          <li><a href="${createLink(action : 'merchant')}#/invoices">Invoices</a></li>
          <li><a href="${createLink(action : 'merchant')}#/transactions">Transactions</a></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </div>
</div>