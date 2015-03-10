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
      <div class="container" ng-controller="headerController">
        <div class="navbar-header">
          <span class="navbar-brand" style="color:#fff;">{{ header.title }}</span>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
              <li><a href="{{header.path_logout}}" style="color:#fff;">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>

  	<div class="container" style="padding-top: 70px;" ng-controller="barcodeController">
      <div>
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
	          <th><center>ที่</center></th>
	          <th><center>ชื่อ - สกุล</center></th>
	          <th><center>คณะ - สาขาวิชา</center></th>

	          <th><center>{{colume_titles[0]}}</center></th>
	          <th><center>{{colume_titles[1]}}</center></th>
	        </tr>
	      </thead>
	      <tbody>
	        <tr ng-repeat="history in historys">
	          <td>{{$index+1}}</td>
	          <td>{{history.full_name}}</td>
	          <td>{{history.major}}</td>
	          <td class="info" ng-show="history.is_pass=='true'"><center><span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true" style="color:#419641;"></span></center></td>
	          <td></td>
	          <td class="danger" ng-show="history.is_pass=='false'"><center><span class="glyphicon glyphicon-remove" aria-hidden="true"  style="color:#c12e2a;"></span></center></td>
	        </tr>
	      </tbody>
		</table>
		</div>
	</div>

  <script src="asset/jquery/jquery-1.11.1.min.js"></script>
  <script src="asset/bootstrap/js/bootstrap.min.js"></script>
  <script src="asset/angular/angular.min.js"></script>
  <script src="config.js"></script>
  <script src="app.js"></script>
  <script src="service.js"></script>
  <script src="controller.js"></script>

  </body>
</html>
