<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Interview Station</title>

    <link href="asset/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div ng-app="station">
      <div ng-controller="barcodeController">

          <div class="form-group">
            <label for="barcode" class="label label-default">Barcode</label>
            <input type="text" class="form-control" name="barcode" placeholder="xxxxx" ng-model="barcode" ng-pattern="/^00[0-9]+99$/" ng-enter="submit()" />
            <span style="color:red" class="error" ng-show="barcode.$dirty && barcode.$invalid">บาร์โค้ดไม่ถูกต้อง</span><br>
            <!-- <p class="help-block">ใส่บาร์โค๊ดเลยจ้ะ</p> -->
          </div>
          <button type="button" name="submit" class="btn btn-primary">Submit</button>

          <? include __DIR__."/include/station1_modal.php" ?>
      </div>
    </div>


    <script src="asset/jquery/jquery-1.11.1.min.js"></script>
    <script src="asset/bootstrap/js/bootstrap.min.js"></script>
    <script src="asset/angular/angular.min.js"></script>
    <script src="app.js"></script>
    <script src="service.js"></script>
    <script src="controller.js"></script>
  </body>
</html>
