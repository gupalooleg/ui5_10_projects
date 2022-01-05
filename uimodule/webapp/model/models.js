sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function (JSONModel, Device) {
    "use strict";

    return {

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createTilesModel: function (){
            const sUrl = sap.ui.require.toUrl("com/ah/uimodule/model/tiles.json");
            return new JSONModel(sUrl);
        },

        createTimerModel: function(){
            return new JSONModel({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
        },

        createVaccinesModel: function(){
            var sUrl = sap.ui.require.toUrl("com/ah/uimodule/model/vaccines.json");
            return new JSONModel(sUrl);
        },

        createVaccinationViewSettingsModel: function(){
            return new JSONModel({
                "viewTypeGRRB": {
                    "tableRB": true,
                    "calendarRB": false
                },
                "startDate": new Date()
            });
        }

    };
});