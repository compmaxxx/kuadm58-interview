app.controller('barcodeController', function($scope, infoService) {

  $scope.historys = [];
  $scope.colume_titles = Station[Config.STATION].column;

  function add_history(full_name,major,is_pass){
    $scope.historys.unshift({full_name:full_name,major:major,is_pass:is_pass});
  }

	function reset_barcode() {
		$scope.barcode = ''
	}

	$scope.show_modal_error = function() {
		$('#notification_modal').modal('show')
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
			var error = false
				// Handle State Error ////////////////////////
			if (info.result == 'not-found') {
				// Not found applicant
				error = true
			} else if (info.result == 'ok') {
				if (parseInt(info.state) == 3) {
					// Not pass and Go home
					error = true
				} else if (parseInt(info.state) == 2 && (helper.boolToInt(info.is_study_plan_verified) ==
						0 || helper.boolToInt(info.is_gpa_verified) == 0)) {
					// Get out to home
					error = true
				} else if (parseInt(info.state) == 1 && helper.boolToInt(info
						.documents) == 0) {
					// Run to home and scan again

				}

			}

			//END Handle State Error ////////////////////////
			if (!error) {
				$scope.info = info
				$scope.show_modal_station1()
			}
		})

	}

	$scope.confirm_station1 = function() {
		var document_pass = $scope.document_pass
			// console.log($scope.info.n)
		infoService.updateStation1($scope.info.national_id, document_pass)
    add_history($scope.info.full_name,$scope.info.major.title,document_pass);
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
		var all_pass = 'false';

    if(study_plan_pass=='true' && gpa_pass=='true')
    {
      all_pass = 'true';
    }
    	// console.log($scope.info.n)
		infoService.updateStation2($scope.info.national_id, gpa_pass,study_plan_pass)
    add_history($scope.info.full_name,$scope.info.major.title,all_pass);
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
    add_history($scope.info.full_name,$scope.info.major.title,interview_pass);
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
