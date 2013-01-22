package com.billingstack

import com.ning.http.client.*

class ApplicationController {
  
    def grailsApplication

    def http = new AsyncHttpClient()

    def signUp() {
      if(request.post) {
        try {
          def builder = new groovy.json.JsonBuilder()
          def slurper = new groovy.json.JsonSlurper()
          builder.call([
            name : params.name,
            language : params.language,
            currency : params.currency,
            user :[
              username : params.user.username,
              password : params.user.password
            ]
          ])
          def response = http.preparePost(grailsApplication.config.billingstack.endpoint+'/merchants')
            .setBody(builder.toString())
            .execute()
            .get()
          slurper.parseText(response.responseBody)
          redirect(action : "signIn")
        } catch(e) {
          flash.error = e.message
        }
      }
    }
    
    def signIn() {
      if(request.post) {
        try {
          def builder = new groovy.json.JsonBuilder()
          def slurper = new groovy.json.JsonSlurper()
          builder.call([
              merchant : params.merchant,
              customer : params.customer,
              username : params.username,
              password : params.password
          ])
          def response = http.preparePost(grailsApplication.config.billingstack.endpoint+'/authenticate')
            .setBody(builder.toString())
            .execute()
            .get()
            println response.responseBody
          if(response.statusCode == 200) {
            def access = slurper.parseText(response.responseBody)
						if(access.customer) {
							redirect(action : "customer", params : [endpoint : access.endpoint, token : access.token.id])
						} else {
							redirect(action : "merchant", params : [endpoint : access.endpoint, token : access.token.id])
						}
          } else {
            throw new RuntimeException(slurper.parseText(response.responseBody).error)
          }
        } catch(e) {
          flash.error = e.message
        }
      }
    }
    
    def signOut() {
      redirect(action : "signIn")
    }

		def merchant() {
			
		}
		
		def customer() {
			
		}

}
