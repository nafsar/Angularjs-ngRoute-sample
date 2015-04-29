
app.controller("HeaderController",function($location)
{ 
   	
    this.isActive = function (viewLocation) {	
        return viewLocation === $location.path();
    };
    
    
});
