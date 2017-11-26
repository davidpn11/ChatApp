var firebase = require("firebase");

module.exports = {
    template: require('./navHeader.html'),   
    controller: navHeaderController,    
    controllerAs: 'ctrl'
}

function navHeaderController(loginService, $rootScope) {
    this.targetName = "";
    $rootScope.$on('$stateChangeStart', 
    (event, toState, toParams, fromState, fromParams) => { 
        firebase.database().ref('Contacts/'+ toParams.userID).once('value')
        .then( (snapshot) => {
            this.targetName = snapshot.val().userName;
        });
    })
    
    this.signOut = () => {
        console.log('signing out...')
        loginService.userSignOut();
    };
}