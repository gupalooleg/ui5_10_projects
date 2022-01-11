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

        createPortfolioModel: function () {
            const sUrl = sap.ui.require.toUrl("com/ah/uimodule2/model/portfolio.json");
            var oModel = new JSONModel(sUrl);
            return oModel;
        }

    };
});