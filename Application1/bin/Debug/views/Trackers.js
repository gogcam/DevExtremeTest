Application1.Trackers = function (params) {

    var viewModel = {
        dsTrackers: new DevExpress.data.DataSource({
            store: Application1.db,
            searchExpr: "Bezeichnung"
        }),

        btnAddClick: function (e) {
            Application1.app.navigate({ view: 'TrackerAdd2' });
        },

        onItemClick: function (e) {
            Application1.app.navigate({ view: 'TrackerEdit', obj: e.itemData });
        },
        viewShown: function (e) {
            if (e.direction == 'backward')
                this.dsTrackers.load();
        },

        searchString: ko.observable(''),
        find: function () {
            viewModel.showSearch(!viewModel.showSearch());
            viewModel.searchString('');
        },
        showSearch: ko.observable(false),
    };

    ko.computed(function () {
        return viewModel.searchString();
    }).extend({
        throttle: 500
    }).subscribe(function () {
        debugger;
        viewModel.dsTrackers.searchValue(viewModel.searchString());
        viewModel.dsTrackers.pageIndex(0);
        viewModel.dsTrackers.load();
    });

    return viewModel;
};