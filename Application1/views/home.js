Application1.home = function (params) {

    function navigate() {
        Application1.app.navigate("greeting/" + this.name());
    }

    var viewModel = {
        message: ko.observable("Hello"),
        name: ko.observable(""),

        sayHello: function () {
            this.message("Hello " + this.name());
        },

        navigate: navigate
    };

    return viewModel;
};