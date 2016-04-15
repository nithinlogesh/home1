
///referance path ="angular.min.js" />
var myapp= angular.module("mymodule",[]);


var mycontroller = function($scope)
{
    
    $scope.message="angular tutorial";
    
    var employee =
    [ { firstname : "logesh", lastname: "jeeva", age:"28", salary:8000 },
    { firstname : "log", lastname: "jee", age:"26", salary:10000 },
    { firstname : "esh", lastname: "eeva", age:"26", salary:15000 }
    ];      
    $scope.employee= employee;
    
    var country=[ 
          { name: "USA", 
                    cities:[ { name:"washington"},
                        {name:"new york"},
                    ]
                    },
          { name: "INDIA", 
                    cities:[ { name:"Bangalore"},
                        {name:"Chennai"},
                    ]
                    },
    ];
             
    
    
//                   flag:"images/img.jpeg"
               
    
    
   $scope.country = country;
   
  };
    
    
    myapp.controller("mycontrol",mycontroller);
    
  
    
    
    
    
    
    
    
    
    
    
    var scotchApp = angular.module('mymodule', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/public_html/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '/public_html/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '/public_html/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', []);

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });