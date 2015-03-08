var app = angular.module('firstStation', [])
var pathGetInfo = 'http://localhost/adm58/api/applicant?id='
var pathPostInfo = 'http://localhost/adm58/api/applicant?id='

var helper = {
	'boolToInt': function(data) {
		if (typeof data == 'boolean') {
			return data ? 1 : 0
		} else {
			return data
		}
	}
}
