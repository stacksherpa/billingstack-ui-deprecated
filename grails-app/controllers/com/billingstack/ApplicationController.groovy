package com.billingstack

import com.ning.http.client.*

class ApplicationController {
	
		def grailsApplication

		def http = new AsyncHttpClient()

    def signUp() {
      if(request.post) {
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
      }
    }
    
    def signIn() {
      if(request.post) {
				def builder = new groovy.json.JsonBuilder()
				def slurper = new groovy.json.JsonSlurper()
        builder.call([
						username : params.username,
						password : params.password
				])
				def response = http.preparePost(grailsApplication.config.billingstack.endpoint+'/authenticate')
					.setBody(builder.toString())
					.execute()
					.get()
				session.access = slurper.parseText(response.responseBody)
				println session.access
        redirect(controller : "merchant")
      }
    }
    
    def signOut() {
      redirect(action : "signIn")
    }

}
