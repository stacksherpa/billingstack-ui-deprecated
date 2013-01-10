package com.billingstack

import com.ning.http.client.*

class ApplicationController {

		def http = new AsyncHttpClient()

    def signUp() {
      if(request.post) {
				def builder = new groovy.json.JsonBuilder()
				def slurper = new groovy.json.JsonSlurper()
				builder.call([
					name : "woorea",
					language : "en",
					currency : "usd",
					user :[
						username : "luis",
						password : "secret0"
					]
				])
				def response = http.preparePost("http://localhost:9090/billingstack/merchants").setBody(builder.toString()).execute().get()
				slurper.parseText(response.responseBody)
				redirect(action : "signIn")
      }
    }
    
    def signIn() {
      if(request.post) {
				def builder = new groovy.json.JsonBuilder()
				def slurper = new groovy.json.JsonSlurper()
        builder.call([
						username : "luis",
						password : "secret0"
				])
				def response = http.preparePost("http://localhost:9090/billingstack/authenticate").setBody(builder.toString()).execute().get()
				session.access = slurper.parseText(response.responseBody)
				println session.access
        redirect(controller : "merchant")
      }
    }
    
    def signOut() {
      redirect(action : "signIn")
    }

}
