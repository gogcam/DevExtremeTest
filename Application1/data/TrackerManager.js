var TrackerType = function (data) {
    var self = this;
    self.ID = ko.observable('');
    self.INR = ko.observable('');
    self.Bezeichnung = ko.observable('');
    self.Stamm = ko.observable('');
    self.SerialNumber = ko.observable('');
    self.ID_GPSSystem = ko.observable(0);
    self.KundenNr = ko.observable('36373');
    self.Domain = ko.observable('KMUmitKST14');
    self.Icon = ko.observable('');
    self.Run1AsRunTime = ko.observable(false);
    self.Run2AsRunTime = ko.observable(false);
    self.Run3AsRunTime = ko.observable(false);
    self.Run1Mapping = ko.observable('');
    self.Run2Mapping = ko.observable('');
    self.Run3Mapping = ko.observable('');
    self.MinTimeOnConstructionSite = ko.observable(0);
    self.MaxRunawayTime = ko.observable(0);
    self.PositionDataCorrectionPriority = ko.observable(0);

    if (data) {
        for (var k in data) self[k] = ko.observable(data[k]);
    }
};
