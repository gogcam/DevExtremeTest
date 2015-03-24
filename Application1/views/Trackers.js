Application1.Trackers = function (params) {


    var viewModel = {
        dsTrackers: new DevExpress.data.DataSource(Application1.db),
        //  Put the binding properties here
        //btnEditClick: function (id, name) {
        //    var uri = Application1.app.router.format({
        //        view: 'TrackerEdit',
        //        ID: id,
        //        Bezeichnung: name
        //    });
        //    debugger;
        //    Application1.app.navigate(uri);
        //},

        btnAddClick: function (e) {
            Application1.app.navigate('addView');
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