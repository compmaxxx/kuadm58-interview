app.controller('barcodeController', function($scope) {

	function decode_national_id(barcode) {
		return barcode.substr(2, 13)
	}

	// $scope.barcode = '00123456789101199'
	$scope.submit = function() {
		var national_id = decode_national_id($scope.barcode)
		alert(national_id)

	}
})
