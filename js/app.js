var app = angular.module('zypper.actone', ['ui.bootstrap']);


app.controller('TabsDemoCtrl', function ($scope, $window) {
  $scope.tabs = [
    { title:'Dynamic Title 1', 
    	content:'Dynamic content 1',
    	sounds:[{title:'rain', file:'rain.mp3', effect:'fadeIn'},
    			{title:'trueno', file:'trueno.mp3', effect:'fadeIn'}
    	 ] },
    { title:'Dynamic Title 2', 
      content:'Dynamic content 2',
      sounds:[{title:'entrada', file:'entrada.mp3', effect:'fadeIn'},
    		  {title:'salida', file:'salida.mp3', effect:'fadeIn'}
      ]
    }
  ];

  $scope.tabs[0].active=true;

  		$scope.addTab = function(){
            $scope.counter++;
            $scope.tabs.push({title:"Unknow",content:'Any Content'});
            $scope.tabs[$scope.tabs.length - 1].active=true; //set the newly added tab active. 
        };
  /** Function to delete a tab **/
        $scope.deleteTab = function(index){
            $scope.tabs.splice(index,1); //remove the object from the array based on index
            $scope.tabs[0].active=true;
        };


        $scope.removeTab = function (index) {
            $scope.tabs.splice(index,1);
        };
});