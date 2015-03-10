app.controller('barcodeController', function($scope, infoService, $sce) {

  $scope.historys = [];
  $scope.colume_titles = Station[Config.STATION].column;

  function add_history(full_name, major, is_pass) {
    $scope.historys.unshift({
      full_name: full_name,
      major: major,
      is_pass: is_pass
    });
  }

  $scope.reset_barcode = function() {
    $scope.barcode = ''
  }

  $scope.permission_denied = function() {
    $scope.showname = false
    $scope.info = {
      'national_id': $scope.barcode
    }
    $scope.notification_msg = $sce.trustAsHtml(
      'คุณไม่มีสิทธิ์เข้าใช้งาน: กรุณา Login ที่ ' + Config.PATH_LOGIN)

    $scope.show_modal_error()
  }

  function handle_state_abnormal(info) {
    // Handle State Error ////////////////////////
    if (info.result.trim() == 'not-found') {
      // Not found applicant
      $scope.showname = false
      $scope.info = {
        'national_id': $scope.barcode
      }
      $scope.notification_msg = Config.state_handle.NOT_FOUND
    } else if (info.result == 'ok') {
      $scope.info = info
      if (parseInt(info.state) == 3 && helper.boolToInt(info.is_passed) ==
        0) {
        // Not pass and Go home
        $scope.showname = true
        $scope.notification_msg = Config.state_handle.NOT_PASS_INTERVIEW
      } else if (parseInt(info.state) == 2 && (helper.boolToInt(info.is_study_plan_verified) ==
          0 || helper.boolToInt(info.is_gpa_verified) == 0)) {
        // Get out to home

        $scope.showname = true
        $scope.notification_msg = Config.state_handle.NOT_PASS_PROPERTIES

      } else if (parseInt(info.state) == 1 && (helper.boolToInt(info.documents) ==
          0)) {
        // Go to station 1
        $scope.showname = true
        $scope.notification_msg = Config.state_handle.GO_TO_STATION1
      } else if (parseInt(info.state) == 3 && helper.boolToInt(info.is_passed) ==
        1) {
        // pass all
        $scope.showname = true
        $scope.notification_msg = Config.state_handle.PASS_ALL
      } else {
        // Incorrect station
        $scope.showname = true
        $scope.notification_msg = Config.state_handle.INCORRECT_STATION +
          (
            parseInt(info.state) + 1)

      }

    }
    $scope.show_modal_error()

    //END Handle State Error ////////////////////////
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
    $scope.reset_barcode()
  }

  $scope.submit_station1 = function() {
    infoService.getInfo($scope.barcode).then(function(info) {
      if (parseInt(info.status_code) == 403) {
        $scope.permission_denied()
        return;
      }
      if (info.result == 'ok' && parseInt(info.state) == 0) {
        $scope.info = info
      } else if (info.result == 'ok' && parseInt(info.state) == 1) {
        // handle come again
        $scope.info = info
        $scope.overlap = true
      } else {
        handle_state_abnormal(info)
        return;
      }
      $scope.show_modal_station1()

    })

  }

  $scope.confirm_station1 = function() {
    var document_pass = $scope.document_pass
      // console.log($scope.info.n)
    infoService.updateStation1($scope.info.national_id, document_pass)
    add_history($scope.info.full_name, $scope.info.major.title,
      document_pass);
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
    $scope.reset_barcode()
  }

  $scope.submit_station2 = function() {
    infoService.getInfo($scope.barcode).then(function(info) {
      if (parseInt(info.status_code) == 403) {
        $scope.permission_denied()
        return;
      }
      if (info.result == 'ok' && parseInt(info.state) == 1 && helper.boolToInt(
          info.documents) == 1) {
        $scope.info = info
      } else if (info.result == 'ok' && parseInt(info.state) == 2) {
        // handle come again
        $scope.info = info
        $scope.overlap = true
      } else {
        handle_state_abnormal(info)
        return;
      }
      $scope.show_modal_station2()
    })

  }

  $scope.confirm_station2 = function() {
    var gpa_pass = $scope.gpa_pass
    var study_plan_pass = $scope.study_plan_pass
    var all_pass = 'false';

    if (study_plan_pass == 'true' && gpa_pass == 'true') {
      all_pass = 'true';
    }
    // console.log($scope.info.n)
    infoService.updateStation2($scope.info.national_id, gpa_pass,
      study_plan_pass)
    add_history($scope.info.full_name, $scope.info.major.title, all_pass);
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
    $scope.reset_barcode()
  }

  $scope.submit_station3 = function() {
    infoService.getInfo($scope.barcode).then(function(info) {
      if (parseInt(info.status_code) == 403) {
        $scope.permission_denied()
        return;
      }
      if (info.result == 'ok' && parseInt(info.state) == 2 && helper.boolToInt(
          info.is_gpa_verified) == 1 && helper.boolToInt(info.is_study_plan_verified) ==
        1) {
        $scope.info = info
      } else if (info.result == 'ok' && parseInt(
          info.state) == 3) {
        // handle come again
        $scope.info = info
        $scope.overlap = true
      } else {
        handle_state_abnormal(info)
        return;
      }
      $scope.show_modal_station3()
    })
  }

  $scope.confirm_station3 = function() {
    var interview_pass = $scope.interview_pass
      // console.log($scope.info.n)
    infoService.updateStation3($scope.info.national_id, interview_pass)
    add_history($scope.info.full_name, $scope.info.major.title,
      interview_pass);
    $scope.hide_modal_station3()
  }

  // END STATION 3 //////////////////////////////////////


  $scope.submit = function() {
    $scope.have_come = Config.state_handle.HAVE_COME
    $scope.overlap = false
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
