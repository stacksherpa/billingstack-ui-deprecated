h1. BillingStack UI

h2. git clone http://github.com/stacksherpa/billingstack

BillingStack API runs in 9090 by default

You can change the port using -Dgrails.server.port.http

$grails -Dgrails.server.port.http=9191 run-app

h2. git clone http://github.com/stacksherpa/billingstack-ui

BillingStack UI runs in 8080 by default

If you changed grails.server.host OR grails.server.port.http you will need to
change the billingstack.endpoint:

$grails -Dbillingstack.endpoint=http://localhost:9191/billingstack run-app