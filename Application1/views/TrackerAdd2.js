Application1.TrackerAdd2 = function (params) {

    var t = new TrackerType(undefined);
    debugger;

    var viewModel = {
        test: t,

        dsGPSSystems: new DevExpress.data.DataSource(Application1.dbGPSSystems),

        btnSaveClick: function (e) {
            var request = ko.mapping.toJS(viewModel.test);

            Application1.db.update(request).done(function (data) {
                Application1.app.back();
            });
        }
    };

    return viewModel;
};