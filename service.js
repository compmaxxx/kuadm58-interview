app.service('infoService', function($http, $q) {
  var STATE_INITIAL = 0;
  var STATE_DOCUMENT_VERIFIED = 1;
  var STATE_EDU_DOC_VERIFIED = 2;
  var STATE_INTERVIEWED = 3;

  this.getInfo = function(national_id) {
    var deferred = $q.defer()

    $http.get(Config.PATH_GET_INFO + helper.decodeNationalID(national_id))
      .success(function(data, status, headers, config) {
        data.status_code = parseInt(status)
        deferred.resolve(data)
      })
      .error(function(data, status, headers, config) {
        dummy = {
          'status_code': parseInt(status)
        }

        deferred.resolve(dummy)

      })

    return deferred.promise
  }

  this.updateStation1 = function(national_id, documents_pass) {
    var deferred = $q.defer()

    $.post(Config.PATH_POST_INFO + helper.decodeNationalID(
      national_id), {
      'data': JSON.stringify({
        'state': STATE_DOCUMENT_VERIFIED,
        'documents': helper.boolToInt(documents_pass),
      }),

    }).
    done(function(data) {
      deferred.resolve(data)
    })

    return deferred.promise
  }

  this.updateStation2 = function(national_id, gpa, study_plan) {
    var deferred = $q.defer()

    $.post(Config.PATH_POST_INFO + helper.decodeNationalID(
      national_id), {
      'data': JSON.stringify({
        'state': STATE_EDU_DOC_VERIFIED,
        'is_study_plan_verified': helper.boolToInt(study_plan),
        'is_gpa_verified': helper.boolToInt(gpa)
      })

    }).
    done(function(data) {
      deferred.resolve(data)
    })

    return deferred.promise
  }

  this.updateStation3 = function(national_id, pass_all) {
    var deferred = $q.defer()

    $.post(Config.PATH_POST_INFO + helper.decodeNationalID(
      national_id), {
      'data': JSON.stringify({
        'state': STATE_INTERVIEWED,
        'is_passed': helper.boolToInt(pass_all),
      })

    }).
    done(function(data) {
      deferred.resolve(data)
    })

    return deferred.promise
  }
})
