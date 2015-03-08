app.controller('barcodeController', function($scope, infoService) {

  function decode_national_id(barcode) {
    return barcode.substr(2, 13)
  }

  // $scope.barcode = '00123456789101199'
  $scope.submit = function() {
    var national_id = decode_national_id($scope.barcode)
    infoService.getInfo(national_id).then(function(info) {
      $scope.info = info
        // console.log(info)
    })
    $scope.barcode = ''
    $("#station1_modal").modal('show')
  }
})
