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
            return new JSONModel("./model/tiles.json");
        },

        createTimerModel: function(){
            return new JSONModel({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
        }

    };
});