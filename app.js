var app = angular.module('station', [])
var pathGetInfo = 'http://localhost/regis/api/applicant?id='
var pathPostInfo = 'http://localhost/regis/api/applicant?id='

var helper = {
  'boolToInt': function(data) {
    if (typeof data == 'boolean') {
      return data ? 1 : 0
    } else {
      return data
    }
  }
}

app.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.ngEnter);
        })

        event.preventDefault();
      }
    })
  }
})
