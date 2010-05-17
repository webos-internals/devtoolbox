opus.Gizmo({
	name: "main",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "pageHeader1",
			title: "Dev Toolbox",
			subtitle: "",
			icon: "http://www.webos-internals.org/images/8/8d/Icon_WebOSInternals_WebOSInternals.png",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 0
		},
		{
			name: "group1",
			dropTarget: true,
			label: "Options",
			type: "Palm.Mojo.Group",
			l: 0,
			t: 52,
			controls: [
				{
					name: "row1",
					dropTarget: true,
					focusHighlight: false,
					tapHighlight: false,
					autoRowType: false,
					type: "Palm.Mojo.Row",
					l: 0,
					t: 0,
					controls: [
						{
							name: "panel1",
							layoutKind: "hbox",
							dropTarget: true,
							type: "Palm.Mojo.Panel",
							l: 0,
							t: 0,
							h: 60,
							controls: [
								{
									name: "label2",
									label: "On When Connected",
									type: "Palm.Mojo.Label",
									l: 0,
									t: 0,
									styles: {
										oneLine: true,
										fontSize: "15px",
										textAlign: "center"
									}
								},
								{
									name: "owc_toggle",
									modelName: "owc_toggle_model",
									trueValue: true,
									falseValue: false,
									trueLabel: "True",
									falseLabel: "False",
									onchange: "owc_toggleChange",
									type: "Palm.Mojo.ToggleButton",
									l: 187,
									w: 115,
									t: 0,
									styles: {
										oneLine: false,
										fontSize: "15px"
									}
								}
							]
						}
					]
				},
				{
					name: "row2",
					dropTarget: true,
					rowType: "last",
					type: "Palm.Mojo.Row",
					l: 0,
					t: 52,
					h: "auto"
				}
			]
		}
	]
});