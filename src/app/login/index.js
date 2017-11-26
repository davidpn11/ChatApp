import angular from 'angular'
import firebase from 'firebase/app';

export default angular.module('login',[])
    .controller('loginController',loginController)
    .service('loginService', loginService)
    .name
    
function loginService($firebaseObject, $state, $q) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    var userData = {};


    this.googleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;            
          }).catch(function(error) {
              console.log(error);
          });
    };


    this.getUserData = () => {
        return $q((resolve, reject) => {
            setTimeout(() => {                
                firebase.auth().onAuthStateChanged( firebaseUser => {
                    if (firebaseUser) {                        
                        resolve(firebaseUser);
                    } else {                
                        reject(Error('No User'));
                    }
                });
            },1000);
          });
    };

    this.userSignOut = () => {
        console.log('signing out...');
        userData = {};
        firebase.auth().signOut();
        $state.go('/login');    
    };

    firebase.auth().onAuthStateChanged( firebaseUser => {
        if(firebaseUser) {
            userData = firebaseUser;
            $state.go('/');
        }
    });
}
    

function loginController(loginService) {    

    let ctrl = this;
    this.signIn = () => {
        loginService.googleSignIn();
    };
}
