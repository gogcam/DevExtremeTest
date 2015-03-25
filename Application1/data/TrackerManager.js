var TrackerType = function (data) {
    var self = this;
    self.ID = ko.observable();
    self.INR = ko.observable();
    self.Bezeichnung = ko.observable();
    self.Stamm = ko.observable();
    self.SerialNumber = ko.observable();
    self.ID_GPSSystem = ko.observable();
    self.KundenNr = ko.observable('36373');
    self.Domain = ko.observable('KMUmitKST14');
    self.Icon = ko.observable();
    self.Run1AsRunTime = ko.observable();
    self.Run2AsRunTime = ko.observable();
    self.Run3AsRunTime = ko.observable();
    self.Run1Mapping = ko.observable();
    self.Run2Mapping = ko.observable();
    self.Run3Mapping = ko.observable();
    self.MinTimeOnConstructionSite = ko.observable();
    self.MaxRunawayTime = ko.observable();
    self.PositionDataCorrectionPriority = ko.observable();

    debugger;
    if (data) {
        for (var k in data) self[k] = ko.observable(data[k]);

        debugger;
    }
};
