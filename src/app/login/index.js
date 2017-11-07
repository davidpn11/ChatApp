import angular from 'angular'
import firebase from 'firebase/app';

export default angular.module('login',[])
    .controller('loginController',loginController)
    .name
    

function loginController($firebaseObject, $state) {    

    let ctrl = this;
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    this.googleSignIn = () => {
        console.log('sign');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(user.displayName, user.photoURL, user.email);

            // const root = firebase.database().ref().child('Contact');
            // this.object = $firebaseObject(root);
            // console.log(token,user,this.object);
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

    firebase.auth().onAuthStateChanged( firebaseUser => {
        console.log('chamada');
        if(firebaseUser) {
            console.log('redirecting');
            $state.go('/');
            // ctrl.currentUser = firebaseUser;
        }
    });
}
