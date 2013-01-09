package com.billingstack

class ApplicationController {

    def signUp() {
      if(request.post) {
        redirect(action : "signIn")
      }
    }
    
    def signIn() {
      if(request.post) {
        session.access = [
          token : "secret0",
          endpoint : "http://localhost:9090/billinstack/merchant"
        ]
        redirect(controller : "merchant")
      }
    }
    
    def signOut() {
      redirect(action : "signIn")
    }

}
