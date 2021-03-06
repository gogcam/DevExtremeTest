﻿Application1.TrackerEdit = function (params) {

    var t = new TrackerType(params.obj);

    var viewModel = {
        test: t,

        dsGPSSystems: new DevExpress.data.DataSource(Application1.dbGPSSystems),

        //Bezeichnung: ko.observable(params.obj.Bezeichnung),
        //MaxRunawayTime: ko.observable(params.obj.MaxRunawayTime),

        btnSaveClick: function (e) {
            var request = ko.mapping.toJS(viewModel.test);

            //params.obj.Bezeichnung = viewModel.Bezeichnung();
            //params.obj.MaxRunawayTime = viewModel.MaxRunawayTime();

            Application1.db.update(request).done(function (data) {
                Application1.app.back();
            });
        }
    };

    return viewModel;
};