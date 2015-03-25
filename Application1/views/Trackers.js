Application1.Trackers = function (params) {

    
    var x = new DevExpress.data.DataSource(Application1.dbGPSSystems);
    x.load().done(function (result) {
        debugger;
        // 'result' contains the 'data' array items sorted by 'lastName'
    });
    debugger;

    for (var i = 0; i < x.length; i++) {
        alert(x[i].Bezeichnung);
    }


    var viewModel = {
        dsTrackers: new DevExpress.data.DataSource(Application1.db),

        btnAddClick: function (e) {
            Application1.app.navigate({ view: 'TrackerAdd2' });
        },

        onItemClick: function (e) {
            Application1.app.navigate({ view: 'TrackerEdit', obj: e.itemData });
        },
        viewShown: function (e) {
            if (e.direction == 'backward')
                this.dsTrackers.load();
        }
    };

    return viewModel;
};