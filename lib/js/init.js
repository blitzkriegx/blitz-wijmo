steal( // JS
	'./core/json/json-2.0.min.js')
	.then('./core/jq/jquery-1.7.2.min.js')
	.then('./core/jq/jquery-ui-1.8.21.custom.min.js')
	.then('./core/wijmo/external/globalize.min.js')
	.then('./core/wijmo/external/raphael.min.js')
	.then('./core/wijmo/jquery.wijmo-complete.all.2.1.4.min.js')
	.then('./core/ko/knockout-2.1.0.min.js')
	.then('./core/ko/knockout-wijmo.min.js')
	.css( // CSS
	'../../assets/css/style.css',
	'../../assets/css/wijmo/wijmo.complete.min.css',
	'../../assets/css/wijmo/rocket/jquery-wijmo.css')
	.then( // Init()
	function () {
		$.noConflict();

		jQuery(document).ready(function ($) {
			alert("Holy fak does this work? :S");
		});
	}
);