<div class="modal fade" id="station3_modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style="background-color:#2ECC71">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title"><h3><span class="glyphicon glyphicon-ok" aria-hidden="true" style="color: #fff;"></span><font color="white"> รายละเอียด ผู้สมัคร (สอบสัมภาษณ์)</font></h3></h4>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-md-4"><h4><b>เลขที่สมัคร</b></h4></div>
            <div class="col-md-6"><h4>{{info.national_id}}</h4></div>
        </div>
        <div class="row">
            <div class="col-md-4"><h4><b>ชื่อ-นามสกุล</b></h4></div>
            <div class="col-md-6"><h4>{{info.full_name}}</h4></div>
        </div>
        <div class="row">
            <div class="col-md-4"><h4><b>สาขาวิชา-คณะ</b></h4></div>
            <div class="col-md-6"><h4>{{info.major.title}}</h4></div>
        </div>
        <div class="row">
            <div class="col-md-4"><h4><b>ผลสัมภาษณ์</b></h4></div>
            <div class="col-md-6">
                <h4>
                    <input type="radio" name="is_interview_pass" value="true" id="interview_pass" ng-model="interview_pass">
                    <font color="green"><label for="interview_pass">&nbsp;ผ่าน</label></font>
                </h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 col-md-offset-4">
                <h4>
                    <input type="radio" name="is_interview_pass" value="false" id="interview_notpass" ng-model="interview_pass">
                    <font color="red"><label for="interview_notpass">&nbsp;ไม่ผ่าน</label></font>
                </h4>
            </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" ng-click="hide_modal_station3()">Close</button>
        <button type="button" class="btn btn-success" ng-click="confirm_station3()">Submit</button>
      </div>
    </div>
  </div>
</div>
