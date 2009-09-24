// data.params.click - string of method name in controller
// data.params.icon - jquery-ui icon name
// data.params.value - text display value on button
TC.components.Button = function (controller, data) {
	this.get_haml = function () {
		var layout, params, css, icon_css, label_css, haml;
		
		layout = this.layout;
		params = this.params;
		css = parse_layout(layout);
		css.width = (layout.width - 2) + "px";
		css.height = (layout.height - 2) + "px";
		css.cursor = "pointer";
		icon_css = {
			position: "absolute",
			left: "3px",
			top: ((layout.height - 18) / 2) + "px"
		};
		label_css = {
			position: "absolute",
			left: (params.icon ? 16 : 0) + "px",
			"text-align": "center",
			width: (layout.width - (params.icon ? 19 : 2)) + "px",
			top: "0",
			'line-height': (layout.height - 1) + "px"
		};
	
		haml = [".ui-state-default ui-corner-all", {
				css: css,
				$: {
					click: [params.click],
					hover: [
						function () {
							$(this).addClass('ui-state-hover');
						},	function () {
							$(this).removeClass('ui-state-hover');
						}
					]
				}
			}
		];
		if (params.icon) {
			haml.push([".ui-icon.ui-icon-" + params.icon, {css: icon_css}]);
		}
		haml.push(["%div", {css: label_css}, params.value]);
		return haml;
	};
	TC.Component.apply(this, arguments);
};