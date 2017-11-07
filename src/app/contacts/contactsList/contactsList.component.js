var firebase = require("firebase");

module.exports = {
    template: require('./contactsList.html'),   
    controller: contactsController,    
    controllerAs: 'ctrl',  
}

function contactsController($firebaseObject) {
    console.log('carregou contactsController');
    this.filter = "";
    this.allContacts = [{'name':'David'}, {'name':'Mariana'}, {'name':'Carol'}, {'name':'Caio'}];
    this.contacts = this.allContacts;

   
    
    this.makeSearch = () => {
        console.log(this.filter);        
        if(this.filter != undefined && this.filter != "") {
            this.contacts = [];
            for(var i = 0; i < this.allContacts.length; i++) {
                let contact = this.allContacts[i];
                if(contact.name.toLowerCase().indexOf(this.filter) !== -1) {
                    this.contacts.push(contact);
                }
            }
        }
        else {
            this.contacts = this.allContacts;
        }
    };


    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();

    this.signIn = () => {
        console.log('sign');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

             const root = firebase.database().ref().child('Contact');
            this.object = $firebaseObject(root);
            console.log(token,user,this.object);
            // ...
          }).catch(function(error) {
              console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    };
}