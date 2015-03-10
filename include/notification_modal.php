<div class="modal fade" id="notification_modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style="background-color:#FE4A65">
      <!--   <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> -->
        <h4 class="modal-title"><h3><span class="glyphicon glyphicon-list-alt" aria-hidden="true" style="color: #fff;"></span><font color="white">แจ้งเตือน</font></h3></h4>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-md-4"><h4><b>เลขที่สมัคร</b></h4></div>
            <div class="col-md-6"><h4>{{info.national_id}}</h4></div>
        </div>
        <div class="row" ng-show="showname">
            <div class="col-md-4"><h4><b>ชื่อ-นามสกุล</b></h4></div>
            <div class="col-md-6"><h4>{{info.full_name}}</h4></div>
        </div>
        <div class="row">
            <div class="col-md-8"><h4 ng-bind-html="notification_msg"></h4></div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" ng-click="hide_modal_station1()">Close</button>
      </div>
    </div>
  </div>
</div>
