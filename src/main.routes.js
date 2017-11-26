import angular from 'angular';
routes.$inject = ['$urlRouterProvider','$stateProvider'];

export default function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url:'/login',
            views: {
                "": {
                    templateUrl: 'src/app/login/login.html',
                }
            }  
        })
        .state('root', {
            url:'/',
            views: {
                "": {
                    templateUrl: 'src/main.html',
                }
            }   
        })
        .state('root.user', {            
            url:':userID',
            views: {
                "": {
                    templateUrl: 'src/app/messages/messages.html',
                }
            }   
        });
        

       
};


