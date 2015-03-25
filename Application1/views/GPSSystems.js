Application1.GPSSystems = function (params) {

    var viewModel = {
        listDataSource: new DevExpress.data.DataSource(Application1.dbGPSSystems)
    };

    return viewModel;
};