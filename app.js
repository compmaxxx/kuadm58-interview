var app = angular.module('station', [])


var helper = {
	'boolToInt': function(data) {
		if (typeof data == 'boolean')
			return data ? 1 : 0
		else if (typeof data == 'string') {
			if (data == '1')
				return 1
			else if (data == 'true')
				return 1
			else
				return 0

		} else
			return 0

	},
	'decodeNationalID': function(barcode) {
		if (barcode.length <= 13) {
			return barcode.trim()
		} else {
			return barcode.trim().substr(2, 13)
		}

	}

}

app.directive('ngEnter', function() {
	return function(scope, element, attrs) {
		element.bind("keydown keypress", function(event) {
			if (event.which === 13) {
				scope.$apply(function() {
					scope.$eval(attrs.ngEnter);
				})

				event.preventDefault();
			}
		})
	}
})

function getModalShow() {
	var allModalIDs = ["#station1_modal", "#station2_modal", "#station3_modal",
		"#notification_modal"
	];
	for (var i = 0; i < allModalIDs.length; i++) {
		if ($(allModalIDs[i]).data) {
			if ($(allModalIDs[i]).data('bs.modal')) {
				if ($(allModalIDs[i]).data('bs.modal').isShown) {
					return allModalIDs[i];
				}
			}
		}
	}
	return null;
}

// press keydown and focus
$(document).bind('keydown', function(e) {
	if (getModalShow() == null) {
		$('#barcode').focus();
	}
});

// press keyup and focus
$(document).keydown(function(e) {
	var modal = getModalShow();
	if (modal != null) {
		if (e.keyCode == 27) {
			$(modal).modal('hide');
			$('#barcode').val('')
		} else if (e.which == 13) {
			if (modal == "#notification_modal") {
				// $(modal).modal('hide');
			} else {
				// alert("Submit " + modal);
				// console.log($(modal + ' button[class*="btn-success"'))
				// $(modal + ' button[class*="btn-success"').click();
			}
		}
	}
});
