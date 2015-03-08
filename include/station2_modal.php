<div class="modal fade" id="station2_modal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header" style="background-color:#2ECC71">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title"><h3><span class="glyphicon glyphicon-list" aria-hidden="true" style="color: #fff;"></span><font color="white"> รายละเอียด ผู้สมัคร (ตรวจสอบคุณสมบัติ)</font></h3></h4>
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
        <br/>
        <div class="row">
            <div class="col-md-4"><h4><b>GPA ขั้นต่ำ(>=)</b></h4></div>
            <div class="col-md-6"><h4><b>{{info.major.min_gpa}}</b></h4></div>
        </div>
        <div class="row">
            <div class="col-md-4"><h4><b>แผนการเรียน</b></h4></div>
            <div class="col-md-6"><h4><b>{{info.major.study_plans}}</b></h4></div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-4"><h4><b>สถานะ</b></h4></div>
            <div class="col-md-3">
                <h4>คะแนนเฉลี่ย</h4>
            </div>
            <div class="col-md-2">
                <h4>
                    <input type="radio" name="is_gpa_pass" value="true" id="gpa_pass" checked>
                    <font color="green"><label for="gpa_pass">&nbsp;ผ่าน</label></font>
                </h4>
            </div>
            <div class="col-md-2">
                <h4>
                    <input type="radio" name="is_gpa_pass" value="false" id="gpa_notpass">
                    <font color="red"><label for="gpa_notpass">&nbsp;ไม่ผ่าน</label></font>
                </h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-offset-4 col-md-3">
                <h4>แผนการเรียน</h4>
            </div>
            <div class="col-md-2">
                <h4>
                    <input type="radio" name="is_studyplan_pass" value="true" id="studyplan_pass" checked>
                    <font color="green"><label for="studyplan_pass">&nbsp;ผ่าน</label></font>
                </h4>
            </div>
            <div class="col-md-2">
                <h4>
                    <input type="radio" name="is_studyplan_pass" value="false" id="studyplan_notpass"><font color="red">
                    <label for="studyplan_notpass">&nbsp;ไม่ผ่าน</label></font>
                </h4>
            </div>
        </div>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Submit</button>
      </div>
    </div>
  </div>
</div>
