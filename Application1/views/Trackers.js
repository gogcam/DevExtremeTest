Application1.Trackers = function (params) {

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