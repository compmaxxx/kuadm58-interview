<div class="modal fade" id="station1_modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style="background-color:#2ECC71">
     <!--    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> -->
        <h4 class="modal-title"><h3><span class="glyphicon glyphicon-list-alt" aria-hidden="true" style="color: #fff;"></span><font color="white"> รายละเอียด ผู้สมัคร (ตรวจเอกสาร)</font></h3></h4>
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
            <div class="col-md-4"><h4><b>สถานะ</b></h4></div>
            <div class="col-md-6">
                <h4>
                    <input type="radio" name="is_document_pass" value="true" id="document_pass" ng-model="document_pass">
                    <font color="green"><label for="document_pass">&nbsp;เอกสารครบ</label></font>
                </h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 col-md-offset-4">
                <h4>
                    <input type="radio" name="is_document_pass" value="false" id="document_notpass" ng-model="document_pass">
                    <font color="red"><label for="document_notpass">&nbsp;รอเอกสาร</label></font>
                </h4>
            </div>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" ng-click="hide_modal_station1()">Close</button>
        <button type="button" class="btn btn-success" ng-click="confirm_station1()">Submit</button>
      </div>
    </div>
  </div>
</div>
