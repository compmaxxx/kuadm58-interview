<!DOCTYPE html>
<html lang="en">
  <head>
  	<meta charset="utf-8">
    <link href="asset/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- <link href="asset/bootstrap/css/bootstrap-theme.min.css" rel="stylesheet"> -->
    <title>Interview Station</title>
  </head>
  <body ng-app="station">

  	<nav class="navbar navbar-fixed-top" style="background-color: #2ECC71;" >
      <div class="container">
        <div class="navbar-header" ng-controller="headerController">
          <span class="navbar-brand" style="color:#fff;">{{ header.title }}</span>
        </div>
      </div>
    </nav>

  	<div class="container" style="padding-top: 70px;">
      <div ng-controller="barcodeController">
    	 	<center>
    			<form class="form-inline">
    				<div class="form-group">
    					<label for="barcode"><h3>เลขที่สมัคร</h3></label>
    					<input type="text" id="barcode" class="form-control input-lg" name="barcode" placeholder="XXXXXXXXXXXXX" ng-model="barcode" autocomplete="off">
    					<button name="submit" class="btn btn-success input-lg" ng-click="submit()">Submit</button>
    				</div>
    			</form>
    		</center>
        <!-- Modal Station -->
        <? include __DIR__."/include/station1_modal.php" ?>
        <? include __DIR__."/include/station2_modal.php" ?>
        <? include __DIR__."/include/station3_modal.php" ?>
        <? include __DIR__."/include/notification_modal.php" ?>
		</div>

		<div  style="padding-top: 30px;">
	    <table class="table table-bordered">
		 <thead>
	        <tr class="active">
	          <th rowspan=2><center>ที่</center></th>
	          <th colspan=5><center>ชื่อ - สกุล</center></th>
	          <th rowspan=2><center>เอกสารครบ</center></th>
	          <th rowspan=2><center>รอเอกสาร</center></th>
	        </tr>
	        <tr class="active">
	          <th><center>คำนำหน้า</center></th>
	          <th><center>ชื่อ</center></th>
	          <th><center>นามสกุล</center></th>
	          <th><center>คณะ</center></th>
	          <th><center>สาขาวิชา</center></th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr>
	          <td>1</td>
	          <td>นางสาว</td>
	          <td>อภิญญา</td>
	          <td>ประดิษฐผลเลิศ</td>
	          <td>วิศวกรรมศาสตร์</td>
	          <td>วิศวกรรมคอมพิวเตอร์</td>
	          <td class="info"><center><span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true" style="color:#419641;"></span></center></td>
	          <td></td>
	        </tr>
	        <tr>
	          <td>2</td>
	          <td>นาย</td>
	          <td>ณัช</td>
	          <td>เรือนเพ็ชร์</td>
	          <td>วิศวกรรมศาสตร์</td>
	          <td>วิศวกรรมคอมพิวเตอร์</td>
	          <td></td>
	          <td class="danger"><center><span class="glyphicon glyphicon-remove" aria-hidden="true"  style="color:#c12e2a;"></span></center></td>
	        </tr>
	        <tr>
	          <td>3</td>
	          <td>นาย</td>
	          <td>คณิน</td>
	          <td>วรางคณากูล</td>
	          <td>วิศวกรรมศาสตร์</td>
	          <td>วิศวกรรมคอมพิวเตอร์</td>
	          <td></td>
	          <td class="danger"><center><span class="glyphicon glyphicon-remove" aria-hidden="true"  style="color:#c12e2a;"></span></center></td>
	        </tr>
	      </tbody>
		</table>
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
