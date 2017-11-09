var firebase = require("firebase");

module.exports = {
    template: require('./contactsList.html'),   
    controller: contactsController,    
    controllerAs: 'ctrl',  
}

function contactsController($firebaseObject) {
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
}