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
    this.contacts = [];

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
    
    contactsRef.on('child_added', (data) => {
        $timeout(() => {
            if(ctrl.currentUser.uid != data.val().uid) {
                let user = {};
                user.uid = data.val().uid;
                user.userName = data.val().userName;
                user.profilePicture = data.val().profile_picture;
                this.contacts.push(user);
                this.allContacts.push(user);
            }
        },100);        
      });

       
    this.makeSearch = () => {
        if(this.filter != undefined && this.filter != "") {
            this.contacts = [];
            this.allContacts.forEach(contact => {
                if(contact.userName.toLowerCase().indexOf(this.filter) !== -1) {
                    this.contacts.push(contact);
                }
            });               
        }
        else {
            this.contacts = this.allContacts;
        }
    };
}