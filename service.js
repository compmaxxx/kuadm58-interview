app.service('infoService', function($http, $q) {
	var STATE_INITIAL = 0;
	var STATE_DOCUMENT_VERIFIED = 1;
	var STATE_EDU_DOC_VERIFIED = 2;
	var STATE_INTERVIEWED = 3;

	this.getInfo = function(national_id) {
		var deferred = $q.defer()

		$http.get(Config.PATH_GET_INFO + national_id).success(function(data) {
			deferred.resolve(data)
		})

		return deferred.promise
	}

	this.updateStation1 = function(document_complete) {
		var deferred = $q.defer()

		$http.post(Config.PATH_POST_INFO + national_id, {
			'document': helper.boolToInt(document_complete),
		}).
		success(function(data) {
			deferred.resolve(data)
		})

		return deferred.promise
	}

	this.updateStation2 = function(national_id, gpa, study_plan) {
		var deferred = $q.defer()

		$http.post(Config.PATH_POST_INFO + national_id, {
			'is_study_plans_verified': helper.boolToInt(study_plan),
			'is_gpa_verified': helper.boolToInt(gpa)
		}).
		success(function(data) {
			deferred.resolve(data)
		})

		return deferred.promise
	}

	this.updateStation3 = function(pass_all) {
		var deferred = $q.defer()

		$http.post(Config.PATH_POST_INFO + national_id, {
			'is_passed': helper.boolToInt(pass_all)
		}).
		success(function(data) {
			deferred.resolve(data)
		})

		return deferred.promise
	}
})
