app.controller('barcodeController', function($scope, infoService) {
	function reset_barcode() {
			$scope.barcode = ''
		}
		// STATION 1 //////////////////////////////////////

	$scope.show_modal_station1 = function() {
		$scope.document_pass = Station[1].document_pass
		$("#station1_modal").modal('show')
	}

	$scope.hide_modal_station1 = function() {
		$("#station1_modal").modal('hide')
		reset_barcode()
	}

	$scope.submit_station1 = function() {
		infoService.getInfo($scope.barcode).then(function(info) {
			// Handle State Error ////////////////////////
			if (info.result == 'not-found') {
				// Not Found
			} else {
				if (info.result == 'ok') {
					if (info.state == 3) {
						// Not pass and Go home
					}

					if (info.state != 0) {
						if (info.state >= 0 && info.state <= 2) {
							// Go to station state+1
						}
					}
				}

			}
			//END Handle State Error ////////////////////////

			$scope.info = info
			$scope.show_modal_station1()
		})

	}

	$scope.confirm_station1 = function() {
		var document_pass = $scope.document_pass
			// console.log($scope.info.n)
		infoService.updateStation1($scope.info.national_id, document_pass)
		$scope.hide_modal_station1()
	}

	// END STATION 1 //////////////////////////////////////


	// STATION 2 //////////////////////////////////////

	$scope.show_modal_station2 = function() {
		$scope.gpa_pass = Station[2].gpa_pass
		$scope.study_plan_pass = Station[2].study_plan_pass
		$("#station2_modal").modal('show')
	}

	$scope.hide_modal_station2 = function() {
		$("#station2_modal").modal('hide')
		reset_barcode()
	}

	$scope.submit_station2 = function() {
		infoService.getInfo($scope.barcode).then(function(info) {
			$scope.info = info
				// console.log(info)
		})
		$scope.show_modal_station2()
	}

	$scope.confirm_station2 = function() {
		var gpa_pass = $scope.gpa_pass
		var study_plan_pass = $scope.study_plan_pass
			// console.log($scope.info.n)
		infoService.updateStation2($scope.info.national_id, gpa_pass,
			study_plan_pass)
		$scope.hide_modal_station2()
	}

	// END STATION 2 //////////////////////////////////////


	// STATION 3 //////////////////////////////////////

	$scope.show_modal_station3 = function() {
		$scope.interview_pass = Station[3].interview_pass
		$("#station3_modal").modal('show')
	}

	$scope.hide_modal_station3 = function() {
		$("#station3_modal").modal('hide')
		reset_barcode()
	}

	$scope.submit_station3 = function() {
		infoService.getInfo($scope.barcode).then(function(info) {
			$scope.info = info
				// console.log(info)
		})
		$scope.show_modal_station3()
	}

	$scope.confirm_station3 = function() {
		var interview_pass = $scope.interview_pass
			// console.log($scope.info.n)
		infoService.updateStation3($scope.info.national_id, interview_pass)
		$scope.hide_modal_station3()
	}

	// END STATION 3 //////////////////////////////////////


	$scope.submit = function() {
		if (Config.STATION == 1) {
			$scope.submit_station1()
		} else if (Config.STATION == 2) {
			$scope.submit_station2()
		} else if (Config.STATION == 3) {
			$scope.submit_station3()
		}
	}


})


app.controller('headerController', function($scope) {
	$scope.header = {
		'title': Station[Config.STATION].title
	}
})
