// NOTE object below must be a valid JSON
window.Application1 = $.extend(true, window.Application1, {
	"config": {
		"layoutSet": "navbar",
		"navigation": [
			{
				"title": "Home",
				"onExecute": "#home",
				"icon": "home"
			},
			{
				"title": "About",
				"onExecute": "#about",
				"icon": "info"
			},
			{
				"title": "GPSSystems",
				"onExecute": "#GPSSystems",
				"icon": "gpssystems"
			},
			{
				"title": "Map",
				"onExecute": "#Map",
				"icon": "map"
			},
			{
				"title": "Trackers",
				"onExecute": "#Trackers",
				"icon": "trackers"
			}
		],
		"commandMapping": {
			"ios-header-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "before"
					}
				]
			},
			"android-footer-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "center"
					}
				]
			},
			"tizen-footer-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "center"
					}
				]
			},
			"generic-header-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "center"
					}
				]
			},
			"win8-phone-appbar": {
				"commands": [
					{
						"id": "search",
						"location": "center"
					}
				]
			},
			"android-simple-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "before"
					}
				]
			},
			"tizen-simple-toolbar": {
				"commands": [
					{
						"id": "search",
						"location": "before"
					}
				]
			}
		}
	}
});