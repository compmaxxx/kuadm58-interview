var app = angular.module('station', [])

var Station = {
  1: 'STATION 1 ลงทะเบียนตรวจเอกสาร',
  2: 'STATION 2 ตรวจสอบคุณสมบัติ',
  3: 'STATION 3 สอบสัมภาษณ์'
}

var Config = {
  'STATION': 1,
  'PATH_GET_INFO': 'http://localhost/regis/api/applicant?id=',
  'PATH_POST_INFO': 'http://localhost/regis/api/applicant?id='
}

// var pathGetInfo = 'http://localhost/regis/api/applicant?id='
// var pathPostInfo = 'http://localhost/regis/api/applicant?id='

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

// press keydown and focus
$(document).bind('keydown', function(e) {
  $('#barcode').focus();
});
