Application1.TrackerEdit = function (params) {

    var viewModel = {
        Tracker: params.obj,
        ID: params.obj.ID,
        Bezeichnung: ko.observable(params.obj.Bezeichnung),
        MaxRunawayTime: ko.observable(params.obj.MaxRunawayTime),

        btnSaveClick: function (e) {
            params.obj.Bezeichnung = viewModel.Bezeichnung();
            params.obj.MaxRunawayTime = viewModel.MaxRunawayTime();

            Application1.db.update(params.obj).done(function (data) {
                Application1.app.back();
            });
        }
    };

    return viewModel;
};