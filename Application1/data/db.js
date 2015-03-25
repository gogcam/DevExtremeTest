(function ($, DX) {
    var SERVICE_URL_GET_TRACKERS = 'http://devsk-nb1-win81/GPSWebService/Sys/rest/GetTrackers/%7B%22KundenNr%22:%2236373%22,%22Domain%22:%22KMUmitKST14%22%7D'
    var SERVICE_URL_UPDATE_TRACKER = 'http://devsk-nb1-win81/GPSWebService/Sys/rest/UpdateTracker'
    var SERVICE_URL_GET_GPSSYSTEMS = 'http://devsk-nb1-win81/GPSWebService/Sys/rest/GetGPSSystems'

    //var SERVICE_URL_GET_TRACKERS = 'http://gpswebservice.sorba.ch/GPSWebService/Sys/rest/GetTrackers/%7B%22KundenNr%22:%2236373%22,%22Domain%22:%22KMUmitKST14%22%7D'
    //var SERVICE_URL_UPDATE_TRACKER = 'http://gpswebservice.sorba.ch/GPSWebService/Sys/rest/UpdateTracker'
    //var SERVICE_URL_GET_GPSSYSTEMS = 'http://gpswebservice.sorba.ch/GPSWebService/Sys/rest/GetGPSSystems'

    var x;

    function postJson(url, jsObj, whenSuccess, whenError) {
        var json_data = JSON.stringify(jsObj);

        json_data = '{"Tracker":' + json_data + '}';

        $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: url,
            data: json_data,
            success: function (result) {
                if (result.StatusCode != 0) {
                    DevExpress.ui.dialog.alert(result.StatusMessage, 'test');
                }

                
                if (whenSuccess !== undefined) { whenSuccess(result); }
            },
            error: function (xhr) {
                if (whenError !== undefined) { whenError(xhr.status); }
            }
        });
    }

    var dbImpl = {
        _sendRequest: function (myurl, type, params) {
            var deferred = new $.Deferred();
            var requestSettings = {
                url: $.trim(myurl),
                type: type,
                success: function (data) {
                    x = data;
                    deferred.resolve(data.TrackerList);
                }
            };

            if (params) {
                json_data = JSON.stringify(params);

                requestSettings.contentType = 'application/json';
                requestSettings.dataType = "Text";
                requestSettings.data = json_data;
            }

            $.ajax(requestSettings);

            return deferred;
            //  return x;
        },
        load: function (loadOptions) {
            return dbImpl._sendRequest(SERVICE_URL_GET_TRACKERS, 'GET');
        },
        insert: function (params) {
            return dbImpl._sendRequest(SERVICE_URL_UPDATE_TRACKER, 'POST', params);
        },
        update: function (params) {
            postJson(SERVICE_URL_UPDATE_TRACKER, params, undefined, undefined);
            //return dbImpl._sendRequest(SERVICE_URL_UPDATE_TRACKER, 'POST', params);
        },
        remove: function (params) {
            return dbImpl._sendRequest('DELETE', params);
        }
    };

    Application1.db = new DevExpress.data.CustomStore(dbImpl);

    var dbImplGPSSystems = {
        _sendRequest: function (myurl, type, params) {
            var deferred = new $.Deferred();
            var requestSettings = {
                url: $.trim(myurl),
                type: type,
                success: function (data) {
                    debugger;
                    x = data;
                    deferred.resolve(data.GPSSystems);
                },
            };

            $.ajax(requestSettings);

            debugger;
            return deferred;
        },
        byKey: function (key) {
            debugger;

            var dfd = $.Deferred();
            
            var x = new DevExpress.data.DataSource(Application1.dbGPSSystems);
            x.load().done(function (result) {
                debugger;
                for (var i = 0; i < result.length; i++) {
                    if (result[i].ID == key) {
                        dfd.resolve({
                            ID: result[i].ID,
                            Bezeichnung: result[i].Bezeichnung
                        });
                        return;
                    }
                }
            });

            debugger;
            return dfd.promise();
        },
        load: function (loadOptions) {
            return dbImplGPSSystems._sendRequest(SERVICE_URL_GET_GPSSYSTEMS, 'GET');
        },
        insert: function (params) {
            return dbImplGPSSystems._sendRequest(SERVICE_URL_GET_GPSSYSTEMS, 'POST', params);
        },
        update: function (params) {
            return dbImplGPSSystems._sendRequest('DELETE', params);
        },
        remove: function (params) {
            return dbImplGPSSystems._sendRequest('DELETE', params);
        }
    };

    debugger;
    Application1.dbGPSSystems = new DevExpress.data.CustomStore(dbImplGPSSystems);

})(jQuery, DevExpress);