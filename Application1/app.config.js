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
      },
    ]
  }
});