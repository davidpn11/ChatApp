let firebase = require("firebase");

module.exports = {
    template: require('./contactsList.html'),   
    controller: contactsController,    
    controllerAs: 'ctrl',  
}

function contactsController($firebaseObject, loginService, $timeout) {
    let ctrl = this;
    this.filter = "";
    this.allContacts = [];
    this.contacts = this.allContacts;      
    this.currentUser = 

    this.$onInit = function () {
        loginService.getUserData()
        .then((response) => {
            ctrl.currentUser = {
                uid : response.uid,
                userName: response.displayName,
                profile_picture : response.photoURL
            };

            firebase.database().ref('Contacts/' + response.uid).set({
                uid : response.uid,
                userName: response.displayName,
                profile_picture : response.photoURL
              });
        })
        .catch((error) => {
            console.log(error);
        });  
      }; 
    
    const contactsRef = firebase.database().ref().child('Contacts');
    
    contactsRef.on('child_added', function(data) {
        $timeout(() => {
            if(ctrl.currentUser.uid != data.val().uid) {
                let user = {};
                user.uid = data.val().uid;
                user.userName = data.val().userName;
                user.profilePicture = data.val().profile_picture;
                ctrl.contacts.push(user);
                console.log(data.key, data.val());
            }
        },100);        
      });

       
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

    
}