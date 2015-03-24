Application1.greeting = function (params) {

    var viewModel = {
        message: ko.observable('Hello ' + params.id)
    };

    return viewModel;
};