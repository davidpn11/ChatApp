var firebase = require("firebase");

module.exports = {
    template: require('./navHeader.html'),   
    controller: navHeaderController,    
    controllerAs: 'ctrl'
}

function navHeaderController(loginService) {
    this.userName = "";
    this.$onInit = function () {
        loginService.getUserData()
        .then((response) => {
            console.log(response);            
            this.user = response;
            console.log(this.user.displayName);
            this.userName = this.user.displayName;
        })
        .catch((error) => {
            console.log(error);
        });  
      };   
         


    this.signOut = () => {
        console.log('signing out...')
        loginService.userSignOut();
    };
}