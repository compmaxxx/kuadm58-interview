var app = angular.module('station', [])

var Station = {
	1: {
		'title': 'STATION 1 ลงทะเบียนตรวจเอกสาร',
		'document_pass': 'true',
	},
	2: {
		'title': 'STATION 2 ตรวจสอบคุณสมบัติ',
		'gpa_pass': 'true',
		'study_plan_pass': 'true',
	},
	3: {
		'title': 'STATION 3 สอบสัมภาษณ์',
		'interview_pass': 'true'
	},
}

var Config = {
	'STATION': 3,
	'PATH_GET_INFO': 'http://localhost/regis/api/applicant?id=',
	'PATH_POST_INFO': 'http://localhost/regis/api/applicant?id='
}

// var pathGetInfo = 'http://localhost/regis/api/applicant?id='
// var pathPostInfo = 'http://localhost/regis/api/applicant?id='

var helper = {
	'boolToInt': function(data) {
		if (typeof data == 'boolean')
			return data ? 1 : 0
		else if (typeof data == 'string') {
			if (data == '1')
				return 1
			else if (data == 'true')
				return 1
			else
				return 0

		} else
			return 0

	},
	'decodeNationalID': function(barcode) {
		if (barcode.length <= 13) {
			return barcode.trim()
		} else {
			return barcode.trim().substr(2, 13)
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
