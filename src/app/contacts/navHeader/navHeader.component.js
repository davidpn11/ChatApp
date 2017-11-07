var firebase = require("firebase");

module.exports = {
    template: require('./navHeader.html'),   
    controller: navHeaderController,    
    controllerAs: 'ctrl'
}

function navHeaderController($firebaseObject, $state) {
    console.log('carregou navHeaderController');


    this.userSignOut = () => {
        console.log('signing out...');
        firebase.auth().signOut();
        $state.go('/login');
    };
}