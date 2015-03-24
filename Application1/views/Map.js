Application1.Map = function (params) {

    var SERVICE_URL = 'http://gpswebservice.sorba.ch/GPSWebService/Sys/rest/GetTrackersCurrentPositions/%7B%22KundenNr%22:%2236373%22,%22Domain%22:%22KMUmitKST14%22%7D'

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
                    deferred.resolve(data.PositionDataList);
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

    mapMarkers = ko.observableArray([]);

    mapReady = function () {
        for (var i = 0; i < x.PositionDataList.length; i++) {
            var k = x.PositionDataList[i];
            var mapPosition = k.Latitude + "," + k.Longitude;
            //DevExpress.ui.notify("i=\n" + i, "error", 5000);
            //mapMarker.push({ tooltip: k.ID_Tracker, location: mapPosition })

            mapMarkers.push({
                title: k.ID_Tracker,
                tooltip: { text: "<p>" + k.ID_Tracker + " " + k.Time + "</p>", isShown: false },
                location: mapPosition,
                clickAction: function () {
                    DevExpress.ui.notify("Marker 'C' clicked!", "info", 1000);
                }
            });
        }
    }

    var viewModel = {

    }

    return viewModel;
};