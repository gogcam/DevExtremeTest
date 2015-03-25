Application1.TrackerEdit = function (params) {

    debugger;
    var t = new TrackerType(params.obj);

    var viewModel = {
        test: t,

        //Bezeichnung: ko.observable(params.obj.Bezeichnung),
        //MaxRunawayTime: ko.observable(params.obj.MaxRunawayTime),

        btnSaveClick: function (e) {
            debugger;
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


//Application1.TrackerEdit = function (params) {

//    var viewModel = {
//        test: ko.mapping.fromJS(params.obj),

//        ID: params.obj.ID,
//        //Bezeichnung: ko.observable(params.obj.Bezeichnung),
//        //MaxRunawayTime: ko.observable(params.obj.MaxRunawayTime),

//        btnSaveClick: function (e) {
//            debugger;
//            //params.obj.Bezeichnung = viewModel.Bezeichnung();
//            //params.obj.MaxRunawayTime = viewModel.MaxRunawayTime();

//            Application1.db.update(params.obj).done(function (data) {
//                Application1.app.back();
//            });
//        }
//    };

//    return viewModel;
//};