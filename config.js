var Station = {
	1: {
		'title': 'STATION 1 ลงทะเบียนตรวจเอกสาร',
		'document_pass': 'true',
		'column': ['เอกสารครบ', 'รอเอกสาร']
	},
	2: {
		'title': 'STATION 2 ตรวจสอบคุณสมบัติ',
		'gpa_pass': 'true',
		'study_plan_pass': 'true',
		'column': ['ผ่าน', 'ไม่ผ่าน']
	},
	3: {
		'title': 'STATION 3 สอบสัมภาษณ์',
		'interview_pass': 'true',
		'column': ['ผ่าน', 'ไม่ผ่าน']
	},
}

var Config = {
	'STATION': 3,
	'PATH_GET_INFO': 'http://localhost/regis/api/applicant?id=',
	'PATH_POST_INFO': 'http://localhost/regis/api/applicant?id=',
	'state_handle': {
		'NOT_FOUND': 'ไม่มีข้อมูลผู้สมัคร',
		'NOT_PASS_INTERVIEW': 'ผู้สมัครไม่ผ่านการสอบสัมภาษณ์(3) กลับบ้านไปซะ',
		'NOT_PASS_PROPERTIES': 'ผู้สมัครมีคุณสมบัติไม่ครบ(2) กลับบ้านไปซะ',
		'GO_TO_STATION1': 'มาผิดสถานีแล้วจ้ะ ไปสถานีที่ 1 ก่อน',
		'PASS_ALL': 'ผ่านสัมภาษณ์แล้ว กลับบ้านได้เลยค่า',
		'INCORRECT_STATION': 'มาผิดสถานีแล้วจ้ะ ไปสถานีที่ ',
		'HAVE_COME': 'ผู้สมัครเคยมาแล้วครับ'
	}
}
