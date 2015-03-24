Application1.GPSSystems = function (params) {

    var SERVICE_URL = 'http://devsk-nb1-win81/GPSWebService/Sys/rest/GetGPSSystems2'

    var x;

    var dbImpl = {
        url: SERVICE_URL,
        _sendRequest: function (type, params) {
            var deferred = new $.Deferred();
            var requestSettings = {
                url: $.trim(dbImpl.url),
                type: type,
                success: function (data) {
                    x = data;
                    deferred.resolve(data.GPSSystems);
                }
            };


            $.ajax(requestSettings);

            return deferred;
            //  return x;
        },
        load: function (loadOptions) {
            return dbImpl._sendRequest('GET');
        },
        insert: function (params) {
            return dbImpl._sendRequest('POST', params);
        },
        update: function (params) {
            return dbImpl._sendRequest('PUT', params);
        },
        remove: function (params) {
            return dbImpl._sendRequest('DELETE', params);
        }
    };

    listDataSource = new DevExpress.data.CustomStore(dbImpl);

    var viewModel = {
//  Put the binding properties here
    };

    return viewModel;
};