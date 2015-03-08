app.controller('barcodeController', function($scope, infoService) {

	function decode_national_id(barcode) {
		return barcode.substr(2, 13)
	}

	function reset_barcode() {
		$scope.barcode = ''
	}

	function show_modal_station1() {
		$("#station1_modal").modal('show')
	}

	function show_modal_station2() {
		$("#station2_modal").modal('show')
	}

	function show_modal_station3() {
		$("#station3_modal").modal('show')
	}
	$scope.submit = function() {
		if (Config.STATION == 1) {
			$scope.submit_station1()
		} else if (Config.STATION == 2) {
			$scope.submit_station2()
		} else if (Config.STATION == 3) {
			$scope.submit_station3()
		}
	}

	$scope.submit_station1 = function() {
		var national_id = decode_national_id($scope.barcode)
		infoService.getInfo(national_id).then(function(info) {
			$scope.info = info
				// console.log(info)
		})
		show_modal_station1();
	}

	$scope.submit_station2 = function() {
		var national_id = decode_national_id($scope.barcode)
		infoService.getInfo(national_id).then(function(info) {
			$scope.info = info
				// console.log(info)
		})
		show_modal_station2();
	}

	$scope.submit_station3 = function() {
		var national_id = decode_national_id($scope.barcode)
		infoService.getInfo(national_id).then(function(info) {
			$scope.info = info
				// console.log(info)
		})
		show_modal_station3();
	}
})


app.controller('headerController', function($scope) {
	$scope.header = {
		'title': Station[Config.STATION]
	}
})
